$(document).ready(function () {
    var url = window.location.href;
    var id = url.substring(url.lastIndexOf(':') + 1);
    var data = {};
    data.id = id;
    httpPost("/viewvolunteer", data, function (response) {
        alert(response[0].profileinfo.work_type);
        $('#name').html(response[0].name);
        $('#course').html(response[0].profileinfo.course);
        $('#department').html(response[0].profileinfo.department);
        $('#institution').html(response[0].profileinfo.institution);
        $('#address').html(response[0].state);
        $('#mobile_no').html(response[0].mobile_no);
        $('#email_id').html(response[0].email_id);
        $('#work_type').html(response[0].profileinfo.work_type);
        $('#reference').html(response[0].profileinfo.reference);
        $('#designation').html(response[0].profileinfo.designation);
        $('#organization').html(response[0].profileinfo.organization);
    });
});