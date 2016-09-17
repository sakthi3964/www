var httpPost = function (url, data, callback) {
    console.log(url);
    console.log(BASEURL);
    console.log(callback);
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
        console.log(response);
        callback(response);
    });
}