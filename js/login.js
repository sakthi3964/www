$(document).ready(function () {
    $("#login").submit(function (e) {
        e.preventDefault();
    })
    var session = localStorage.getItem("user");
    $("#signin").click(function () {
        var data = {};
        data.email_id = $('#username').val();
        data.password = $('#password').val();
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
            else if(response.role == 1){
                console.log(response.id);
                localStorage.setItem("user", response.id);
                window.location.href = "childrenhome.html"
            }
            else if(response.role == 2){
                localStorage.setItem("user", response.id);
                window.location.href = "volunteerhome.html"
            }
            else if(response.role == 3){
                localStorage.setItem("user", response.id);
                window.location.href = "mentorhome.html"
            }
            else if(response.role == 4){
                localStorage.setItem("user", response.id);
                window.location.href = "adminhome.html"
            }
        });
    })
});