$(document).ready(function () {
    var session = localStorage.getItem("user");
    if (session == null) {
        window.location.href = "../../../../index.html";
    }
    else {
        $("#reviewBody").submit(function (e) {
            e.preventDefault();
        })
        var slider = new Slider("#education");

        $("#education").slider();
        $("#education").on("slide", function (education) {
            console.log("education:" + education.value);

        });
        var slider = new Slider("#health");
        $("#health").slider();
        $("#health").on("slide", function (health) {
            console.log("health:" + health.value);
        });
        var slider = new Slider("#familyRelationship");
        $("#familyRelationship").slider();
        $("#familyRelationship").on("slide", function (familyRelationship) {
            console.log("familyRelationship:" + familyRelationship.value);
        });
        var slider = new Slider("#friendRelationship");
        $("#friendRelationship").slider();
        $("#friendRelationship").on("slide", function (friendRelationship) {
            console.log("friendRelationship:" + friendRelationship.value);
        });
        var slider = new Slider("#positiveAttitude");
        $("#positiveAttitude").slider();
        $("#positiveAttitude").on("slide", function (positiveAttitude) {
            console.log("positiveAttitude:" + positiveAttitude.value);
        });
        var slider = new Slider("#coCurricular");
        $("#coCurricular").slider();
        $("#coCurricular").on("slide", function (coCurricular) {
            console.log("coCurricular:" + coCurricular.value);
        });
        var slider = new Slider("#socialCommunity");
        $("#socialCommunity").slider();
        $("#socialCommunity").on("slide", function (socialCommunity) {
            console.log("socialCommunity:" + socialCommunity.value);
        });
        var slider = new Slider("#safeFeel");
        $("#safeFeel").slider();
        $("#safeFeel").on("slide", function (safeFeel) {
            console.log("safeFeel:" + safeFeel.value);
        });
        var slider = new Slider("#socialInteraction");
        $("#socialInteraction").slider();
        $("#socialInteraction").on("slide", function (socialInteraction) {
            console.log("socialInteraction:" + socialInteraction.value);
        });
        var slider = new Slider("#hygiene");
        $("#hygiene").slider();
        $("#hygiene").on("slide", function (hygiene) {
            console.log("hygiene:" + hygiene.value);
        });
        $("#submit1").click(function () {
            var data = {};
            var id = localStorage.getItem("user");
            var review = {};
            review.education = education.value;
            review.educationText = ($('#reviewcom1').val()).trim();
            review.health = health.value;
            review.healthText = ($('#reviewcom2').val()).trim();
            review.familyRelationship = familyRelationship.value;
            review.familyRelationshipText = ($('#reviewcom3').val()).trim();
            review.friendRelationship = friendRelationship.value;
            review.friendRelationshipText = ($('#reviewcom4').val()).trim();
            review.positiveAttitude = positiveAttitude.value;
            review.positiveAttitudeText = ($('#reviewcom5').val()).trim();
            review.coCurricular = coCurricular.value;
            review.coCurricularText = ($('#reviewcom6').val()).trim();
            review.socialCommunity = socialCommunity.value;
            review.socialCommunityText = ($('#reviewcom7').val()).trim();
            review.safeFeel = safeFeel.value;
            review.safeFeelText = ($('#reviewcom8').val()).trim();
            review.socialInteraction = socialInteraction.value;
            review.socialInteractionText = ($('#reviewcom9').val()).trim();
            review.hygiene = hygiene.value;
            review.hygieneText = ($('#reviewcom10').val()).trim();
            data.review = JSON.stringify(review);
            data.date = ($('#date').val()).trim();
            console.log("hekl;dfh;lsadf" + data.date);
            data.id = id;

            $(".loading").removeClass("hide");
            $("#reviewBody").addClass("hide");
            $("#childheading").addClass("hide");
            httpPost("/tracker", data, function (response) {
                $(".loading").addClass("hide");
                console.log(response);
                $('#reviewmodal').modal({ backdrop: 'static', keyboard: false });
            })

        });
    }

});