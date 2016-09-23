
var data = {};

var url = window.location.href;
data.id = url.substring(url.lastIndexOf(':') + 1);
console.log(data.id);
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://localhost:3406/viewchildrenownprofile",
    "method": "POST",
    "headers": {
        "content-type": "application/json",

    },
    "processData": false,

    "data": JSON.stringify(data),
}
$.ajax(settings).done(function (response) {
    console.log(response);

   // var res = JSON.parse(response.pre_assessment_data);
    //console.log(res.standard);

    $('#name').html(response.full_name);
    $('#dob').html(response.dob);
    $('#Gender').html(response.gender);
    $('#Center').html(response.center);
    $('#UserId').html(response.user_id);
    $('#UserId').html(response.user_id);



    $('#request').click(function () {

        var dataForRequest = {};
        dataForRequest.volunteer_id = localStorage.getItem("user");
        dataForRequest.role = localStorage.getItem("role");

        var url = window.location.href;
        dataForRequest.children_id = url.substring(url.lastIndexOf(':') + 1);

        var settings1 = {
            "async": true,
            "crossDomain": true,
            "url": "http://localhost:3406/insertConnectionRequest",
            "method": "POST",
            "headers": {
                "content-type": "application/json",
            },
            "processData": false,

            "data": JSON.stringify(dataForRequest),
        }
        $.ajax(settings1).done(function (response1) {

            console.log(response1);

        });
    });



    return false;
});