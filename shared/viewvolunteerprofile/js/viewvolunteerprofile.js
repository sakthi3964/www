$(document).ready(function () {
    var id = localStorage.getItem("user");
    var data = {};
    data.id = id;
    httpPost("/viewchildvolunteer", data, function (response) {
        $('#name').html(response[0].profile.name);
        $('#address').html(response[0].profile.state);
        $('#mobile_no').html(response[0].profile.mobile_no);
        $('#email_id').html(response[0].profile.email_id);
        console.log(response[0].profile.profileinfo.course);
        $('#course').html(response[0].profile.profileinfo.course);
        $('#department').html(response[0].profile.profileinfo.department);
        $('#institution').html(response[0].profile.profileinfo.institution);
        $('#work_type').html(response[0].profile.profileinfo.work_type);
        $('#reference').html(response[0].profile.profileinfo.reference);
        $('#designation').html(response[0].profile.profileinfo.designation);
        $('#organization').html(response[0].profile.profileinfo.organization);
    });
});