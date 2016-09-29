
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
httpPost("/viewchildrenownprofile", data, function (response) {
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
        console.log("volunteer id" + dataForRequest.volunteer_id);
        alert(dataForRequest.volunteer_id);
        dataForRequest.role = localStorage.getItem("role");
        alert(dataForRequest.role);
        console.log("role" + dataForRequest.role);
        var url = window.location.href;
        dataForRequest.children_id = url.substring(url.lastIndexOf(':') + 1);
        console.log("childrenid0" + dataForRequest.children_id);
        httpPost("/insertConnectionRequest", dataForRequest, function (response) {
            console.log(response);

        });
    });



    return false;
});