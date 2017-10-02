

$(document).ready(function () {
    $("#dob").datepicker({

        dateFormat: 'dd-mm-yy',
        maxDate: new Date, minDate: new Date(1960, 1, 12)
    });
    $("#submitforget").click(function () {
        console.log("happy");
        var data = {};
        data.dob = ($('#dob').val()).trim();
        data.mobileNo = ($('#mobileNo').val()).trim();
        data.email = ($('#email').val()).trim();
        data.BASEURL = BASEURL;
        // if (data.dob != "" && data.mobileNo != "" && data.email != "") {
        httpPost("/forgotPassword", data, function (response) {

            console.log(response);
            if (response == 1) {
                $('#emailnotsent').modal({ backdrop: 'static', keyboard: false });
            }
            else {
                $('#emailsent').modal({ backdrop: 'static', keyboard: false });
            }
        });
    });



});




