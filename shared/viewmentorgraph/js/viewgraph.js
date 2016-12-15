$(document).ready(function () {
    var data = {};
    var url = window.location.href;
    if (url.substring(url.lastIndexOf('html') + 1) == "tml") {
        var id = localStorage.getItem("user");
    }
    else {
        var id = url.substring(url.lastIndexOf(':') + 1);
    }
    data.id = id;
    httpPost("/trackerDatesMentor", data, function (response) {
        $("#blockreg2").removeClass("hide");
        $(".loading").addClass("hide");
        response.forEach(function (element) {
            var dateObj = new Date(element.date);
            var day = dateObj.getUTCDate();
            var year = dateObj.getUTCFullYear();
            var monthNames = ["January", "February", "March", "April", "May", "June",
                "July", "August", "September", "October", "November", "December"
            ];
            var monthna = new Date(element.date);
            var month = monthNames[monthna.getMonth()];
            $('#listOfDates').append('<a href="../../graph/en/graph.html?date:' + element.date + '" id=' + element.id + '><div class="calendor"><div class="month"><p>' + month + '</p></div><div class="date"><p>' + day + '</p></div><div class="year"><p>' + year + '</p></div></div></a>');
        }, this);
    });
})