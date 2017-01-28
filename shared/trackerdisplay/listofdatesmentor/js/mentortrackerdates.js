$(document).ready(function () {
    var session = localStorage.getItem("user");
    if (session == null) {
        window.location.href = "../../../../index.html";
    }
    else {
        var data = {};
        var id = localStorage.getItem("user");
        data.id = id;
        httpPost("/trackerDatesMentor", data, function (response) {
            console.log(response);
            console.log("saldfjdslf");
            $(".loading").addClass("hide");
            
            var res_length = response.length;
            console.log(res_length);
            if (res_length == 0) {
                $(".no_record").removeClass("hide");
            }
            else {
                $("#container3").removeClass("hide");
                response.forEach(function (element) {
                    var dateObj = new Date(element.date);
                    var day = dateObj.getUTCDate();
                    var year = dateObj.getUTCFullYear();
                    var monthNames = ["January", "February", "March", "April", "May", "June",
                        "July", "August", "September", "October", "November", "December"
                    ];
                    var monthna = new Date(element.date);
                    var month = monthNames[monthna.getMonth()];
                    $('#listOfDatesmentor').append('<a href="../../viewtracker/en/viewtracker.html?date&' + element.date + '" id=' + element.id + '><div class="calendor"><div class="month"><p>' + month + '</p></div><div class="date"><p>' + day + '</p></div><div class="year"><p>' + year + '</p></div></div></a>');
                }, this);
            }
        });
    }
})