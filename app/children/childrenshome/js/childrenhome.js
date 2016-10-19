$(document).ready(function () {
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
});