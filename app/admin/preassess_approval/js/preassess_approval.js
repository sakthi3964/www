// $(document).ready(function () {
//     httpGet("/approvevolunteer", function (response) {

//         $(".loading").addClass("hide");
//         var i = 0;
//         var res_length = response.length;
//         if (res_length == 0) {
//             $(".no_record").removeClass("hide");
//         }
//         else {
//             response.forEach(function (element) {
//                 $("#listofmemberss").removeClass("hide");
//                 var role = element.role;
//                 $('#listofmemberss').append('<div class="cards-view"> <div class="profile-card col-xs-6 col-sm-3 col-md-3 col-lg-3"> <div>  <img src="' + BASEURL + '/uploads/' + role + '/photo/' + element.profileinfo.photo + '" class="profile-card-img">  <h4 class="profile-card-title">' + element.profile.name + '</h4> <h5 class="profile-card-title">' + element.role + '</h5> <h5 class="profile-card-title">' + element.profileinfo.work_type + '</h5> </div> <div class="col-xs-6"><button class="profile-card-btn" type="submit" id="submit' + i + '">Accept</button></div><div class="col-xs-6"><button class="profile-card-btn" type="submit">Deny</button></div></div></div>');
//                 // $("#listofmemberss").load(childReviewForm.html);
//                 var id = "#submit" + i;
//                 $(id).click(function () {
//                     var data = {};
//                     data.id = element.id;
//                     httpPost("/changestatus", data, function (response) {
//                         window.location = "#listofmemberss";
//                     });

//                 });
//                 i++;
//             }, this);
//         }
//     })

// })
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

    httpGet("/approve_preassess", function (response) {
        console.log(response);
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
                $('#listofmemberss').append('<div class="profile-card"> <div>  <img src="' + BASEURL + '/uploads/children/photos/' + element.photos + '" class="profile-card-img" id="img' + j + '" name= "img">  <h4 class="profile-card-title">' + element.full_name + '</h4>   </div> <div><button onclick="accept(' + element.id + ')" class="profile-card-btn" type="submit" id="submit' + i + '">Approve</button></div><div><button onclick="deny(' + element.id + ')" class="profile-card-btn" type="submit">Decline</button></div></div>');
                // $("#listofmemberss").load(childReviewForm.html);
                var id = "#submit" + i;
                var id1 = "#img" + j;
                $(id).click(function () {
                    window.location.href = "../../../../shared/viewpreassessment/en/viewpreassessment.html?id:" + element.id;
                });
                i++;
                $(id1).click(function () {
                    window.location.href = "../../../../shared/viewpreassessment/en/viewpreassessment.html?id:" + element.id;
                });
                j++;
            }, this);
        }
    });


}


function accept(elementId) {

    console.log("skjdhfskjfs");
    var data = {};
    data.id = elementId;
    httpPost("/accept_preassess", data, function (response) {
        console.log("response");
        $('#listofmemberss').empty();
        connectionDisplay();

    });
}
function deny(elementId) {
    var data = {};
    data.id = elementId;
    httpPost("/deny_preassess", data, function (response) {

        //window.location = "#listofmemberss";
        console.log(response);
        //   if (response!=null) {
        $('#listofmemberss').empty();
        connectionDisplay();
        // }
    });
}
