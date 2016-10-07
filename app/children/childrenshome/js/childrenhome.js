$(document).ready(function () {
    var id = localStorage.getItem("user");
    var data = {}
    data.id = id;
    httpPost("/childrenhome", data, function (response) {
        console.log(response);
        if (response == 1) {
            $('#preassessmenticon').append('<a href="../../../../shared/viewpreassessment/en/viewpreassessment.html"><div class="col-sm-4 col-xs-4 col-md-4 card"></div><p> View Pre Assessment form<img src="../../../../helperfiles/img/viewpreassessmentform.png" class="img-responsive " alt="PRE ASSESSMENT FORM" width="120" height="236"></p></div></a>');
        }
        else {
            $('#preassessmenticon').append('<a href="../../preassessment/en/preassessmentform.html" id="inserpreassment"><div class="col-sm-4 col-xs-4 col-md-4 card"><p>Pre Assessment form<img src="../../../../helperfiles/img/form.png" class="img-responsive " alt="PRE ASSESSMENT FORM" width="120" height="236"></p></div></a>');
        }
    });
});