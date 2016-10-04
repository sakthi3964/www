
var data = {};

var id = localStorage.getItem("user");
console.log(id);
data.id = id;
console.log(data.id);

httpPost("/viewchildrenownprofile", data, function (response) {
    console.log(response);
    $('#name').html(response.full_name);
    console.log()
    $('#dob').html(response.dob);
    $('#Gender').html(response.gender);
    $('#Center').html(response.center);
    $('#UserId').html(response.user_id);
    $('#UserId').html(response.user_id);
    return false;
});