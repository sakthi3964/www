$(document).ready(function () {
    var session = localStorage.getItem("user");
    if (session == null) {
        window.location.href = "../../../../index.html";
    }
    else {
        function mentorApproval() {
            var user = localStorage.getItem("user");
            var data = {};
            data.profileId = user;
            data.operation = "details";
            console.log("my details",data);
            httpPost("/mentorapproval", data, function (response) {
                console.log("hi",response);
                if (response.childrenResult.mentor_approval != null && response.childrenResult.mentor_approval == 0) {
                    $('#mentor-approval').modal({ backdrop: 'static', keyboard: false });
                    $('#childname').append("You got request for the child "+response.childrenResult.full_name);
                }

            })
        }
        mentorApproval();

    }


    $("#mentorapproval").click(function () {
        var data = {};
        data.operation = "accept";
        data.profileId = localStorage.getItem("user");
        console.log("inside ");
        httpPost("/mentorapproval", data, function (response) {



        })

    })



});