
var data = {};
var url = window.location.href;
var id;
var role = localStorage.getItem("role");
// var ids = url.substring(url.lastIndexOf("l") + 1);
// alert(ids);
$("#home_redirect").click(function () {
    alert("hi"+role);
});
if (url.substring(url.lastIndexOf('html') + 1) == "tml") {
     id = localStorage.getItem("user");
}
else {
     id = url.substring(url.lastIndexOf(':') + 1);
}

data.id = id;
httpPost("/trackerDates", data, function (response) {
    console.log(response);
    if (response == "") {
        $('#norecords').show();
    }
    else {
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
    }
})