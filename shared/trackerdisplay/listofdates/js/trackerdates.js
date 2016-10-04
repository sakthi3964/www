
var data = {};
var volunteer_id = localStorage.getItem("user");
data.volunteer_id = volunteer_id;
httpPost("/trackerDates", data, function (response) {
    response.forEach(function (element) {
        var dateObj = new Date(element.date);
        var day = dateObj.getUTCDate();
        var year = dateObj.getUTCFullYear();
        var monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        var monthna = new Date(element.date);
        var month = monthNames[monthna.getMonth()];
        $('#listOfDates').append('<a href="../../viewtracker/en/viewtracker.html?date:' + element.date + '" id=' + element.id + '><div class="calendor"><div class="month"><p>' + month + '</p></div><div class="date"><p>' + day + '</p></div><div class="year"><p>' + year + '</p></div></div></a>');
    }, this);
})