$(document).ready(function () {
    var data = {};

    var url = window.location.href;
    data.id = url.substring(url.lastIndexOf(':') + 1);
    httpPost("/viewchildrenownprofile", data, function (response) {
        $("#blockreg2").removeClass("hide");
        $(".loading").addClass("hide");
        $('#profileimage').append('<img src = "' + BASEURL + '/uploads/children/photos/' + response.photos + '" width="150" height="150">');
        child_id = response.id;
        $('#name').html(response.full_name);
        $('#dob').html(response.dob);
        $('#Gender').html(response.gender);
        $('#Center').html(response.center);
        $("#view_preassessment").click(function () {
            window.location = "../../../../shared/viewpreassessment/en/viewpreassessment.html?id:" + child_id;
        });

        $('#request').click(function () {

            var dataForRequest = {};
            dataForRequest.volunteer_id = localStorage.getItem("user");
            dataForRequest.role = localStorage.getItem("role");
            var url = window.location.href;
            dataForRequest.children_id = url.substring(url.lastIndexOf(':') + 1);
            httpPost("/insertConnectionRequest", dataForRequest, function (response) {
                if (response == "1") {
                    $('#multiplerequest').modal({backdrop: 'static', keyboard: false});
                }
                else {
                    $('#childrequest').modal({backdrop: 'static', keyboard: false});
                }

            });
        });



        return false;
    });
});