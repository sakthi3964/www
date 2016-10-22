
var data = {};

var id = localStorage.getItem("user");
data.id = id;
var role = localStorage.getItem("role");

httpPost("/viewvolunteer", data, function (response) {
    if (role == "volunteer") {
        $('#profileimage').append('<img src="http://localhost:3406/uploads/volunteer/photo/' + response[0].profileinfo.photo + '" width="150" height="150">');
    }
    else{
        $('#profileimage').append('<img src="http://localhost:3406/uploads/mentor/photo/' + response[0].profileinfo.photo + '" width="150" height="150">');        
    }
    $('#name').html(response[0].name);
    $('#role').html(response[0].role);
    $('#dob').html(response[0].dob);
    $('#age').html(response[0].age);
    $('#gender').html(response[0].gender);
    $('#address_line1').html(response[0].address_line1);
    $('#address_line2').html(response[0].address_line2);
    $('#city').html(response[0].city);
    $('#email_id').html(response[0].email_id);
    $('#state').html(response[0].state);
    $('#country').html(response[0].country);
    $('#postal_code').html(response[0].postal_code);
    $('#mobile_no').html(response[0].mobile_no);
    $('#phone').html(response[0].phone);
    $('#work_type').html(response[0].profileinfo.work_type);
    $('#course').html(response[0].profileinfo.course);
    $('#department').html(response[0].profileinfo.department);
    $('#institution').html(response[0].profileinfo.institution);
    $('#reference').html(response[0].profileinfo.reference);
    $('#commitment').html(response[0].profileinfo.commitment);
    if (response[0].profileinfo.designation == "") {
        $('#designationrow').hide();
    }
    else {
        $('#designationrow').show();
        $('#designation').html(response[0].profileinfo.designation);
    }
    if (response[0].profileinfo.organization == "") {
        $('#organizationrow').hide();
    }
    else {
        $('#organizationrow').show();
        $('#organization').html(response[0].profileinfo.organization);
    }
    if (response[0].profileinfo.area_of_expertise == "") {
        $('#area_of_expertiserow').hide();
    }
    else {
        $('#area_of_expertiserow').show();
        $('#area_of_expertise').html(response[0].profileinfo.area_of_expertise);
    }
    if (response[0].profileinfo.experience == "") {
        $('#experiencerow').hide();
    }
    else {
        $('#experiencerow').show();
        $('#experience').html(response[0].profileinfo.experience);
    }
    return false;
});