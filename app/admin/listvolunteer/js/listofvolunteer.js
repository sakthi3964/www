$(document).ready(function () {
    var session = localStorage.getItem("user");
    if (session == null) {
        window.location.href = "../../../../index.html";
    }
    else {


        httpGet("/listofvolunteer", function (response) {
            $(".loading").addClass("hide");
            var i = 0;
            var j = 0;
            var res_length = response.length;
            if (res_length == 0) {
                $(".no_record").removeClass("hide");
            }
            else {
                response.forEach(function (element) {
                    $("#listofmembers").removeClass("hide");
                    $('#listofmembers').append('<div class="profile-card"> <div>  <img id="img' + j + '" src="' + profile_photo + element.profileinfo.photo + '" class="profile-card-img">  <h4 class="profile-card-title">' + element.name + '</h4>  </div>  <button class="profile-card-btn submit" name="submit" type="submit" id="submit' + i + '">ViewProfile</button></div>');
                    var id = "#submit" + i;
                    $(id).click(function () {
                        window.location.href = "../../viewadminvolunteerprofile/en/viewadminvolunteerprofile.html?id:" + element.id;
                    });
                    i++;
                    var id1 = "#img" + j;
                    $(id1).click(function () {
                        window.location.href = "../../viewadminvolunteerprofile/en/viewadminvolunteerprofile.html?id:" + element.id;
                    });
                    j++;
                }, this);
            }
        })
    }
});