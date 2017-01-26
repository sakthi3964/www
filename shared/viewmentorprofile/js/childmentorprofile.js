$(document).ready(function () {
    var session = localStorage.getItem("user");
    if (session == null) {
        window.location.href = "../../../../index.html";
    }
    else {
        var data = {};
        data.id = localStorage.getItem("user");
        var url = window.location.href;
        var lastIndex = url.substring(url.lastIndexOf('/') + 1);
        var check = lastIndex.toString();
        var check1 = check.includes("id");
        if (check1 == true) {
            return;
        }
        else {

            httpPost("/viewchildvolunteer", data, function (response) {

                $(".loading").addClass("hide");
                if (response[0] == null || response[1] == null) {
                    $('#mentor_record').modal();
                }

                // if ((response[0] && response[1]) == null) {
                //     $('#mentor_record').modal();
                // }
                // else {
                //date display code
                // var dateObj = new Date(response[0].profile.dob);
                // var day = dateObj.getUTCDate();
                // var year = dateObj.getUTCFullYear();
                // var monthNames = ["January", "February", "March", "April", "May", "June",
                //     "July", "August", "September", "October", "November", "December"
                // ];
                // var monthna = new Date(response[0].profile.dob);
                // var month = monthNames[monthna.getMonth()];
                else {
                    $("#blockreg2").removeClass("hide");
                    if (response[0].profile.role == "mentor") {
                        $('#profileimage').append('<img src="' + BASEURL + '/uploads/mentor/photo/' + response[0].profile.profileinfo.photo + '" width="150" height="150">');
                        $('#name').html(response[0].profile.name);
                        $('#role').html(response[0].profile.role);
                        $('#dob').html(day + "-" + month + "-" + year);
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
                        if (response[0].profile.profileinfo.designation == "") {
                            $('#designationrow').hide();
                        }
                        else {
                            $('#designationrow').show();
                            $('#designation').html(response[0].profile.profileinfo.designation);
                        }
                        if (response[0].profile.profileinfo.organization == "") {
                            $('#organizationrow').hide();
                        }
                        else {
                            $('#organizationrow').show();
                            $('#organization').html(response[0].profile.profileinfo.organization);
                        }
                        if (response[0].profile.profileinfo.area_of_expertise == "") {
                            $('#area_of_expertiserow').hide();
                        }
                        else {
                            $('#area_of_expertiserow').show();
                            $('#area_of_expertise').html(response[0].profile.profileinfo.area_of_expertise);
                        }
                        if (response[0].profile.profileinfo.experience == "") {
                            $('#experiencerow').hide();
                        }
                        else {
                            $('#experiencerow').show();
                            $('#experience').html(response[0].profile.profileinfo.experience);
                        }
                    }
                    else {
                        $("#blockreg2").removeClass("hide");
                        $('#profileimage').append('<img src="' + BASEURL + '/uploads/mentor/photo/' + response[1].profile.profileinfo.photo + '" width="150" height="150">');
                        $('#name').html(response[1].profile.name);
                        $('#role').html(response[1].profile.role);
                        $('#dob').html(response[1].profile.dob);
                        $('#age').html(response[1].profile.age);
                        $('#gender').html(response[1].profile.gender);
                        $('#address_line1').html(response[1].profile.address_line1);
                        $('#address_line2').html(response[1].profile.address_line2);
                        $('#city').html(response[1].profile.city);
                        $('#email_id').html(response[1].profile.email_id);
                        $('#state').html(response[1].profile.state);
                        $('#country').html(response[1].profile.country);
                        $('#postal_code').html(response[1].profile.postal_code);
                        $('#mobile_no').html(response[1].profile.mobile_no);
                        $('#phone').html(response[1].profile.phone);
                        $('#work_type').html(response[1].profile.profileinfo.work_type);
                        $('#course').html(response[1].profile.profileinfo.course);
                        $('#department').html(response[1].profile.profileinfo.department);
                        $('#institution').html(response[1].profile.profileinfo.institution);
                        $('#reference').html(response[1].profile.profileinfo.reference);
                        $('#commitment').html(response[1].profile.profileinfo.commitment);
                        if (response[1].profile.profileinfo.designation == "") {
                            $('#designationrow').hide();
                        }
                        else {
                            $('#designationrow').show();
                            $('#designation').html(response[1].profile.profileinfo.designation);
                        }
                        if (response[1].profile.profileinfo.organization == "") {
                            $('#organizationrow').hide();
                        }
                        else {
                            $('#organizationrow').show();
                            $('#organization').html(response[1].profile.profileinfo.organization);
                        }
                        if (response[1].profile.profileinfo.area_of_expertise == "") {
                            $('#area_of_expertiserow').hide();
                        }
                        else {
                            $('#area_of_expertiserow').show();
                            $('#area_of_expertise').html(response[1].profile.profileinfo.area_of_expertise);
                        }
                        if (response[1].profile.profileinfo.experience == "") {
                            $('#experiencerow').hide();
                        }
                        else {
                            $('#experiencerow').show();
                            $('#experience').html(response[1].profile.profileinfo.experience);
                        }
                    }
                }

                // }


            });
        }
    }
});

