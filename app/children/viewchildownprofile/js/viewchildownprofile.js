$(document).ready(function () {
    var session = localStorage.getItem("user");
    if (session == null) {
        window.location.href = "../../../../index.html";
    }
    else {
        var data = {};
        var id = localStorage.getItem("user");
        data.id = id;
        httpPost("/viewchildrenownprofile", data, function (response) {
            var dateObj = new Date(response.dob);
            var day = dateObj.getDate();
            var year = dateObj.getFullYear();
            var monthNames = ["January", "February", "March", "April", "May", "June",
                "July", "August", "September", "October", "November", "December"
            ];
            var monthna = new Date(response.dob);
            var month = monthNames[monthna.getMonth()];



            $("#blockreg2").removeClass("hide");
            $(".loading").addClass("hide");
            $('#profileimage').append('<img src = "' + BASEURL + 'uploads/children/photos/' + response.photos + '" width="150" height="150">');
            $('#name').html(response.full_name);
            $('#dob').html(day + "-" + month + "-" + year);
            $('#Gender').html(response.gender);
            $('#Center').html(response.center);
            $('#UserId').html(response.user_id);
            return false;
        });
    }
});