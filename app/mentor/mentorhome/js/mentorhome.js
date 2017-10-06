$(document).ready(function () {
    var session = localStorage.getItem("user");
    if (session == null) {
        window.location.href = "../../../../index.html";
    }
    else {

         var home = {};
            home.id = localStorage.getItem("user");
            console.log(home.id);
            home.role = localStorage.getItem("role");
            httpPost("/screenstatus", home, function (response) {
               
                if ("ADM_APP_MEN" == response.workflowstatus) {
                    $('#view_tracker').addClass('hide');
                    $('#vreviewform').addClass('hide');
                    $('#viewgraph').addClass('hide');

                    $('#viewtrack').removeClass('hide');
                    $('#reviewform').removeClass('hide');
                    $('#graph').removeClass('hide');
                }
    
            });
            // httpPost("/viewchild", home, function (response) {
            //     if(response == ""){
            //          console.log("response[1].approve_status");
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
        function mentorApproval() {
            var user = localStorage.getItem("user");
            var data = {};
            data.profileId = user;
           
           
            httpPost("/mentorapproval", data, function (response) {
                console.log("hi",response);
                if (response != null && response.workflowstatus == 'REQ_INT_MEN') {
                    $('#mentor-approval').modal({ backdrop: 'static', keyboard: false });
                    $('#childname').append("You got request for the child "+response.childrenResult.full_name);
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