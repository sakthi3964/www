$(document).ready(function () {
    var session = localStorage.getItem("user");
    if (session == null) {
        window.location.href = "../../../../index.html";
    }
    else {
        httpGet("/selectChild", function (response) {
            $(".loading").addClass("hide");
            var i = 0;
            var j = 0;
            var res_length = response.length;
            if (res_length == 0) {
                $(".no_record").removeClass("hide");
            }
            else {
                response.forEach(function (element) {
                    var pressmentobject = JSON.parse(element.pre_assessment_data);
                    $("#listofmembers").removeClass("hide");
                    $('#listofmembers').append('<div class="profile-card"> <div>  <img id="img' + i + '" src="' + BASEURL + '/uploads/children/photos/' + element.photos + '" class="profile-card-img">  <h4 class="profile-card-title">' + element.full_name + '</h4> <h5 class="profile-card-title">' + element.center + '</h5> <h6 class="profile-card-title">' + pressmentobject.standard + '</h6> </div>  <button class="profile-card-btn submit" name="submit" type="submit" id="submit' + i + '">ViewProfile</button> </div>');
                    var id = "#submit" + i;
                    $(id).click(function () {
                        window.location.href = "../../viewchildprofile/en/viewchildprofile.html?id:" + element.id;
                    });
                    i++;

                    var id1 = "#img" + j;
                    $(id1).click(function () {
                        window.location.href = "../../viewchildprofile/en/viewchildprofile.html?id:" + element.id;
                    });
                    j++;
                }, this);
            }
        });
    }
})