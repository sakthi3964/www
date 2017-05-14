$(document).ready(function () {
    var session = localStorage.getItem("user");
    if (session == null) {
        window.location.href = "../../../../index.html";
    }
    else {
        var data = {};
        var url = window.location.href;

        //console.log("sdfdsfdsfdsfdsfdsfdsfdsfdsf"+child_id);
        var date1 = url.substring(url.indexOf('&') + 1, url.length);
        var date2 = date1.substring(date1.indexOf('&') + 1, date1.length);
        var date3 = date2.substring(date2.indexOf('&') + 1, date2.length);
        data.date = date3;
        data.profileId = localStorage.getItem("user");
        data.role = localStorage.getItem("role");
        if (data.role == 'admin') {
            data.childId = url.substring(url.indexOf('@') + 1, url.length);

        }
        else {
            data.childId = 0;
        }
        console.log("childid", data);
        httpPost("/viewReviewDetail", data, function (response) {
            console.log("ffrffd", response);
            $("#blockreg2").removeClass("hide");
            $(".loading").addClass("hide");
            var date = new Date(response.date);
            var day = date.getDate();
            var year = date.getFullYear();
            var monthNames = ["January", "February", "March", "April", "May", "June",
                "July", "August", "September", "October", "November", "December"
            ];
            var monthna = new Date(response.date);
            var month = monthNames[monthna.getMonth()];

            // var localdate = date.toLocaleDateString();
            $('#date').html(day + "-" + month + "-" + year);
            $('#place').html(response.location);
            $('#meetingagenda').html(response.agenda);
            $('#outcome').html(response.outcome);
            var newconnection = JSON.parse(response.newConnection);
            newconnection.connectedToJsonArray.forEach(function (element) {
                $("#connection_details").append('<div class="row"><div class="col-sm-6 col-xs-6 col-md-6"><h5>ConnectedTo</h5></div><div class="col-sm-6 col-xs-6 col-md-6"><p id="prefamilyname" class="prefamilydatas">' + element.connectedTo + '</p></div></div>');
                $("#connection_details").append('<div class="row"><div class="col-sm-6 col-xs-6 col-md-6"><h5>Purpose</h5></div><div class="col-sm-6 col-xs-6 col-md-6"><p id="prefamilyname" class="prefamilydatas">' + element.purpose + '</p></div></div>');
            });
            console.log(newconnection.connectedTo);
            if (newconnection.connectedToJsonArray.length == 0) {
                $('#newConnection').html("No");
            }
            else {
                $('#newConnection').html("Yes");

                $("#connectionrow").removeClass("hide");
            }


            // if (newconnection.connectedTo == "nil") {
            //     $('#newConnection').html(newconnection.connectedTo);
            // }
            // else {
            //     $('#newConnection').html("Yes");
            // }
            $('#keyaccomplishments').html(response.keyAccomplishment);
            $('#keylearnings').html(response.keyLearning);
            $('#menteeChallenges').html(response.menteeChallenges);
            $('#mentorChallenges').html(response.mentorChallenges);
            $('#volunteerChallenges').html(response.volunteerChallenges);
            return false;
        });
    }
});