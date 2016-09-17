  var data = {};

        console.log("hi");
        var settings = {
            "crossDomain": true,
            "url": "http://localhost:3406/trackerDates",
            "method": "POST",
            "headers": {
                "content-type": "application/json",
            },
            "processData": false,
            "data": JSON.stringify(data),
        }
        $.ajax(settings).done(function (response) {
            response.forEach(function (element) {
                
                var link = $("<a>");
               
                link.attr("href", "graph.html?date:" + element.date);
                //link.attr("href", "#");

                link.attr("id", element.id);
             //   console.log(element.date);
                console.log(new Date(element.date).toString().substring(4, 15)); // '2016-05-24T00:00:00.000Z'
                //var dattte=new Date(element.date);

//console.log(dattte.getYear()+'-' + (dattte.getMonth()+1) + '-'+dattte.getDate());
                link.text(new Date(element.date).toString().substring(4, 15));
                link.addClass("linkrfgfdf");
                $(listOfDates).append(link);
                $(listOfDates).append("<br>");
            }, this);

        });