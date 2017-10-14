$(document).ready(function () {
    var session = localStorage.getItem("user");
    if (session == null) {
        window.location.href = "../../../../index.html";
    }
    else {
        var data={};
        data.role=localStorage.getItem("role");
        httpPost("/listofmentor",data, function (response) {
            $("#listofmembers").removeClass("hide");
            $(".loading").addClass("hide");
            var res_length = response.length;
            if (res_length == 0) {
                $(".no_record").removeClass("hide");
            }
            else {
                var i = 0;
                var j = 0;
                response.forEach(function (element) {
                    if(element.profileinfo.work_type == "student"){
                        var designation = "Student";
                    }
                    else{
                        var designation = element.profileinfo.designation;
                    }
                    $('#listofmembers').append('<div class="profile-card"> <div>  <img id="img' + j + '" src="' + element.profile_photo + element.profileinfo.photo + '"  class="profile-card-img">  <h4 class="profile-card-title">' + element.name + '</h4> <h5 class="profile-card-title">' + designation + '</h5>  </div>  <button class="profile-card-btn submit" name="submit" type="submit" id="submit' + i + '">ViewProfile</button> </div>');
                    var id = "#submit" + i;
                    $(id).click(function () {
                        window.location.href = "../../viewmentorprofile/en/viewmentorprofile.html?id:" + element.id;
                    });
                    i++;
                    var id1 = "#img" + j;
                    $(id1).click(function () {
                        window.location.href = "../../viewmentorprofile/en/viewmentorprofile.html?id:" + element.id;
                    });
                    j++;
                }, this);
            }
        })
    }
})