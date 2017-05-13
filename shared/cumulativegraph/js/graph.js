$(document).ready(function () {
    var session = localStorage.getItem("user");

    if (session == null) {
        window.location.href = "../../../../index.html";
    }
    else {
         $(".loading").removeClass("hide");
        var data = {};
        data.common = 1;
        var url = window.location.href;
        var date1 = url.substring(url.indexOf(':') + 1, url.length);
        var date2 = date1.substring(date1.indexOf(':') + 1, date1.length);
        var date3 = date2.substring(date2.indexOf(':') + 1, date2.length);
        data.date = date3;
        data.profileId = localStorage.getItem("user");
        httpPost("/cumulativegraph", data, function (response) {
            $("#getdate").removeClass("hide");
            $(".loading").addClass("hide");
            response.forEach(function (element) {
                $('#fromdate').append(' <option value=' + element.date + '>' + element.date + '</option>')
                $('#todate').append(' <option value=' + element.date + '>' + element.date + '</option>')
            }, this);

        });
    }
    function decimalPlaces(number) {
  return ((+number).toFixed(20)).replace(/^-?\d*\.?|0+$/g, '').length;
}
    //cumulativegraph generation
    $("#submitcumulative").click(function () {
        //  $(".loading").addClass("hide");
        $(".loading").removeClass("hide");
        var res = [];
        var education,health,familyRelationship,positiveAttitude,coCurricular,socialCommunity,safeFeel,socialInteraction,hygiene;
        var educationCummulative = 0,healthCummulative = 0,familyRelationshipCummulative = 0,friendRelationshipCummulative = 0,positiveAttitudeCummulative = 0,coCurricularCummulative = 0,socialCommunityCummulative = 0,safeFeelCummulative = 0,socialInteractionCummulative = 0,hygieneCummulative = 0;
        var data = {};
        data.fromdate = $('#fromdate').val();
        data.todate = $('#todate').val();
        data.profileId=localStorage.getItem("user");
        httpPost("/cumulativegraphwithdate", data, function (response) {
            $("#chartContainer").removeClass("hide");
            $(".loading").addClass("hide");
            for (var i = 0; i < response.length; i++) {
                res[i] = JSON.parse(response[i].review);
                educationCummulative = educationCummulative + parseInt(res[i].education);
                healthCummulative = healthCummulative + parseInt(res[i].health);
                familyRelationshipCummulative = familyRelationshipCummulative + parseInt(res[i].familyRelationship);
                friendRelationshipCummulative = friendRelationshipCummulative + parseInt(res[i].friendRelationship);
                positiveAttitudeCummulative = positiveAttitudeCummulative + parseInt(res[i].positiveAttitude);
                coCurricularCummulative = coCurricularCummulative + parseInt(res[i].coCurricular);
                socialCommunityCummulative = socialCommunityCummulative + parseInt(res[i].socialCommunity);
                safeFeelCummulative = safeFeelCummulative + parseInt(res[i].safeFeel);
                socialInteractionCummulative = socialInteractionCummulative + parseInt(res[i].socialInteraction);
                hygieneCummulative = hygieneCummulative + parseInt(res[i].hygiene);
            }
            education = educationCummulative / response.length;
            health = healthCummulative / response.length;
            familyRelationship = familyRelationshipCummulative / response.length;
            friendRelationship = friendRelationshipCummulative / response.length;
            positiveAttitude = positiveAttitudeCummulative / response.length;
            coCurricular = coCurricularCummulative / response.length;
            socialCommunity = socialCommunityCummulative / response.length;
            safeFeel = safeFeelCummulative / response.length;
            socialInteraction = socialInteractionCummulative / response.length;
            hygiene = hygieneCummulative / response.length;

            var chart = new CanvasJS.Chart("chartContainer",
                {
                    title: {
                        text: "Holistic Indicators"
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
                            indexLabelFontSize:25,
                            dataPoints: [
                                { y: education, label: "Education", indexLabel:(decimalPlaces(education)>1?education.toFixed(1):education).toString(),indexLabelPlacement:"inside"},
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

    });
});