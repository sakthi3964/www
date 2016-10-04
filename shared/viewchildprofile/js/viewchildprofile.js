
var data = {};

var id=localStorage.getItem("user");
data.id = id;
console.log(data.id);

httpPost("/viewchild", data, function (response) {
    console.log(response);
    console.log(response[0].childrenprofile.full_name);
    $('#name').html(response[0].childrenprofile.full_name);
    $('#dob').html(response[0].childrenprofile.dob);
    $('#Gender').html(response[0].childrenprofile.gender);
    $('#Center').html(response[0].childrenprofile.center);
    $('#UserId').html(response[0].childrenprofile.user_id);
    return false;
});