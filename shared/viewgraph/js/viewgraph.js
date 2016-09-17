
httpGet("/trackerDates",function (response) {
    response.forEach(function (element) {
        var link = $("<a>");
        link.attr("href", "../../graph/en/graph.html?date:" + element.date);
        link.attr("id", element.id);
        console.log(new Date(element.date).toString().substring(4, 15)); // '2016-05-24T00:00:00.000Z'
        //var dattte=new Date(element.date);
        var dateObj = new Date(element.date);
        var month = dateObj.getUTCMonth() + 1; //months from 1-12
        var day = dateObj.getUTCDate();
        var year = dateObj.getUTCFullYear();
        console.log(month);

        var newdate = year + "/" + month + "/" + day;
        console.log(newdate);
        //console.log(dattte.getYear()+'-' + (dattte.getMonth()+1) + '-'+dattte.getDate());
        link.text(newdate);
        link.addClass("reviewdetails");
        $(listOfDates).append(link);
        $(listOfDates).append("<br>");
    }, this);
})