$(document).ready(function () {
    $("#login").submit(function (e) {
        e.preventDefault();
    })
    $("#signin").click(function () {
        var data = {};
        data.email_id = $('#username').val();
        data.password = $('#password').val();
        data.child_id = $('#child_id').val();
        console.log("getting value form the user");
        var settings = {
            "crossDomain": true,
            "url": "http://localhost:3406/validateuser",
            "method": "POST",
            "headers": {
                "content-type": "application/json",
            },
            "processData": false,
            "data": JSON.stringify(data),
        }
        $.ajax(settings).done(function (response) {

            if ((response == 1) || (response == 2) || (response == 3)) {
                $('#errormodal').modal();
                    return false;
                }
            else if(response.role == 3){
                window.location.href = "childReviewForm.html"
            }
            else if(response.role == 4){
                window.location.href = "adminhome.html"
            }
        });
    })
});