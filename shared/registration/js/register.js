$(document).ready(function () {
    $('#role').change(function () {
        if ($('#role').val() == '1') {
            $('#volunteer').show();
            $('#mentor').hide();
            $('#volunteer1').show();
            $('#mentor1').hide();
            $('#mail').show();
            $('#mission').hide();
        }
        if ($('#role').val() == '2') {
            $('#mentor').show();
            $('#volunteer').hide();
            $('#mentor1').show();
            $('#volunteer1').hide();
            $('#mail').show();
            $('#mission').hide();
        }
        if ($('#role').val() == '') {
            $('#mentor').hide();
            $('#volunteer').hide();
            $('#mentor1').hide();
            $('#volunteer1').hide();
            $('#mail').hide();
            $('#mission').show();
        }
         var role =$('#role').val();
     console.log(role);
    $('#submit').click(function () {
        window.location.href ="volunteerregistration.html?role:" +role;
          })
    });
    

});