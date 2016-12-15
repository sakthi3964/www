$(document).ready(function () {
    var data = {};
    var url = window.location.href;
    var date1 = url.substring(url.indexOf(':') + 1, url.length);
    var date2 = date1.substring(date1.indexOf(':') + 1, date1.length);
    var date3 = date2.substring(date2.indexOf(':') + 1, date2.length);
    data.date = date3;
    httpPost("/viewReviewDetail", data, function (response) {
        $("#blockreg2").removeClass("hide");
        $(".loading").addClass("hide");
        var date = new Date(response.date);
        var localdate = date.toLocaleDateString();
        $('#date').html(localdate);
        $('#place').html(response.location);
        $('#meetingagenda').html(response.agenda);
        $('#outcome').html(response.outcome);
        var newconnection = JSON.parse(response.newConnection);
        if (newconnection.connectedTo == "nil") {
            $('#newConnection').html(newconnection.connectedTo);
        }
        else {
            $('#newConnection').html("Yes");
        }
        $('#keyaccomplishments').html(response.keyAccomplishment);
        $('#keylearnings').html(response.keyLearning);
        $('#menteeChallenges').html(response.menteeChallenges);
        $('#mentorChallenges').html(response.mentorChallenges);
        $('#volunteerChallenges').html(response.volunteerChallenges);
        return false;
    });
});