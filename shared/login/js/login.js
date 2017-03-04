
$(document).ready(function () {
        $("#login").submit(function (e) {
            e.preventDefault();
        })
        var session = localStorage.getItem("user");
        $('#login')
            .formValidation({
                framework: 'bootstrap',
                fields: {
                    username: {
                        validators: {
                            notEmpty: {
                                message: localization.username[lang()]
                            }
                        }
                    },
                }
            })
        $("#signin").click(function () {
            var data = {};
            data.email_id = $('#username').val();
            data.password = $('#password').val();

            httpPost("/validateuser", data, function (response) {
                console.log(response);
                if ((response == 1) || (response == 2) || (response == 3)) {
                    $('#errormodal').modal({ backdrop: 'static', keyboard: false });
                    return false;
                }
                else if (response.verification_status == 0) {
                   $('#verification_status').modal({ backdrop: 'static', keyboard: false });
                }
                else if (response.status == 0) {
                    $('#errormodal2').modal({ backdrop: 'static', keyboard: false });
                }
                else if (response.active == 0) {
                    $('#errormodal3').modal({ backdrop: 'static', keyboard: false });
                }
                 else if (response.status == 2) {
                   $('#approvaldenyModal').modal({ backdrop: 'static', keyboard: false });
                }
                
                else if (response.role == 'volunteer') {

                    localStorage.setItem("user", response.user_id);
                    localStorage.setItem("role", response.role);
                    window.location.href = "app/volunteer/volunteerhome/en/volunteerhome.html"
                }
                else if (response.role == 'mentor') {
                    console.log(response.user_id);
                    localStorage.setItem("user", response.user_id);
                    localStorage.setItem("role", response.role);
                    window.location.href = "app/mentor/mentorhome/en/mentorhome.html"
                }
                else if (response.role == 'children') {
                    console.log(response.user_id);
                    localStorage.setItem("user", response.user_id);
                    localStorage.setItem("role", response.role);
                    window.location.href = "app/children/childrenshome/en/childrenhome.html"
                }
                else if (response.role == 'admin') {
                    localStorage.setItem("user", response.user_id);
                    localStorage.setItem("role", response.role);
                    window.location.href = "app/admin/adminhome/en/adminhome.html"
                }
            })
        })
});