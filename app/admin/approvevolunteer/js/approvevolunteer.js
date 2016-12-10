$(document).ready(function () {
    httpGet("/approvevolunteer", function (response) {
        var i = 0;
        response.forEach(function (element) {
            var role = element.role;
            $('#listofmemberss').append('<div class="cards-view"> <div class="profile-card col-xs-6 col-sm-3 col-md-3 col-lg-3"> <div>  <img src="'+BASEURL+'/uploads/'+role+'/photo/' + element.profileinfo.photo + '" class="profile-card-img">  <h4 class="profile-card-title">' + element.profile.name + '</h4> <h5 class="profile-card-title">' + element.role + '</h5> <h5 class="profile-card-title">' + element.profileinfo.work_type + '</h5> </div> <div class="col-xs-6"><button class="profile-card-btn" type="submit" id="submit' + i + '">Accept</button></div><div class="col-xs-6"><button class="profile-card-btn" type="submit">Deny</button></div></div></div>');
            // $("#listofmemberss").load(childReviewForm.html);
            var id = "#submit" + i;
            $(id).click(function () {
                var data = {};
                data.id = element.id;
                httpPost("/changestatus", data, function (response) {
                    window.location = "#listofmemberss";
                });

            });
            i++;
        }, this);
    })
})
