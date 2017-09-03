$(document).ready(function () {
    var session = localStorage.getItem("user");
    if (session == null) {
        window.location.href = "../../../../index.html";
    }
    else {
        var data = {};
        var url = window.location.href;
        var date1 = url.substring(url.indexOf('&') + 1, url.length);
        var date2 = date1.substring(date1.indexOf('&') + 1, date1.length);

        var date3 = date2.substring(date2.indexOf('&') + 1, date2.length);
        data.date = date3;
        data.profileId = localStorage.getItem("user");
        data.role = localStorage.getItem("role");
        if (data.role == "admin") {
            var dec = url.substring(url.lastIndexOf('#') + 1);
            data.childId = window.atob(dec);
        }
        if (data.role == "children") {
            data.childId = localStorage.getItem("user");
            console.log(data.childId);
        }    
        httpPost("/viewReviewDetail", data, function (response) {
            console.log("response", response);
            $("#chartContainer").removeClass("hide");
            $(".loading").addClass("hide");

            var res2 = JSON.parse(response.review);
            var education = parseInt(res2.education);
            var health = parseInt(res2.health);
            var familyRelationship = parseInt(res2.familyRelationship);
            var friendRelationship = parseInt(res2.friendRelationship);
            var positiveAttitude = parseInt(res2.positiveAttitude);
            var coCurricular = parseInt(res2.coCurricular);
            var socialCommunity = parseInt(res2.socialCommunity);
            var safeFeel = parseInt(res2.safeFeel);
            var socialInteraction = parseInt(res2.socialInteraction);
            var hygiene = parseInt(res2.hygiene);
            var chart = new CanvasJS.Chart("chartContainer",
                {
                    title: {
                        text: "Holistic Indicators"
                    },
                    animationEnabled: true,
                    // axisY: {
                    //     title: "Points"
                    // },
                    axisX: {
                        labelAngle: 90
                    },

                    legend: {
                        verticalAlign: "bottom",
                        horizontalAlign: "center"
                    },
                    theme: "theme4",
                    backgroundColor: "#ECF1F5",
                    data: [
                        {
                            type: "column",
                            dataPoints: [
                                { y: education, label: "Education" },
                                { y: health, label: "health" },
                                { y: familyRelationship, label: "familyRelationship" },
                                { y: friendRelationship, label: "friendRelationship" },
                                { y: positiveAttitude, label: "positiveAttitude" },
                                { y: coCurricular, label: "coCurricular" },
                                { y: socialCommunity, label: "socialCommunity" },
                                { y: safeFeel, label: "safeFeel" },
                                { y: socialInteraction, label: "socialInteraction" },
                                { y: hygiene, label: "hygiene" }
                            ]
                        }
                    ]
                });
            chart.render();
        });
    }
});