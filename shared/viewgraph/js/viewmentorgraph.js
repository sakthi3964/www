
var data = {};
var url = window.location.href;
if (url.substring(url.lastIndexOf('html') + 1) == "tml") {
    var id = localStorage.getItem("user");
}
else {
    var id = url.substring(url.lastIndexOf(':') + 1);
}

var role = localStorage.getItem("role");
console.log(role);
data.id = id;
if(role!= "admin"){
httpPost("/trackerDatesMentor", data, function (response) {
    response.forEach(function (element) {
        var dateObj = new Date(element.date);
        var day = dateObj.getUTCDate();
        var year = dateObj.getUTCFullYear();
        var monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        var monthna = new Date(element.date);
        var month = monthNames[monthna.getMonth()];
        $('#listOfMentorDates').append('<a href="../../graph/en/graph.html?date:' + element.date + '" id=' + element.id + '><div class="calendor"><div class="month"><p>' + month + '</p></div><div class="date"><p>' + day + '</p></div><div class="year"><p>' + year + '</p></div></div></a>');
    }, this);
})
}
else{
    httpPost("/adminmentorgraphDates", data, function (response) {
    response.forEach(function (element) {
        var dateObj = new Date(element.date);
        var day = dateObj.getUTCDate();
        var year = dateObj.getUTCFullYear();
        var monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        var monthna = new Date(element.date);
        var month = monthNames[monthna.getMonth()];
        $('#listOfMentorDates').append('<a href="../../graph/en/graph.html?date:' + element.date + '" id=' + element.id + '><div class="calendor"><div class="month"><p>' + month + '</p></div><div class="date"><p>' + day + '</p></div><div class="year"><p>' + year + '</p></div></div></a>');
    }, this);
})

}
