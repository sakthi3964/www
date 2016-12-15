$(document).ready(function () {
    var data = {};

    var id = localStorage.getItem("user");
    data.id = id;
    var child_id;
    httpPost("/viewchild", data, function (response) {
        console.log(response);
        $('#profileimage').append('<img src = "' + BASEURL + '/uploads/children/photos/' + response[0].childrenprofile.photos + '" width="150" height="150">');
        $("#blockreg2").removeClass("hide");
        $(".loading").addClass("hide");
        child_id = response[0].childrenprofile.id;
        $('#name').html(response[0].childrenprofile.full_name);
        $('#dob').html(response[0].childrenprofile.dob);
        $('#dob').html(response[0].childrenprofile.dob);
        $('#Gender').html(response[0].childrenprofile.gender);
        $('#Center').html(response[0].childrenprofile.center);
    });
    $("#view_preassessment").click(function () {
        window.location = "../../viewpreassessment/en/viewpreassessment.html?id:" + child_id;
    });
});