$(document).ready(function () {
    var session = localStorage.getItem("user");
    if (session == null) {
        window.location.href = "../../../../index.html";
    }
    else {
        var data = {};
        var role = localStorage.getItem("role");
        var id = localStorage.getItem("user");
        data.id = id;
        var child_id;
        httpPost("/viewchild", data, function (response) {

            console.log("my viewchild result"+response);
            if (response == '') {
                if (role == "volunteer") {
                    $('#childrenvolunteer_record').modal({ backdrop: 'static', keyboard: false});
                    }
                else if (role == "mentor") {
                    $('#childrenmentor_record').modal({ backdrop: 'static', keyboard: false});
                }

            }
            //date display code
            else {
                var dateObj = new Date(response.childrenprofile.dob);
                var day = dateObj.getDate();
                var year = dateObj.getFullYear();
                var monthNames = ["January", "February", "March", "April", "May", "June",
                    "July", "August", "September", "October", "November", "December"
                ];
                var monthna = new Date(response.childrenprofile.dob);
                var month = monthNames[monthna.getMonth()];



                console.log(response);
                $('#profileimage').append('<img src = "' + BASEURL + '/uploads/children/photos/' + response.childrenprofile.photos + '" width="150" height="150">');
                $("#blockreg2").removeClass("hide");
                $(".loading").addClass("hide");
                child_id = response.childrenprofile.id;
                $('#name').html(response.childrenprofile.full_name);
                $('#dob').html(day + "-" + month + "-" + year);
                //  $('#dob').html(response[0].childrenprofile.dob);
                $('#Gender').html(response.childrenprofile.gender);
                $('#Center').html(response.childrenprofile.center);
            }
        });
        $("#view_preassessment").click(function () {
            window.location = "../../viewpreassessment/en/viewpreassessment.html?id:" + child_id;
        });
    }
});