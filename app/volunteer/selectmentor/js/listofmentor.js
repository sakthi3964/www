$(document).ready(function () {
    httpGet("/listofmentor", function (response) {
        var i = 0;
        response.forEach(function (element) {

            $('#listofmembers').append('<div class="cards-view"> <div class="profile-card col-xs-6 col-sm-3 col-md-3 col-lg-3"> <div>  <img src="../../../../helperfiles/img/sakthi.JPG" class="profile-card-img">  <h4 class="profile-card-title">' + element.name + '</h4> <h5 class="profile-card-title">' + element.profileinfo.designation + '</h5>  </div>  <button class="profile-card-btn submit" name="submit" type="submit" id="submit' + i + '">ViewProfile</button> </div></div>');
            
            var id = "#submit" + i;
            console.log(id);
            $(id).click(function () {
                window.location.href = "../../viewmentorprofile/en/viewmentorprofile.html?id:"+element.id;
            });
            i++;
        }, this);
       



    })
})