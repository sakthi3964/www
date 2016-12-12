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


    $("#home_button").click(function () {
        if (role == "children") {
            window.location.href = "../../../../app/children/childrenshome/en/childrenhome.html";
        }
        else if (role == "volunteer") {
            window.location.href = "../../../../app/volunteer/volunteerhome/en/volunteerhome.html";
        }
        else if (role == "mentor") {
            window.location.href = "../../../../app/mentor/mentorhome/en/mentorhome.html";
        }
        else if (role == "admin") {
            window.location.href = "../../../../app/admin/adminhome/en/adminhome.html";
        }
    });
});