function viewmentorgraph(){
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
            var dec = url.substring(url.lastIndexOf('&') + 1);
            id = window.atob(dec);
            dec = id;
        }

        var role = localStorage.getItem("role");

        data.id = id;

        if (role != "admin" && role != "children") {
            httpPost("/trackerDatesMentor", data, function (response) {
                $(".loading").addClass("hide");
                console.log(response);
                $("#details").removeClass("hide");
                var res_length = response.length;
                if (res_length == 0) {
                    $(".no_record").removeClass("hide");
                    //$('#listOfMentorDates').append('<div class="no_record"> <h3>No Record Found</h3></div>');
                }
                else {
                    $(".no_record").removeClass("hide");
                    $(".no_record").addClass("hide");

                    response.forEach(function (element) {
                        var dateObj = new Date(element.date);
                        console.log(element.created_at);
                        var day = dateObj.getUTCDate();
                        var year = dateObj.getUTCFullYear();
                        var monthNames = ["January", "February", "March", "April", "May", "June",
                            "July", "August", "September", "October", "November", "December"
                        ];
                        var monthna = new Date(element.date);
                        var month = monthNames[monthna.getMonth()];
                        $('#listOfMentorDates').append('<a href="../../graph/en/graph.html?role='+"m"+'date&' + element.created_at + '" id=' + element.id + '><div class="calendor"><div class="month"><p>' + month + '</p></div><div class="date"><p>' + day + '</p></div><div class="year"><p>' + year + '</p></div></div></a>');
                    }, this);
                }
            })
        }
        else {
           httpPost("/adminmentorgraphDates", data, function (response) {

                $("#details").removeClass("hide");
                $(".loading").addClass("hide");
                var res_length = response.length;
                if (res_length == 0) {
                     $(".no_record").removeClass("hide");
                    //$('#listOfMentorDates').append('<div class="no_record"> <h3>No Record Found</h3></div>');
                }
                else {
                    $(".no_record").removeClass("hide");
                    $(".no_record").addClass("hide");

                    response.forEach(function (element) {
                        var elementid = window.btoa(element.id);
                        var dateObj = new Date(element.date);
                        var day = dateObj.getUTCDate();
                        var year = dateObj.getUTCFullYear();
                        var monthNames = ["January", "February", "March", "April", "May", "June",
                            "July", "August", "September", "October", "November", "December"
                        ];
                        var monthna = new Date(element.date);
                        var month = monthNames[monthna.getMonth()];
                        $('#listOfMentorDates').append('<a href="../../graph/en/graph.html?date&' + element.created_at + 'id#' + dec + '"><div class="calendor"><div class="month"><p>' + month + '</p></div><div class="date"><p>' + day + '</p></div><div class="year"><p>' + year + '</p></div></div></a>');
                    }, this);
                }
            })
        }
    }
  }