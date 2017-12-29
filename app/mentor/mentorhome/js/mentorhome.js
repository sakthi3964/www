$(document).ready(function () {
    var session = localStorage.getItem("user");
    if (session == null) {
        window.location.href = "../../../../index.html";
    }
    else {
        // var home = {};
        // home.id = localStorage.getItem("user");
        // console.log(home.id);
        // httpPost("/viewchild", home, function (response) {
        //     if (response == "") {
        //         console.log("response[1].approve_status");
        //     }
        //     console.log(response);
        //     $(".loading_icon").addClass("hide");
        //     if ((response == "") || (response[0].approve_status == 0)) {
        //         // $('#tracker').append('<div class="col-sm-4 col-xs-4"><p>Tracker<img src="../../../../helperfiles/img/tracker.png" class="img-responsive " alt="CHILD SELECTION" width="120" height="236"></p></div>');
        //         $('#view_tracker').removeClass('hide');
        //         $('#vreviewform').removeClass('hide');
        //         $('#viewgraph').removeClass('hide');
        //     }
        //     else {
        //         // $('#tracker').append('<a href="../../tracker/en/tracker.html"><div class="col-sm-4 col-xs-4"><p>Tracker<img src="../../../../helperfiles/img/tracker.png" class="img-responsive " alt="CHILD SELECTION" width="120" height="236"></p></div></a>');
        //         $('#viewtrack').removeClass('hide');
        //         $('#reviewform').removeClass('hide');
        //         $('#graph').removeClass('hide');
        //     }
        // })
        var id = localStorage.getItem("user");
        var data = {}
        data.id = id;
        data.role = localStorage.getItem("role");
        $(".loading_container").removeClass("hide");
        httpPost("/screenstatus", data, function (response) {
            $(".loading_container").addClass("hide");
            if ("ADM_APP_MEN" == response.workflowstatus) {

                console.log("connected");
                $('#viewtrack').removeClass('hide');
                $('#tracker').removeClass('hide');
                //  $('#reviewform').removeClass('hide');
              $('#trackerlink').removeClass('hide');
                $('#graph').removeClass('hide');

                $('#view_tracker').addClass('hide');
                // $('#vreviewform').addClass('hide');
                 $('#trackericon').addClass('hide');
                $('#viewgraph').addClass('hide');
            }

        });
        function mentorApproval() {
            var user = localStorage.getItem("user");
            var data = {};
            data.profileId = user;
            data.operation = "details";
            httpPost("/mentorapproval", data, function (response) {
                console.log(response);
                var childrenId = response.children_id;
                console.log(childrenId);
                var enc = window.btoa(childrenId);
                console.log(enc);
                console.log("response siva" + JSON.stringify(response));
                document.getElementById("modalviewprofile").onclick = function () {
                    window.location.href = "../../../admin/viewadminchildprofile/en/viewadminchildprofile.html?id:" + enc;
                }
                if (response != "") {
                    $('#mentor-approval').modal({ backdrop: 'static', keyboard: false });
                    $('#childname').append("You got request for the child :: " + response.childrenprofile.full_name);
                }


            })
        }
        mentorApproval();

    }



    $("#mentorapproval").click(function () {
        var data = {};

        data.profile_id = localStorage.getItem("user");
        data.process = 'vcm';
        data.action = 'approve';
        data.role = 'mentor';
        httpPost("/changeapproval", data, function (response) {

        })

    })


    $("#mentorDeny").click(function () {
        var data = {};
        console.log("inside my deny");
        data.profile_id = localStorage.getItem("user");
        data.process = 'vcm';
        data.action = 'decline';
        data.role = 'mentor';
        httpPost("/changeapproval", data, function (response) {

        })

    })




});