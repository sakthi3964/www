$(document).ready(function () {

    httpGet("/loginactivechange", function (response) {
        var i = 0;
        response.forEach(function (element) {
            console.log(element.active);
            if (element.childrenprofile) {

                $('#display').append('<div class="col-sm-3 col-xs-3"><p>' + element.childrenprofile.full_name + '</p></div><div class="col-sm-3 col-xs-3"><p>' + element.childrenprofile.user_id + '</p></div><div class="col-sm-3 col-xs-3"><p>' + element.childrenprofile.role + '</p></div><div class="col-sm-3 col-xs-3"><label class="switch"><input class="request" id =' + element.childrenprofile.id + ' type="checkbox" value=' + element.childrenprofile.active_ind + '><div class="slider round"></div></label></div>');

                if (element.active == 1) {
                    $('input:checkbox[id =' + element.childrenprofile.id + ']').attr('checked', true);
                }
            }
            else if (element.profile) {
                $('#display').append('<div class="col-sm-3 col-xs-3"><p>' + element.profile.name + '</p></div><div class="col-sm-3 col-xs-3"><p>' + element.profile.email_id + '</p></div><div class="col-sm-3 col-xs-3"><p>' + element.profile.role + '</p></div><div class="col-sm-3 col-xs-3"><label class="switch"><input type="checkbox" id =' + element.profile.id + ' class="request" ><div class="slider  round"></div></label></div>');
                // alert(element.profile.name);
                if (element.active == 1) {
                    $('input:checkbox[id =' + element.profile.id + ']').attr('checked', true);
                }
            }
        }, this);
        $('.request').change(function () {
            var id = $(this).attr("id");
            var data = {}
            if (this.checked) {
                data.id = id;
                data.active = 1;
                data.time = new Date();
                httpPost("/activechange", data, function (response) {
                });

            }
            else {
                data.id = id;
                data.active = 0;
                data.time = new Date();
                httpPost("/activechange", data, function (response) {

                });
            }

        });
    });
});