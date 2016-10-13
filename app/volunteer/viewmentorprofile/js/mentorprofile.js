
var data = {};


data.id =localStorage.getItem("user");
console.log(data.id);

httpPost("/viewvolunteermentorprofile", data, function (response) {
    $('#name').html(response[0].profile.name);
    $('#role').html(response[0].profile.role);
    $('#dob').html(response[0].profile.dob);
    $('#age').html(response[0].profile.age);
    $('#gender').html(response[0].profile.gender);
    $('#address_line1').html(response[0].profile.address_line1);
    $('#address_line2').html(response[0].profile.address_line2);
    $('#city').html(response[0].profile.city);
    $('#email_id').html(response[0].profile.email_id);
    $('#state').html(response[0].profile.state);
    $('#country').html(response[0].profile.country);
    $('#postal_code').html(response[0].profile.postal_code);
    $('#mobile_no').html(response[0].profile.mobile_no);
    $('#phone').html(response[0].profile.phone);
    $('#work_type').html(response[0].profile.profileinfo.work_type);
    $('#course').html(response[0].profile.profileinfo.course);
    $('#department').html(response[0].profile.profileinfo.department);
    $('#institution').html(response[0].profile.profileinfo.institution);
    $('#reference').html(response[0].profile.profileinfo.reference);
    $('#commitment').html(response[0].profile.profileinfo.commitment);
    $('#designation').html(response[0].profile.profileinfo.designation);
    $('#organization').html(response[0].profile.profileinfo.organization);
    $('#area_of_expertise').html(response[0].profile.profileinfo.area_of_expertise);
    $('#experience').html(response[0].profile.profileinfo.experience);
    return false;
});