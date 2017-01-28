$(document).ready(function () {
    var session = localStorage.getItem("user");
    if (session == null) {
        window.location.href = "../../../../index.html";
    }
    else {
        var data = {};
        var id = localStorage.getItem("user");
        data.id = id;
        httpPost("/mentorgraphDates", data, function (response) {
            $(".loading").addClass("hide");
            var res_length = response.length;
            if (res_length == 0) {
                // $(".no_record").removeClass("hide");
                 $('#listOfDates').append('<div class="no_record"> <h3>No Record Found</h3></div>');
            }
            else {
                
            $("#details").removeClass("hide");
                response.forEach(function (element) {
                    var dateObj = new Date(element.date);
                    var day = dateObj.getUTCDate();
                    var year = dateObj.getUTCFullYear();
                    var monthNames = ["January", "February", "March", "April", "May", "June",
                        "July", "August", "September", "October", "November", "December"
                    ];
                    var monthna = new Date(element.date);
                    var month = monthNames[monthna.getMonth()];
                    $('#listOfMentorDates').append('<a href="../../graph/en/graph.html?date:' + element.date + '" id=' + element.id + '><div class="calendor"><div class="month"><p>' + month + '</p></div><div class="date"><p>' + day + '</p></div><div class="year"><p>' + year + '</p></div></div></a>');
                }, this);
            }
        });
    }
});