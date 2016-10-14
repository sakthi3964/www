$(document).ready(function () {
    httpGet("/viewadmintracker", function (response) {
        var i = 0;
        response.forEach(function (element) {
            console.log(element.full_name);
            console.log(element.children_connections[0].profile.name);
            console.log(element.children_connections[1].profile.name);
            $('#bodycontent').append('<tr><td>'+ element.full_name +'</td><td>'+element.children_connections[0].profile.name+'</td><td>'+element.children_connections[1].profile.name+'</td><td><button class="btn-default">Tracker</button></td><td><button class="btn-default">graph</button></td></tr>');
          // $("#listofmemberss").load(childReviewForm.html);
            var id = "#submit" + i;
            $(id).click(function () {
                // window.location.href = "../../../../shared/viewvolunteerprofile/en/viewvolunteerprofile.html?id:" + element.id;
                var data = {};
                data.id = element.id;
                httpPost("/changestatus", data, function (response) {
                    console.log(response);
                });

            });
            i++;
        }, this);
    })
})
