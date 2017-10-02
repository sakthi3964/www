$(document).ready(function () {
    var session = localStorage.getItem("user");
    if (session == null) {
        window.location.href = "../../../../index.html";
    }
    else {
        var data = {};
        var url = window.location.href;
        if (url.substring(url.lastIndexOf('html') + 1) == "tml") {
            var id = localStorage.getItem("user");
        }
        else {
            var dec = url.substring(url.lastIndexOf(':') + 1);
            id = window.atob(dec);
        }
        data.id = id;
        httpPost("/childReviewDates", data, function (response) {
            $(".loading").addClass("hide");
            $("#details").removeClass("hide");
            var res_length = response.length;
            if (res_length == 0) {
              $('#listOfDates').html('');
               $('#listOfDates').append('<div class="no_record_found"> <h3>No Record Found</h3></div>');
            }
            else {
                $('#listOfDates').html('');
                response.forEach(function (element) {
                    var dateObj = new Date(element.created_at);
                    var day = dateObj.getUTCDate();
                    var monthna = dateObj.getUTCMonth();
                    var year = dateObj.getUTCFullYear();
                    var monthNames = ["January", "February", "March", "April", "May", "June",
                        "July", "August", "September", "October", "November", "December"
                    ];
                    var month = monthNames[monthna];
                    $('#listOfDates').append('<a href="../../childreviewgraph/en/childreviewgraph.html?date:' + element.created_at + '" id=' + element.children_id + '><div class="calendor"><div class="month"><p>' + month + '</p></div><div class="date"><p>' + day + '</p></div><div class="year"><p>' + year + '</p></div></div></a>');
                }, this);
            }
        })
    }
});
