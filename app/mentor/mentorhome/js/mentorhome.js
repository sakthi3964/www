$(document).ready(function () {
    var session = localStorage.getItem("user");
    if (session == null) {
        window.location.href = "../../../../index.html";
    }
    else {
        var home = {};
        home.id = localStorage.getItem("user");
        console.log(home.id);
        httpPost("/viewchild", home, function (response) {
            if (response == "") {
                console.log("response[1].approve_status");
            }
            console.log(response);
            $(".loading_icon").addClass("hide");
            if ((response == "") || (response[0].approve_status == 0)) {
                // $('#tracker').append('<div class="col-sm-4 col-xs-4"><p>Tracker<img src="../../../../helperfiles/img/tracker.png" class="img-responsive " alt="CHILD SELECTION" width="120" height="236"></p></div>');
                $('#view_tracker').removeClass('hide');
                $('#vreviewform').removeClass('hide');
                $('#viewgraph').removeClass('hide');
            }
            else {
                // $('#tracker').append('<a href="../../tracker/en/tracker.html"><div class="col-sm-4 col-xs-4"><p>Tracker<img src="../../../../helperfiles/img/tracker.png" class="img-responsive " alt="CHILD SELECTION" width="120" height="236"></p></div></a>');
                $('#viewtrack').removeClass('hide');
                $('#reviewform').removeClass('hide');
                $('#graph').removeClass('hide');
            }
        })
        function mentorApproval() {
            var user = localStorage.getItem("user");
            var data = {};
            data.profileId = user;
            data.operation = "details";
            console.log("my details", data);
            httpPost("/mentorapproval", data, function (response) {
                console.log("hi", response.childrenId);
                var childrenId = response.childrenId;
                var enc = window.btoa(childrenId);
                document.getElementById("modalviewprofile").onclick = function () { 
                    window.location.href = "../../../admin/viewadminchildprofile/en/viewadminchildprofile.html?id:" + enc;
                }
                if (response.childrenResult.mentor_approval != null && response.childrenResult.mentor_approval == 0) {
                    $('#mentor-approval').modal({ backdrop: 'static', keyboard: false });
                    $('#childname').append("You got request for the child " + response.childrenResult.full_name);
                }
                

            })
        }
        mentorApproval();

    }



    $("#mentorapproval").click(function () {
        var data = {};
      
        data.profile_id = localStorage.getItem("user");
        data.process='vcm';
        data.action='approve';
        data.role='mentor';
        console.log("inside ");
        httpPost("/changeapproval", data, function (response) {

        })

    })

   
    $("#mentorDeny").click(function () {
        var data = {};
      
        data.profile_id = localStorage.getItem("user");
        data.process='vcm';
        data.action='decline';
        data.role='mentor';
        console.log("inside ");
        httpPost("/changeapproval", data, function (response) {

        })

    })




});