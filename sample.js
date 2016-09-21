//config
var BASEURL = "http://localhost";


//helper
var httpPost = function (url, data, callback) {
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": BASEURL + url,
        "method": "POST",
        "headers": {
            "content-type": "application/json",
        },
        "processData": false,
        "data": JSON.stringify(data),
    }

    $.ajax(settings).done(function (response) {
        callback(response);
    });
}


var registration = function () {
    var data = {

    }
    httpPost("/registration", data, function (response) {
        if (response == 3) {
            alert("success");
            return false;
        }
    })
}

registration();
var localization = {
    welcome: {
        en: "Educational Performance At The School",
        ta: "asdfasdf"
    }
}

var login = function () {
    var data = {

    }
    httpPost(BASEURL + "/login", data, function (response) {
        if (response == 3) {
            alert(localization.welcome[]);
            return false;
        }
    })
}

login();


var validate = validate(res.body);


var result = validate(res.body);









