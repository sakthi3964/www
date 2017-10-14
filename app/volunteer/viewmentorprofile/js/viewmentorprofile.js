$(document).ready(function () {
    var session = localStorage.getItem("user");
    if (session == null) {
        window.location.href = "../../../../index.html";
    }
    else {
        var data = {};
        var url = window.location.href;
        data.id = url.substring(url.lastIndexOf(':') + 1);
        httpPost("/viewmentor", data, function (response) {

            var dateObj = new Date(response[0].dob);
            var day = dateObj.getDate();
            var year = dateObj.getFullYear();
            var monthNames = ["January", "February", "March", "April", "May", "June",
                "July", "August", "September", "October", "November", "December"
            ];
            var monthna = new Date(response[0].dob);
            var month = monthNames[monthna.getMonth()];
            $("#blockreg2").removeClass("hide");
            $(".loading").addClass("hide");
            // response[0].profileinfo.photo="";
            var profileImageUrl = "";
            if(response[0].profileinfo.photo){
              profileImageUrl = profile_photo + response[0].profileinfo.photo;
            }else{
              profileImageUrl= 'https://www.bsn.eu/wp-content/uploads/2016/12/user-icon-image-placeholder-300-grey.jpg';
            }
            $('#profileimage').append('<div class="view-profile-image"><img src="' + profileImageUrl + '" width="150" height="150"></div>');
            $('#name').html(response[0].name);
            $('#role').html(response[0].role);
            $('#dob').html(day + "-" + month + "-" + year);
            $('#age').html(response[0].age);
            $('#gender').html(response[0].gender);
            // $('#address_line1').html(response[0].address_line1);
            // $('#address_line2').html(response[0].address_line2);
            // $('#city').html(response[0].city);
            // $('#email_id').html(response[0].email_id);
            // $('#state').html(response[0].state);
            // $('#country').html(response[0].country);
            // $('#postal_code').html(response[0].postal_code);
            // $('#mobile_no').html(response[0].mobile_no);
            $('#work_type').html(response[0].profileinfo.work_type);
            $('#course').html(response[0].profileinfo.course);
            $('#department').html(response[0].profileinfo.department);
            $('#institution').html(response[0].profileinfo.institution);
            $('#reference').html(response[0].profileinfo.reference);
            var commitment = response[0].profileinfo.commitment + "&nbsphours / month"
            $('#commitment').html(commitment);
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
            $('#request').click(function () {
                var dataForRequest = {};
                var url = window.location.href;
                dataForRequest.profile_id = url.substring(url.lastIndexOf(':') + 1);
                dataForRequest.volunteer_id = localStorage.getItem("user");
                dataForRequest.time = new Date();
                dataForRequest.role = 'mentor';
                dataForRequest.process='vcm';
                dataForRequest.action='request';
                httpPost("/insertConnectionRequest", dataForRequest, function (response) {
                    if (response == "1") {
                        $('#multiplerequest').modal({ backdrop: 'static', keyboard: false});
                    }
                    else {
                        $('#childrequest').modal({ backdrop: 'static', keyboard: false});
                    }

                });
            });
            return false;
        });
    }
});