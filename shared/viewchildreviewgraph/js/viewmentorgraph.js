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

        var role = localStorage.getItem("role");

        data.id = id;

        if (role != "admin") {
            console.log("fjdsa;ja;lsf");
            httpPost("/childReviewDatesMentor", data, function (response) {
                $(".loading").addClass("hide");
                console.log(response);
                console.log("fjdsa;ja;lsf");
                var res_length = response.length;
                if (res_length == 0) {
                    // $(".no_record").removeClass("hide");
                     $('#listOfMentorDates').append('<div class="no_record"> <h3>No Record Found</h3></div>');
                }
                else {
                    $("#details").removeClass("hide");
                    response.forEach(function (element) {
                        var dateObj = new Date(element.created_at);
                        console.log(dateObj);
                        var day = dateObj.getUTCDate();
                        var monthna = dateObj.getUTCMonth();
                        var year = dateObj.getUTCFullYear();
                        var monthNames = ["January", "February", "March", "April", "May", "June",
                            "July", "August", "September", "October", "November", "December"
                        ];
                        var month = monthNames[monthna];
                        $('#listOfMentorDates').append('<a href="../../childreviewgraph/en/childreviewgraph.html?created_at:' + element.created_at + '" id=' + element.children_id + '><div class="calendor"><div class="month"><p>' + month + '</p></div><div class="date"><p>' + day + '</p></div><div class="year"><p>' + year + '</p></div></div></a>');
                    }, this);
                }
            })
        }
        else {
            console.log("erlaldfjl;dsjkdlsjalikatu");
            httpPost("/childReviewDatesMentor", data, function (response) {
                console.log("erlaldfjl;dsjkdlsjalikatu");
                var res_length = response.length;
                $(".loading").addClass("hide");
                if (res_length == 0) {
                    // $(".no_record").removeClass("hide");
                     $('#listOfMentorDates').append('<div class="no_record"> <h3>No Record Found</h3></div>');
                }
                else {
                    
                $("#details").removeClass("hide");
                    response.forEach(function (element) {
                        var dateObj = new Date(element.created_at);
                        console.log(dateObj);
                        var day = dateObj.getUTCDate();
                        var monthna = dateObj.getUTCMonth();
                        var year = dateObj.getUTCFullYear();
                        var monthNames = ["January", "February", "March", "April", "May", "June",
                            "July", "August", "September", "October", "November", "December"
                        ];
                        var month = monthNames[monthna];
                        $('#listOfMentorDates').append('<a href="../../childreviewgraph/en/childreviewgraph.html?created_at:' + element.created_at + '" id=' + element.children_id + '><div class="calendor"><div class="month"><p>' + month + '</p></div><div class="date"><p>' + day + '</p></div><div class="year"><p>' + year + '</p></div></div></a>');
                    }, this);
                }
            })
        }
    }
});