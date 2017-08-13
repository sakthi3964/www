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

    httpGet("/approvevolunteer", function (response) {
        $(".loading").addClass("hide");
        var i = 0;
        var j = 0;
        var status;
        var res_length = response.length;
        var commitment,email_color_code,commitment_color_code;
        if (res_length == 0) {
            $(".no_record").removeClass("hide");
        }
        else {
            response.forEach(function (element) {
                $("#listofmemberss").removeClass("hide");
                if(element.profile.verification_status == 1){
                    status="Verified";
                    email_color_code = "#000000";
                }
                else{
                    status="Not-Verified";
                    email_color_code = "#EA4335";
                }
                if(element.profileinfo.commitment == "below"){
                    commitment = "Below 6 hr/mon";
                    commitment_color_code = "#EA4335";
                }
                else{
                    commitment = element.profileinfo.commitment+" hr/mon";
                    commitment_color_code = "#000000";
                }
                var role = element.role;
                $('#listofmemberss').append('<div class="profile-card "> <div>  <img src="' + BASEURL + '/uploads/' + role + '/photo/' + element.profileinfo.photo + '" class="profile-card-img" id="img' + j + '" name= "img">  <h4 class="profile-card-title">' + element.profile.name + '</h4> <h5 class="profile-card-title">' + element.role + '</h5>   <h5 class="profile-card-title" style="color:'+email_color_code+'"> ' + status + '</h5> <h5 class="profile-card-title" style="color:'+commitment_color_code+'">' + commitment + '</h5> </div> <div><button onclick="accept(' + element.id + "," + element.user_id + ')"class="profile-card-btn" type="submit" id="submit' + i + '">Accept</button></div><div><button onclick="deny(' + element.id + "," + element.user_id + ')" class="profile-card-btn" type="submit" id="deny' + j + '">Deny</button></div></div>');
                // $("#listofmemberss").load(childReviewForm.html);
                // $('#listofmemberss').append('<div class="profile-card "> <div>  <img src="' + BASEURL + '/uploads/' + role + '/photo/' + element.profileinfo.photo + '" class="profile-card-img" id="img' + j + '" name= "img">  <h4 class="profile-card-title">' + element.profile.name + '</h4> <h5 class="profile-card-title">' + element.role + '</h5> <h5 class="profile-card-title">' + element.profileinfo.work_type + '</h5> </div> <div><button onclick="accept(' + element.id + "," + element.user_id + ')"class="profile-card-btn" type="submit" id="submit' + i + '">Accept</button></div><div><button onclick="deny(' + element.id + "," + element.user_id + ')" class="profile-card-btn" type="submit" id="deny' + j + '">Deny</button></div></div>');
                // $('#listofmemberss').append('<div class="profile-card "> <div>  <img src="' + BASEURL + '/uploads/' + role + '/photo/' + element.profileinfo.photo + '" class="profile-card-img" id="img' + j + '" name= "img">  <h4 class="profile-card-title">' + element.profile.name + '</h4> <h5 class="profile-card-title">' + element.role + '</h5> <h5 class="profile-card-title">' + element.profileinfo.work_type + '</h5> </div> <div><button onclick="accept(' + element.id + "," + element.user_id + ')"class="profile-card-btn" type="submit" id="submit' + i + '">Accept</button></div><div><button onclick="deny(' + element.id + "," + element.user_id + ')" class="profile-card-btn" type="submit" id="deny' + j + '">Deny</button></div></div>');
                // $('#listofmemberss').append('<div class="profile-card "> <div>  <img src="' + BASEURL + '/uploads/' + role + '/photo/' + element.profileinfo.photo + '" class="profile-card-img" id="img' + j + '" name= "img">  <h4 class="profile-card-title">' + element.profile.name + '</h4> <h5 class="profile-card-title">' + element.role + '</h5> <h5 class="profile-card-title">' + element.profileinfo.work_type + '</h5> </div> <div><button onclick="accept(' + element.id + "," + element.user_id + ')"class="profile-card-btn" type="submit" id="submit' + i + '">Accept</button></div><div><button onclick="deny(' + element.id + "," + element.user_id + ')" class="profile-card-btn" type="submit" id="deny' + j + '">Deny</button></div></div>');


                var id = "#submit" + i;
                var id1 = "#img" + j;
                $(id1).click(function () {
                    window.location.href = "../../viewadminvolunteerprofile/en/viewadminvolunteerprofile.html?id:" + element.profile.id;
                });
                j++;
            }, this);
        }
    });


}


function accept(elementId, profileId) {
    var data = {};
    data.id = elementId;
    data.profileId = profileId;
    data.time = new Date();
    console.log(data.profileId);
    httpPost("/changestatus", data, function (response) {

        //window.location = "#listofmemberss";
        console.log(response);
        //   if (response!=null) {
        $('#listofmemberss').empty();
        connectionDisplay();
        // }
    });
}

function deny(elementId, profileId) {
    var data = {};
    data.id = elementId;
    data.profileId = profileId;
    data.time = new Date();
    console.log(data.profileId);
    httpPost("/denyloginstatus", data, function (response) {

        //window.location = "#listofmemberss";
        console.log(response);
        //   if (response!=null) {
        $('#listofmemberss').empty();
        connectionDisplay();
        // }
    });
}
