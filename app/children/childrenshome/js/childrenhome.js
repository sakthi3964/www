$(document).ready(function () {
    var session = localStorage.getItem("user");
    if (session == null) {
        window.location.href = "../../../../index.html";
    }
    else {
        $(".loading_container").removeClass("hide");        
        var id = localStorage.getItem("user");
        var datas = {};
        var data = {}
        data.id = id;
        data.role=localStorage.getItem("role");
        httpPost("/screenstatus", data, function (response) {
            $(".loading_container").addClass("hide");            
            if("ADM_APP_VOL"==response.workflowstatus_volunteer)
                {
                    $('#viewgraph').removeClass('hide');
                    $('#vgraph').addClass('hide');
                }
           
        });
        httpPost("/childreviewcheck", data, function (response) {
            if (response > 90) {
                $('#childreview').modal({ backdrop: 'static', keyboard: false });

            }
        });

       
        httpPost("/childvolunteermentorid", data, function (response) {
            if (response == 0) {
                $('#viewreviewcheck').removeClass('hide');
            }
            else{
                 // console.log(response[0].updated_at);
            // $(".loading_icon").addClass("hide");
            if ((response[0].approve_status == 1) && (response[0].role == "volunteer")) {
                var updated_at = response[0].updated_at;
                var dateObj = new Date(updated_at);
                var cur = new Date();
                var diff = (cur - dateObj) / 1000;
                var diff1 = Math.abs(Math.floor(diff));
                var days = Math.floor(diff1 / (24 * 60 * 60));
                if (days < 90) {
                    $('#viewreviewcheck').removeClass('hide');
                }
                else {
                    $('#reviewcheck').removeClass('hide');
                }
                // $('#reviewcheck').removeClass('hide');
                // $('#selectchild').append('<a href="../../../../shared/viewchildprofile/en/viewchildprofile.html"><div class="col-sm-4 col-xs-4"><p>Child Profile<img src="../../../../helperfiles/img/childrenprofile.png" class="img-responsive " alt="View Children Profile" width="120"height="236"> </p></div></a>');
            }
            }
           

        }),


            httpPost("/childrenhome", data, function (response) {
                $(".child_preassessment").addClass("hide");
                if (response == 1) {
                    // $('#preassessmenticon').append('<a href="../../../../shared/viewpreassessment/en/viewpreassessment.html"><div class="col-sm-4 col-xs-4 col-md-4 card"></div><p> View Pre Assessment form<img src="../../../../helperfiles/img/viewpreassessmentform.png" class="img-responsive " alt="PRE ASSESSMENT FORM" width="120" height="236"></p></div></a>');
                    $('#viewpreassessmenticon').removeClass('hide');
                }
                else {
                    // $('#preassessmenticon').append('<a href="../../preassessment/en/preassessmentform.html" id="inserpreassment"><div class="col-sm-4 col-xs-4 col-md-4 card"><p> sample<img src="../../../../helperfiles/img/viewpreassessmentform.png" class="img-responsive " alt="PRE ASSESSMENT FORM" width="120" height="236"></p></div></a>');
                    $('#inserpreassmenticon').removeClass('hide');
                }
            });
    }
});