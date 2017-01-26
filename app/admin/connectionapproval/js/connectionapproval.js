// $(document).ready(function () {
//     httpGet("/connectionapproval", function (response) {
//         var i = 0;
//         var j = 0;
//         response.forEach(function (element) {
//             console.log(element.childrenprofile.full_name);
//             console.log(element.role);
//             $('#listofmemberss').append('<div class="cards-view"><div class="profile-card col-xs-6 col-sm-3 col-md-3 col-lg-3"><div><table class="table"><tr><td>' + element.childrenprofile.full_name + '</td><td>' + element.profile.name + '</td></tr><tr><td>children</td><td>' + element.role + '</td></tr></table></div><div class="col-xs-6 col-sm-6"><button class="profile-card-btn" type="submit" id="submit' + i + '">Accept</button></div><div class="col-sm-6 col-xs-6"><button class="profile-card-btn" type="submit" id="submit1' + i + '">Deny</button></div></div></div>');
//             // $("#listofmemberss").load(childReviewForm.html);
//             var id = "#submit" + i;
//             $(id).click(function () {
//                 // window.location.href = "../../../../shared/viewvolunteerprofile/en/viewvolunteerprofile.html?id:" + element.id;
//                 var data = {};
//                 data.status = "true";
//                 data.id = element.id;
//                 data.profile_id = element.profile_id;
//                 httpPost("/changeapproval", data, function (response) {
//                     console.log(response);
//                 });

//             });
//             i++;
//             var id1 = "#submit1" + j;
//             $(id1).click(function () {
//                 // window.location.href = "../../../../shared/viewvolunteerprofile/en/viewvolunteerprofile.html?id:" + element.id;
//                 var data = {};
//                 data.status = "false";
//                 data.id = element.id;
//                 httpPost("/changeapproval", data, function (response) {
//                     console.log(response);
//                 });

//             });
//             j++;
//         }, this);
//     })
// });


$(document).ready(function () {
    var session = localStorage.getItem("user");
    if (session == null) {
        window.location.href = "../../../../index.html";
    }
    else {

        connectionDisplay();

    }
});
function connectionDisplay() {
    httpGet("/connectionapproval", function (response) {
        $(".loading").addClass("hide");
        var i = 0;
        var j = 0;
        var res_length = response.length;
        if (res_length == 0) {
            $(".no_record").removeClass("hide");
        }
        else {
            response.forEach(function (element) {
                $("#listofmemberss").removeClass("hide");
                console.log(element.childrenprofile.full_name);
                console.log(element.role);
                $('#listofmemberss').append('<div class="cards-view"><div class="profile-card  col-xs-6 col-sm-3 col-md-3 col-lg-3"><div><table class="table"><tr><td>' + element.childrenprofile.full_name + '</td><td>' + element.profile.name + '</td></tr><tr><td>children</td><td>' + element.role + '</td></tr></table></div><div class="col-xs-6 col-sm-6"><button onclick="accept(' + element.id + "," + element.profile_id + "," + true + ')"class="profile-card-btn accept-button " type="submit" id="submit' + i + '">Accept</button></div><div class="col-sm-6 col-xs-6"><button class="profile-card-btn" type="submit" id="submit1' + i + '">Deny</button></div></div></div>');

            }, this);
        }
    });

}

// window.location.href = "../../../../shared/viewvolunteerprofile/en/viewvolunteerprofile.html?id:" + element.id;
function accept(elementId, elementPrfileId, elementStatus) {
    var data = {};
    data.status = elementStatus;


    data.id = elementId;
    data.profile_id = elementPrfileId;
    httpPost("/changeapproval", data, function (response) {
        console.log(response);
        if (response != null) {
            $('#listofmemberss').empty();
            connectionDisplay();
        }
    });
}

