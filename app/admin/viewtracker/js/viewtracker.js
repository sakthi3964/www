$(document).ready(function () {
    var session = localStorage.getItem("user");
    if (session == null) {
        window.location.href = "../../../../index.html";
    }
    else {
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
                    $('#bodycontent').append('<div class="row "><div class="col-sm-2 col-xs-2"><h5>' + element.full_name + '</h5></div><div class="col-sm-2 col-xs-2"><h5>' + volunteer + '</h5></div><div class="col-sm-2 col-xs-2"><h5>' + mentor + '</h5></div><div class="col-sm-3 col-xs-3 tracker-button"><center><button class="btn" id="submittracker' + i + '">Tacker</button></center></div><div class="col-sm-3 col-xs-3 tracker-button"><center><button class="btn" id="submitgraph' + j + '">Graph</button></center></div>');
                    // $('#bodycontent').append('<tr><td>' + element.full_name + '</td><td>' + volunteer + '</td><td>' + mentor + '</td><td><button class="btn" id="submittracker' + i + '">Tracker</button></td><td><button class="btn" id="submitgraph' + j + '">Graph</button></td></tr>');
                    // $("#listofmemberss").load(childReviewForm.html);
                    var elementid = window.btoa(element.id);
                    var id = "#submittracker" + i;
                    $(id).click(function () {
                        window.location.href = "../../../../shared/trackerdisplay/listofdates/en/trackerdates.html?id:" + elementid;
                    });
                    i++;
                    var id1 = "#submitgraph" + j;
                    $(id1).click(function () {
                        window.location.href = "../../../../shared/viewgraph/en/viewgraph.html?id:" + elementid;
                    });
                    j++;

                }, this);
            }
        })
    }
});
// <div class="col-sm-2 col-xs-2"><h4>Children</h4></div><div class="col-sm-2 col-xs-2"><h4>Vounteer</h4></div><div class="col-sm-2 col-xs-2"><h4>Mentor</h4></div><div class="col-sm-3 col-xs-2 tracker-button"><center><button class="btn">Tacker</button></center></div><div class="col-sm-3 col-xs-2 tracker-button"><button class="btn">Graph</button>