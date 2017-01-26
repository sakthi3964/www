$(document).ready(function () {
    var session = localStorage.getItem("user");
    if (session == null) {
        window.location.href = "../../../../index.html";
    }
    else {
        var data = {};
        var url = window.location.href;
        var date1 = url.substring(url.indexOf(':') + 1, url.length);
        var date2 = date1.substring(date1.indexOf(':') + 1, date1.length);

        var date3 = date2.substring(date2.indexOf(':') + 1, date2.length);
        data.date = date3;



        httpPost("/viewChildrenReview", data, function (response) {
            $("#chartContainer").removeClass("hide");
            $(".loading").addClass("hide");

            var res2 = JSON.parse(response.review);
            console.log(res2);
            var time = parseInt(res2.time);
            var care = parseInt(res2.care);
            var behaviour = parseInt(res2.behaviour);
            var confidentiality = parseInt(res2.confidentiality);
            var mentorship = parseInt(res2.mentorship);
            var environment = parseInt(res2.environment);
            var feelings = parseInt(res2.feelings);
            var willingness = parseInt(res2.willingness);
            var learning = parseInt(res2.learning);
            var feedback = parseInt(res2.feedback);
            var chart = new CanvasJS.Chart("chartContainer",
                {
                    title: {
                        text: " Indicators"
                    },
                    animationEnabled: true,
                    axisY: {
                        title: "Points"
                    },
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
                                { y: time, label: "time" },
                                { y: care, label: "care" },
                                { y: behaviour, label: "behaviour" },
                                { y: confidentiality, label: "confidentiality" },
                                { y: mentorship, label: "mentorship" },
                                { y: environment, label: "environment" },
                                { y: feelings, label: "feelings" },
                                { y: willingness, label: "willingness" },
                                { y: learning, label: "learning" },
                                { y: feedback, label: "feedback" }
                            ]
                        }
                    ]
                });
            chart.render();
        });
    }
});