$(document).ready(function () {
    var session = localStorage.getItem("user");
    if (session == null) {
        window.location.href = "../../../../index.html";
    }
    else {
        var data = {};

        var url = window.location.href;
        data.id = url.substring(url.lastIndexOf(':') + 1);
        httpPost("/viewchildrenownprofile", data, function (response) {
            $("#blockreg2").removeClass("hide");
            $(".loading").addClass("hide");
            $('#profileimage').append('<img src = "' + BASEURL + '/uploads/children/photos/' + response.photos + '" width="150" height="150">');
            child_id = response.id;
             var dateObj = new Date(response.dob);
                var day = dateObj.getDate();
                var year = dateObj.getFullYear();
                var monthNames = ["January", "February", "March", "April", "May", "June",
                    "July", "August", "September", "October", "November", "December"
                ];
                var monthna = new Date(response.dob);
                var month = monthNames[monthna.getMonth()];
            $('#name').html(response.full_name);
            $('#dob').html(day + "-" + month + "-" + year);
            $('#Gender').html(response.gender);
            $('#Center').html(response.center);
            $("#view_preassessment").click(function () {
                window.location = "../../../../shared/viewpreassessment/en/viewpreassessment.html?id:" + child_id;
            });

            $('#request').click(function () {
                var datas = {};
                var datass = {};
                datas.id = localStorage.getItem("user");
                var dataForRequest = {};
                dataForRequest.volunteer_id = localStorage.getItem("user");
                dataForRequest.role = localStorage.getItem("role");
                var url = window.location.href;
                dataForRequest.children_id = url.substring(url.lastIndexOf(':') + 1);
                dataForRequest.time = new Date();
                httpPost("/insertConnectionRequest", dataForRequest, function (response) {
                    if (response == "1") {
                        httpPost("/viewchild", datas, function (response) {
                            console.log(response);
                            console.log(response[0].approve_status);
                            if (response[0].approve_status == 1) {
                                $('#multiplerequest').modal({ backdrop: 'static', keyboard: false });
                            }
                            else {
                                console.log("insertConnectionRequest");
                                datass.approve_status = 1
                                datass.volunteer_id = localStorage.getItem("user");
                                datass.role = localStorage.getItem("role");
                                var url = window.location.href;
                                datass.children_id = url.substring(url.lastIndexOf(':') + 1);
                                datass.time = new Date();
                                httpPost("/deniedvolunteernextchild", datass, function (response) {
                                    $('#childrequest').modal({ backdrop: 'static', keyboard: false });

                                });
                            }

                        });

                    }
                    else {
                        $('#childrequest').modal({ backdrop: 'static', keyboard: false });
                    }

                });
            });



            return false;
        });
    }
});