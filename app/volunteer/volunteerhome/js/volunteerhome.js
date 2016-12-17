$(document).ready(function () {
    var id = localStorage.getItem("user");
    var data = {}
    data.id = id;

    httpPost("/volunteerhome", data, function (response) {
        $(".loading_icon").addClass("hide");
        if (response == 0) {
            $('#child_profile').removeClass('hide');
            // $('#selectchild').append('<a href="../../../../shared/viewchildprofile/en/viewchildprofile.html"><div class="col-sm-4 col-xs-4"><p>Child Profile<img src="../../../../helperfiles/img/childrenprofile.png" class="img-responsive " alt="View Children Profile" width="120"height="236"> </p></div></a>');
        }
        else {
            $('#select_child').removeClass('hide');
            // $('#selectchild').append('<a href="../../selectchild/en/listofchild.html"><div class="col-sm-4 col-xs-4"><p>Select Child<img src="../../../../helperfiles/img/addchildren.png" class="img-responsive " alt="CHILD SELECTION" width="120" height="236"></p></div></a>');
        }
    }),
        httpPost("/viewchild", data, function (response) {
            $(".loading_icon").addClass("hide");
            if ((response == "") || (response[0].approve_status == 0)) {
                // $('#tracker').append('<div class="col-sm-4 col-xs-4"><p>Tracker<img src="../../../../helperfiles/img/tracker.png" class="img-responsive " alt="CHILD SELECTION" width="120" height="236"></p></div>');
                $('#view_tracker').removeClass('hide');
            }
            else {
                // $('#tracker').append('<a href="../../tracker/en/tracker.html"><div class="col-sm-4 col-xs-4"><p>Tracker<img src="../../../../helperfiles/img/tracker.png" class="img-responsive " alt="CHILD SELECTION" width="120" height="236"></p></div></a>');
                $('#tracker').removeClass('hide');
            }
        })
    httpPost("/volunteerhomeviewmentor", data, function (response) {
        $(".loading_icon").addClass("hide");
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
});