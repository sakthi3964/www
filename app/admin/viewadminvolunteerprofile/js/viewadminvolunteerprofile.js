$(document).ready(function () {
    var session = localStorage.getItem("user");
    if (session == null) {
        window.location.href = "../../../../index.html";
    }
    else {
        var url = window.location.href;
        var id = url.substring(url.lastIndexOf(':') + 1);
        var data = {};
        data.id = id;
        httpPost("/viewvolunteer", data, function (response) {
            //date display code
            var dateObj = new Date(response[0].dob);
            var day = dateObj.getDate();
            var year = dateObj.getFullYear();
            var monthNames = ["January", "February", "March", "April", "May", "June",
                "July", "August", "September", "October", "November", "December"
            ];
            var currole = response[0].role;
            var monthna = new Date(response[0].dob);
            var month = monthNames[monthna.getMonth()];
            var commitment = response[0].profileinfo.commitment + "&nbsphours / month"
            $("#blockreg2").removeClass("hide");
            $(".loading").addClass("hide");
            if (currole == "volunteer") {
                $('#title').append("volunteer details")
                $('#profileimage').append('<img src="' +profile_photo + response[0].profileinfo.photo + '" width="150" height="150">');
            }
            else if (currole == "mentor") {
                $('#title').append("Mentor details");
                $('#profileimage').append('<img src="' + profile_photo + response[0].profileinfo.photo + '" width="150" height="150">');
            }
            $('#name').html(response[0].name);
            $('#role').html(response[0].role);
            $('#dob').html(day + "-" + month + "-" + year);
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
            $('#work_type').html(response[0].profileinfo.work_type);
            $('#course').html(response[0].profileinfo.course);
            $('#department').html(response[0].profileinfo.department);
            $('#institution').html(response[0].profileinfo.institution);
            $('#address').html(response[0].state);
            $('#mobile_no').html(response[0].mobile_no);
            $('#email_id').html(response[0].email_id);
            $('#work_type').html(response[0].profileinfo.work_type);
            $('#reference').html(response[0].profileinfo.reference);
            var commitment = response[0].profileinfo.commitment + "&nbsphours / month"
            $('#commitment').html(commitment) + 'hours in a month';
            $('#designation').html(response[0].profileinfo.designation);
            $('#organization').html(response[0].profileinfo.organization);
        });
    }
});