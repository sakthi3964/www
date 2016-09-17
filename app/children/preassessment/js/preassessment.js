$(document).ready(function () {
    $('#goal').change(function () {

        $('#specificfield').show();
    });

    $("input[name='effort']").click(function () {
            if ($("#effort1").is(":checked")) {
                $("#effort3").show();
            } else {
                $("#effort3").hide();
            }
        });

         $("input[name='housework']").click(function () {
            if ($("#houseworkyes").is(":checked")) {
                $("#houseworkinp").show();
            } else {
                $("#houseworkinp").hide();
            }
        });

         $("input[name='clubmember']").click(function () {
            if ($("#clubmemberyes").is(":checked")) {
                $("#clubnameinp").show();
            } else {
                $("#clubnameinp").hide();
            }
        });

        $("input[name='continue']").click(function () {
            if ($("#continueno").is(":checked")) {
                $("#continueinp").show();
            } else {
                $("#continueinp").hide();
            }
        });

        $("input[name='job']").click(function () {
            if ($("#jobyes").is(":checked")) {
                $(".jobq").show();
            } else {
                $(".jobq").hide();
            }
        });


});