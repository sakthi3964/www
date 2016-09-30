$(document).ready(function () {
    httpGet("/volunteerhome", function (response) {
        if (response == 0) {
           
             $('#selectchild').append('<a href="#"><div class="col-sm-4 col-xs-4"><p>Child Profile<img src="../../../../helperfiles/img/childrenprofile.png" class="img-responsive " alt="View Children Profile" width="120"height="236"> </p></div></a>');
        }
        else {
             $('#selectchild').append('<a href="../../selectchild/en/listofchild.html"><div class="col-sm-4 col-xs-4"><p>Select Child<img src="../../../../helperfiles/img/addchildren.png" class="img-responsive " alt="CHILD SELECTION" width="120" height="236"></p></div></a>');
        }
    })
});