
function forgotPassword() {
    var data = {};
    data.dob = ($('#dob').val()).trim();
    data.mobileNo = ($('#mobileNo').val()).trim();
    data.email = ($('#email').val()).trim();
    // if (data.dob != "" && data.mobileNo != "" && data.email != "") {
    httpPost("/forgotPassword", data, function (response) {
        if (response) {
            console.log(JSON.stringify(response))
        }
    });

    // }

}

