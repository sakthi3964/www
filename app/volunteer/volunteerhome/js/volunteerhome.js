$(document).ready(function () {
    var session = localStorage.getItem("user");
    if (session == null) {
        window.location.href = "../../../../index.html";
    }
    else {
        $(".loading_container").removeClass("hide");
        var id = localStorage.getItem("user");
        var data = {}
        data.id = id;
        data.role = localStorage.getItem("role");
        httpPost("/screenstatus", data, function (response) {
            $(".loading_container").addClass("hide");
            if ("ADM_APP_VOL" == response.workflowstatus) {
                $('#tracker').removeClass('hide');
                $('#viewtrack').removeClass('hide');
                $('#graph').removeClass('hide');

                $('#view_tracker').addClass('hide');
                $('#viewtracker').addClass('hide');
                $('#viewgraph').addClass('hide');
            }

        });

        httpPost("/volunteerhome", data, function (response) {
            $(".child_profile").addClass("hide");
            if (response == 0) {
                $('#child_profile').removeClass('hide');
                // $('#selectchild').append('<a href="../../../../shared/viewchildprofile/en/viewchildprofile.html"><div class="col-sm-4 col-xs-4"><p>Child Profile<img src="../../../../helperfiles/img/childrenprofile.png" class="img-responsive " alt="View Children Profile" width="120"height="236"> </p></div></a>');
            }
            else {
                $('#select_child').removeClass('hide');
                // $('#selectchild').append('<a href="../../selectchild/en/listofchild.html"><div class="col-sm-4 col-xs-4"><p>Select Child<img src="../../../../helperfiles/img/addchildren.png" class="img-responsive " alt="CHILD SELECTION" width="120" height="236"></p></div></a>');
            }
        }),

            httpPost("/denydetails", data, function (response) {
                $(".loading_icon").addClass("hide");
                if (response.approve_status == 2) {
                    if (response.role == "volunteer") {
                        $('#denyModal').modal({ backdrop: 'static', keyboard: false });
                    }
                    else if (response.role == "mentor") {
                        $('#denymentorModal').modal({ backdrop: 'static', keyboard: false });
                    }
                }
            }),

            httpPost("/viewlogindetails", data, function (response) {
                // $(".loading_icon").addClass("hide");
                if (response[0].status == 2) {
                    $('#approvaldenyModal').modal({ backdrop: 'static', keyboard: false });
                }
            }),


            // httpPost("/viewchild", data, function (response) {
            //     $(".loading_icon").addClass("hide");
            //     console.log("siva" + response);
            //     if ((response != "") && ('ADM_APP_VOL'==response.workflowstatus)) {
            //         // $('#tracker').append('<div class="col-sm-4 col-xs-4"><p>Tracker<img src="../../../../helperfiles/img/tracker.png" class="img-responsive " alt="CHILD SELECTION" width="120" height="236"></p></div>');
            //         $('#tracker').removeClass('hide');
            //         $('#viewtrack').removeClass('hide');
            //         $('#graph').removeClass('hide');

            //         $('#view_tracker').addClass('hide');
            //         $('#viewtracker').addClass('hide');
            //         $('#viewgraph').addClass('hide');
            //     }

            // })


            httpPost("/volunteerhomeviewmentor", data, function (response) {
                $(".mentor_profile").addClass("hide");
                if (response == 0) {
                    $('#view_mentor').removeClass('hide');
                    // $('#selectmentor').append('<a href="../../viewmentorprofile/en/mentorprofile.html"><div class="col-sm-4 col-xs-4"><p>Mentor Profile	<img src="../../../../helperfiles/img/professional.png" class="img-responsive" alt="View Mentor Profile" width="120" height="236"></p></div>	</a>');
                }
                else if (response == 3) {
                    $('#select_mentor_before_child').removeClass('hide');
                }
                else if (response == 1) {
                    $('#select_mentor').removeClass('hide');
                    // $('#selectmentor').append('<a href="../../selectmentor/en/listofmentor.html"><div class="col-sm-4 col-xs-4"><p>Select Mentor<img src="../../../../helperfiles/img/addmentor.png" class="img-responsive " alt="Mentor Assignment" width="120" height="236"></p></div></a>');
                }
            })
    }
});