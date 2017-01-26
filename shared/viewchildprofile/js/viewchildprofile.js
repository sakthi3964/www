$(document).ready(function () {
    var session = localStorage.getItem("user");
    if (session == null) {
        window.location.href = "../../../../index.html";
    }
    else {
        var data = {};

        var id = localStorage.getItem("user");
        data.id = id;
        var child_id;
        httpPost("/viewchild", data, function (response) {

            console.log(response);
            if (response[0] == null) {
                $('#children_record').modal();

            }
            //date display code
            else {
                var dateObj = new Date(response[0].childrenprofile.dob);
                var day = dateObj.getUTCDate();
                var year = dateObj.getUTCFullYear();
                var monthNames = ["January", "February", "March", "April", "May", "June",
                    "July", "August", "September", "October", "November", "December"
                ];
                var monthna = new Date(response[0].childrenprofile.dob);
                var month = monthNames[monthna.getMonth()];



                console.log(response);
                $('#profileimage').append('<img src = "' + BASEURL + '/uploads/children/photos/' + response[0].childrenprofile.photos + '" width="150" height="150">');
                $("#blockreg2").removeClass("hide");
                $(".loading").addClass("hide");
                child_id = response[0].childrenprofile.id;
                $('#name').html(response[0].childrenprofile.full_name);
                $('#dob').html(day + "-" + month + "-" + year);
                //  $('#dob').html(response[0].childrenprofile.dob);
                $('#Gender').html(response[0].childrenprofile.gender);
                $('#Center').html(response[0].childrenprofile.center);
            }
        });
        $("#view_preassessment").click(function () {
            window.location = "../../viewpreassessment/en/viewpreassessment.html?id:" + child_id;
        });
    }
});