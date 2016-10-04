
var data = {};

var url = window.location.href;
data.id = url.substring(url.lastIndexOf(':') + 1);
console.log(data.id);

httpPost("/viewmentor", data, function (response) {
    console.log(response);

    // var res = JSON.parse(response.pre_assessment_data);
    //console.log(res.standard);

    $('#name').html(response[0].name);
    $('#dob').html(response[0].profileinfo.designation);
    $('#Gender').html(response[0].profileinfo.work_type);
    $('#Center').html(response[0].profileinfo.course);
    $('#UserId').html(response[0].profileinfo.email_id);
    $('#UserId').html(response[0].profileinfo.city);



    $('#request').click(function () {
        var dataForRequest = {};
        dataForRequest.mentor_id = localStorage.getItem("user");
        dataForRequest.role = localStorage.getItem("role");
        var url = window.location.href;
        dataForRequest.children_id = url.substring(url.lastIndexOf(':') + 1);
        httpPost("/insertConnectionRequest", dataForRequest, function (response) {
            console.log(response);

        });
    });



    return false;
});