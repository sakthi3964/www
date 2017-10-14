$(document).ready(function () {
    var session = localStorage.getItem("user");

    if (session == null) {
        window.location.href = "../../../../index.html";
    }
    else {
        $("#contactUs").submit(function (e) {
            e.preventDefault();
        });
        $("#submit").click(function () {
            var role = localStorage.getItem("role");
            var data = {};
            data.issues = $('#issues').val();
            data.other_comments = ($('#other_comments').val()).trim();
            data.subject = $('#subject').val();
            data.userId = localStorage.getItem("user");
            console.log(data);
            if ($('#issues').val() == "" || $('#other_comments').val() == "" || $('#subject').val() == "") {
                console.log("helloiiiss");
                $('#contactempty').modal({ backdrop: 'static', keyboard: false });
                return false;
            }
            httpPost("/contactUs", data, function (response) {
                if (response == "success") {
                    if (role == "volunteer") {
                        window.location.href = "../../../app/volunteer/volunteerhome/en/volunteerhome.html";
                    }
                    else {
                        window.location.href = "../../../app/mentor/mentorhome/en/mentorhome.html";
                    }
                }
            });

        });

    }


});