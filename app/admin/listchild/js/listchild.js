$(document).ready(function () {
    httpGet("/listchild", function (response) {
        $(".loading").addClass("hide");
        var i = 0;
        var res_length = response.length;
        if (res_length == 0) {
            $(".no_record").removeClass("hide");
        }
        else {
            response.forEach(function (element) {
                $("#listofmembers").removeClass("hide");
                $('#listofmembers').append('<div class="cards-view"> <div class="profile-card col-xs-6 col-sm-3 col-md-3 col-lg-3"> <div>  <img src="' + BASEURL + '/uploads/children/photos/' + element.photos + '" class="profile-card-img">  <h4 class="profile-card-title">' + element.full_name + '</h4> <h5 class="profile-card-title">' + element.user_id + '</h5>  </div>  <button class="profile-card-btn submit" name="submit" type="submit" id="submit' + i + '">ViewProfile</button> </div></div>');
                var id = "#submit" + i;
                $(id).click(function () {
                    window.location.href = "../../viewadminchildprofile/en/viewadminchildprofile.html?id:" + element.id;
                });
                i++;
            }, this);
        }
    })
});