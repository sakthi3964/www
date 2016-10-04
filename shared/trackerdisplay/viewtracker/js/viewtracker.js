var data = {};
var url = window.location.href;
var date1 = url.substring(url.indexOf(':') + 1, url.length);
 console.log("date1 :"+date1);
var date2 = date1.substring(date1.indexOf(':') + 1, date1.length);
console.log("date2 :"+date2);
var date3 = date2.substring(date2.indexOf(':') + 1, date2.length);
data.date = date3;
console.log("graph date: "+data.date)

httpPost("/viewReviewDetail", data, function (response) {
    console.log(response);
    $('#date').html(response.date);
    $('#place').html(response.location);
    $('#meetingagenda').html(response.agenda);
    $('#outcome').html(response.outcome);
    $('#keyaccomplishments').html(response.keyAccomplishment);
     $('#keylearnings').html(response.keyLearning);
   
    return false;
});