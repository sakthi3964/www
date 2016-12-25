$(document).ready(function () {
    $("#logoutsession").click(function () {
        //alert("sakthi");
        localStorage.clear();
        // window.location.href = "../../../../../index.html";
    });

    var role = localStorage.getItem("role");
    // var url = window.location.href;
    // alert(url);
    // // if (url.contains("test")) {
    // //     alert("String not Found");
    // // }
    // // if (window.location.href.indexOf("app")) {
    // //     alert("url");

    // // }
    // // else {
    // //     alert("not present url");
    // // }
    var url = window.location.href;
    var urlstring = url.toString();
    var key = urlstring.includes("shared");
    var key2 = urlstring.includes("trackerdisplay");
    $("#home_button").click(function () {
        if (role == "children") {
            if (key2) {
                window.location.href = "../../../app/children/childrenshome/en/childrenhome.html";
            }
            else if (key) {
                window.location.href = "../../../app/children/childrenshome/en/childrenhome.html";
            }
            else {
                window.location.href = "../../../../app/children/childrenshome/en/childrenhome.html";
            }

        }
        else if (role == "volunteer") {
            if (key2) {
                window.location.href = "../../../../app/volunteer/volunteerhome/en/volunteerhome.html";
            }
            else if (key) {
                window.location.href = "../../../app/volunteer/volunteerhome/en/volunteerhome.html";
            }
            else {
                window.location.href = "../../../../app/volunteer/volunteerhome/en/volunteerhome.html";
            }

        }
        else if (role == "mentor") {
            if (key2) {
                window.location.href = "../../../../app/mentor/mentorhome/en/mentorhome.html";
            }
            else if (key) {
                window.location.href = "../../../app/mentor/mentorhome/en/mentorhome.html";
            }
            else {
                window.location.href = "../../../../app/mentor/mentorhome/en/mentorhome.html";
            }

        }
        else if (role == "admin") {
            if (key2) {
                window.location.href = "../../../../app/admin/adminhome/en/adminhome.html";
            }
            else if (key) {
                window.location.href = "../../../app/admin/adminhome/en/adminhome.html";
            }
            else {
                window.location.href = "../../../../app/admin/adminhome/en/adminhome.html";
            }

        }
    });
});