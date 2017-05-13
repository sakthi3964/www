$(document).ready(function () {
    var session = localStorage.getItem("user");
    if (session == null) {
        window.location.href = "../../../../index.html";
    }
    else {

        var id = localStorage.getItem("user");
        var datas = {};
        // datas.id = id;
        // httpPost("/viewChildrenReview", datas, function (response) {
        //     // console.log();
        //     var resdate = new Date(response.updated_at);
        //     var resdate1 = resdate.toLocaleDateString();
        //     console.log("hiiiiiiiii" + resdate1);
        //     // alert(d);
        //     // var n = d.toUTCString();
        //     // var n = d.toUTCString();
        //     var date = new Date();
        //     // var oneDay = 24*60*60*1000; // hours*minutes*seconds*milliseconds
        //     var updated_date = date.toLocaleDateString();
        //     console.log("hiiiiiiiii" + updated_date);
        //     function parseDate(str) {
        //         var mdy = str.split('/');
        //         return new Date(mdy[2], mdy[0] - 1, mdy[1]);
        //     }

        //     function daydiff(resdate1, updated_date) {
        //         return Math.round((updated_date - resdate1) / (1000 * 60 * 60 * 24));
        //     }

        //     alert(daydiff(parseDate($(resdate1).val()), parseDate($(updated_date).val())));
        //     // var diffDays = Math.round(Math.abs((updated_date.getTime() - resdate1.getTime()) / (oneDay)));
        //     alert(diffDays);
        //     console.log(diffDays);
        // });
        var data = {}
        data.id = id;
        httpPost("/childreviewcheck", data, function (response) {
            console.log("hfsdlkf;");
            console.log(response);
            if (response > 90) {
                $('#childreview').modal({ backdrop: 'static', keyboard: false });

            }

        });

        httpPost("/childvolunteermentorid", data, function (response) {
            // console.log(response[0].updated_at);
            $(".loading_icon").addClass("hide");
            if ((response[0].approve_status == 1) && (response[0].role == "volunteer")) {
                var updated_at = response[0].updated_at;
                var dateObj = new Date(updated_at);
                var cur = new Date();
                var diff = (cur - dateObj) / 1000;
                var diff1 = Math.abs(Math.floor(diff));
                var days = Math.floor(diff1 / (24 * 60 * 60));
                console.log('' + days);

                // $('#reviewcheck').removeClass('hide');
                // $('#selectchild').append('<a href="../../../../shared/viewchildprofile/en/viewchildprofile.html"><div class="col-sm-4 col-xs-4"><p>Child Profile<img src="../../../../helperfiles/img/childrenprofile.png" class="img-responsive " alt="View Children Profile" width="120"height="236"> </p></div></a>');
            }

        }),


            httpPost("/childrenhome", data, function (response) {
                console.log(response);
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