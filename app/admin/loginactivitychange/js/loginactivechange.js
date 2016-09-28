$(document).ready(function () {
    httpGet("/loginactivechange", function (response) {
        var i = 0;
        response.forEach(function (element) {

            if (element.childrenprofile) {
                $('#display').append('<div class="col-sm-3 col-xs-3"><p>'+element.childrenprofile.full_name+'</p></div><div class="col-sm-3 col-xs-3"><p>'+element.childrenprofile.user_id+'</p></div><div class="col-sm-3 col-xs-3"><p>'+element.childrenprofile.role+'</p></div><div class="col-sm-3 col-xs-3"><label class="switch"><input type="checkbox"><div class="slider round"></div></label></div>');
            }
            else if (element.profile) {
                $('#display').append('<div class="col-sm-3 col-xs-3"><p>'+element.profile.name+'</p></div><div class="col-sm-3 col-xs-3"><p>'+element.profile.email_id+'</p></div><div class="col-sm-3 col-xs-3"><p>'+element.profile.role+'</p></div><div class="col-sm-3 col-xs-3"><label class="switch"><input type="checkbox"><div class="slider round"></div></label></div>');
                // alert(element.profile.name);
            }
        }, this);
    })
})