$(document).ready(function () {
    httpGet("/viewadmintracker", function (response) {
        var i = 0;
        var j = 0;
        $(".loading").addClass("hide");
        var res_length = response.length;
        if (res_length == 0) {
            $(".no_record").removeClass("hide");
        }
        else {
            response.forEach(function (element) {
                $("#listofmembers").removeClass("hide");;
                var length = Object.keys(element.children_connections).length;
                var volunteer;
                var mentor;
                if (length == 1) {
                    if (element.children_connections[0].role == "volunteer") {
                        volunteer = element.children_connections[0].profile.name;
                        mentor = "NA"
                    }
                    else if (element.children_connections[0].role == "mentor") {
                        mentor = element.children_connections[0].profile.name;
                        volunteer = "NA"
                    }
                }
                else {
                    if (element.children_connections[0].role == "volunteer") {
                        volunteer = element.children_connections[0].profile.name;
                        mentor = element.children_connections[1].profile.name;
                    }
                    else if (element.children_connections[0].role == "mentor") {
                        mentor = element.children_connections[0].profile.name;
                        volunteer = element.children_connections[1].profile.name;
                    }

                }
                $('#bodycontent').append('<tr><td>' + element.full_name + '</td><td>' + volunteer + '</td><td>' + mentor + '</td><td><button class="btn" id="submittracker' + i + '">Tracker</button></td><td><button class="btn" id="submitgraph' + j + '">Graph</button></td></tr>');
                // $("#listofmemberss").load(childReviewForm.html);
                var id = "#submittracker" + i;
                $(id).click(function () {
                    window.location.href = "../../../../shared/trackerdisplay/listofdates/en/trackerdates.html?id:" + element.id;
                });
                i++;
                var id1 = "#submitgraph" + j;
                $(id1).click(function () {
                    window.location.href = "../../../../shared/viewgraph/en/viewgraph.html?id:" + element.id;
                });
                j++;

            }, this);
        }
    })
})
