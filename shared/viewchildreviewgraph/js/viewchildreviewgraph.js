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
            console.log(id);
        }
        data.id = id;
        httpPost("/childReviewDates", data, function (response) {
            $("#details").removeClass("hide");
            $(".loading").addClass("hide");
            var res_length = response.length;
            if (res_length == 0) {
                $(".no_record").removeClass("hide");
            }
            else {
                response.forEach(function (element) {
                    console.log(element.children_id);
                    var dateObj = new Date(element.created_at);
                    console.log(dateObj);
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
