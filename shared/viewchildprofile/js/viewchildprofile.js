$(document).ready(function () {
    var data = {};

    var id = localStorage.getItem("user");
    data.id = id;
    console.log(data.id);
    var child_id;
    httpPost("/viewchild", data, function (response) {
        child_id = response[0].childrenprofile.id;
        $('#name').html(response[0].childrenprofile.full_name);
        $('#dob').html(response[0].childrenprofile.dob);
        $('#Gender').html(response[0].childrenprofile.gender);
        $('#Center').html(response[0].childrenprofile.center);
    });
    $("#view_preassessment").click(function () {
        window.location = "../../viewpreassessment/en/viewpreassessment.html?id:"+child_id;
    });
});