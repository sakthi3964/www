

$(document).ready(function () {
    var session = localStorage.getItem("user");
    if (session == null) {
        window.location.href = "../../../../index.html";
    }
    else {

        connectionDisplay("volunteer");

    }
});
function volunteerTab() {
    $('#firsttab').empty();
    var role = "volunteer";
    connectionDisplay(role);
}
function mentorTab() {
    $('#secondtab').empty();
    var role = "mentor";
    connectionDisplay(role);
}
function connectionDisplay(role) {
    //    $('#secondtab').empty();
    var data = {};
    if (role == "volunteer") {
        data.connectionOperation = "volunteer";
    }
    if (role == "mentor") {
        data.connectionOperation = "mentor";
    }
    console.log(data.connectionOperation);
    httpPost("/connectionapproval", data, function (response) {
        $(".loading").addClass("hide");

        var i = 0;
        var j = 0;
        var res_length = response.length;
        if (res_length == 0) {
            $(".no_record").removeClass("hide");
        }
        else {
            $(".no_record").addClass("hide");
            response.forEach(function (element) {
                //console.log("role ----" + element.role);
                $(".loading").addClass("hide");
                if (element.role == 'volunteer') {
                    $('#firsttab').append('<div class="cards-view"><div class="profile-card  col-xs-6 col-sm-3 col-md-3 col-lg-3"><div><table class="table"><tr><th>' + 'Children' + '</th><td>' + element.childrenprofile.full_name + '</td></tr><tr><th>' + element.role + '</th><td>' + element.profile.name + '</td></tr></table></div><div class="col-xs-6 col-sm-6 btn-section"><button onclick="accept(' + element.children_id + "," + element.profile_id + "," + true + ",'" + element.role + '\')"class="profile-card-btn accept-button " type="submit" id="submit' + i + '">Accept</button></div><div class="btn-section col-sm-6 col-xs-6"><button onclick="deny(' + element.id + "," + element.profile_id + "," + true + "," + element.childrenprofile.id + ",'" + element.role + '\')" class="profile-card-btn" type="submit" id="submit1' + i + '">Deny</button></div></div></div>');
                }
                else {
                    $('#secondtab').append('<div class="cards-view"><div class="profile-card  col-xs-6 col-sm-3 col-md-3 col-lg-3"><div><table class="table"><tr><th>' + 'Children' + '</th><td>' + element.childrenprofile.full_name + '</td></tr><tr><th>' + element.role + '</th><td>' + element.profile.name + '</td></tr></table></div><div class="col-xs-6 col-sm-6 btn-section"><button onclick="accept(' + element.children_id + "," + element.profile_id + "," + true + ",'" + element.role + '\')"class="profile-card-btn accept-button " type="submit" id="submit' + i + '">Accept</button></div><div class="btn-section col-sm-6 col-xs-6"><button onclick="deny(' + element.id + "," + element.profile_id + "," + true + "," + element.childrenprofile.id + ",'" + element.role + '\')" class="profile-card-btn" type="submit" id="submit1' + i + '">Deny</button></div></div></div>');

                }
            }, this);
        }
    });

}

function accept(elementId, elementPrfileId, elementStatus, elementRole) {
    console.log("aiee");
    var data = {};
    var role = elementRole;
    console.log("role"+elementRole);
    if ('volunteer' == elementRole) {
        data.process='vca';
        data.action='approve'
    }
    if ('mentor' == elementRole) {
        data.process='vcma';
        data.action='approve';
    }
    console.log("inside accept", role);
    data.children_id = elementId;
    data.profile_id = elementPrfileId;
    data.role=elementRole;
    data.time = new Date();
    httpPost("/changeapproval", data, function (response) {
    
        console.log(response);
        if (response != null) {
            if (elementRole == 'volunteer') {
                $('#firsttab').empty();

            }
            else {
                $('#secondtab').empty();

            }

            connectionDisplay(elementRole);
        }
    });
}


function deny(elementId, elementProfileId,status, elementchildrenId, elementRole) {
    console.log("deny");
    var data = {};
    var role = elementRole;
    console.log("role"+elementRole);
    if ('volunteer' == elementRole) {
        data.process='vca';
        data.action='decline'
    }
    if ('mentor' == elementRole) {
        data.process='vcma';
        data.action='decline';
    }
    console.log("inside accept"+ role);
    data.children_id = elementchildrenId;
    data.profile_id = elementProfileId;
    data.role=elementRole;
    data.time = new Date();
    httpPost("/changeapproval", data, function (response) {
    
        console.log(response);
        if (response != null) {
            if (elementRole == 'volunteer') {
                $('#firsttab').empty();

            }
            else {
                $('#secondtab').empty();

            }

            connectionDisplay(elementRole);
        }
    });
}

