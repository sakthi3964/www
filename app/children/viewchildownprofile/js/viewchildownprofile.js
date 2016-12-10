
var data = {};

var id = localStorage.getItem("user");
console.log(id);
data.id = id;
console.log(data.id);

httpPost("/viewchildrenownprofile", data, function (response) {
    $('#profileimage').append('<img src = '+BASEURL+'/uploads/children/photos/' + response.photos + '" width="150" height="150">');
    $('#name').html(response.full_name);
    $('#dob').html(response.dob);
    $('#Gender').html(response.gender);
    $('#Center').html(response.center);
    $('#UserId').html(response.user_id);
    return false;
});