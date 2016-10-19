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
};
var httpGet = function (url, callback) {
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": BASEURL + url,
        "method": "GET",
        "headers": {
            "content-type": "application/json",
        },
        "processData": false,
    }

    $.ajax(settings).done(function (response) {
        callback(response);
    });
}
var fileUpload = function (url, data, callback) {
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": BASEURL + url,
        "method": "POST",
        "headers": {
            "cache-control": "no-cache"
        },
        "processData": false,
        "contentType": false,
        "mimeType": "multipart/form-data",
        "data": data
    }
    $.ajax(settings).done(function (response) {
        callback(response);
    });
}

function lang() {

    var url = window.location.href;
    var array = url.split('/');
    var lang = array[array.length - 2];
    if (lang == 'ta') {
        return 'ta';
    }
    else
        return 'en';
}