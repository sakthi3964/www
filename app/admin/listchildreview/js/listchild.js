$(document).ready(function () {
    var session = localStorage.getItem("user");
    if (session == null) {
        window.location.href = "../../../../index.html";
    }
    else {


        // var md5 = md5();
        httpGet("/listchild", function (response) {

            $(".loading").addClass("hide");
            var i = 0;
            var j = 0;
            var res_length = response.length;
            if (res_length == 0) {
                $(".no_record").removeClass("hide");
            }
            else {
                response.forEach(function (element) {
                    // var hashedid = md5(element.id);
                    // var temp =md5decrypt(hashedid);
                    // var hashedid = $.md5(element.id);
                    var enc = window.btoa(element.id);
                    console.log(enc);
                    console.log(window.atob(enc));
                    // var dec = window.atob(dec);
                    // console.log(dec);
                    // console.log("hashed id" + hashedid);
                    // console.log(temp);
                    $("#listofmembers").removeClass("hide");
                    $('#listofmembers').append('<div class="profile-card"> <div>  <img id="img' + j + '" src="' + BASEURL + '/uploads/children/photos/' + element.photos + '" class="profile-card-img">  <h4 class="profile-card-title">' + element.full_name + '</h4> <h5 class="profile-card-title">' + element.center + '</h5>  </div>  <button class="profile-card-btn submit" name="submit" type="submit" id="submit' + i + '">View Review</button> </div>');
                    var id = "#submit" + i;
                    $(id).click(function () {
                        window.location.href = "../../../../shared/viewchildreviewgraph/en/viewchildreviewgraph.html?id:" + enc;
                    });
                    i++;
                    var id1 = "#img" + j;
                    $(id1).click(function () {
                        window.location.href = "../../../../shared/viewchildreviewgraph/en/viewchildreviewgraph.html?id:" + enc;
                    });
                    j++;
                }, this);
            }
        })
    }
});