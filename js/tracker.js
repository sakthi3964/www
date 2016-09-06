$(document).ready(function()
{
     $('#placeOfMeeting').change(function () {
        if ($('#placeOfMeeting').val() == '5') {
            $('#others').show();
          
        }
        else{
            $('#others').hide();
        }
     
    });

        $("input[name='connection']").click(function () {
            if ($("#yes").is(":checked")) {
                $("#connectionDetail").show();
            } else {
                $("#connectionDetail").hide();
            }
        });


         $("input[name='challengesMentee']").click(function () {
            if ($("#Menteeyes").is(":checked")) {
                $("#challengesDetailMentee").show();
            } else {
                $("#challengesDetailMentee").hide();
            }
        });

         $("input[name='challengesMentor']").click(function () {
            if ($("#Mentoryes").is(":checked")) {
                $("#challengesDetailMentor").show();
            } else {
                $("#challengesDetailMentor").hide();
            }
        });

 $("input[name='challengesVolunteer']").click(function () {
            if ($("#Volunteeryes").is(":checked")) {
                $("#challengesDetailVolunteer").show();
            } else {
                $("#challengesDetailVolunteer").hide();
            }
        });

});

$(document).ready(function() {
    // You don't need to care about this function
    // It is for the specific demo
    function adjustIframeHeight() {
        var $body   = $('body'),
                $iframe = $body.data('iframe.fv');
        if ($iframe) {
            // Adjust the height of iframe
            $iframe.height($body.height());
        }
    }

    $('#trackerForm')
        .formValidation({
            framework: 'bootstrap',
            icon: {
                valid: 'glyphicon glyphicon-ok',
                invalid: 'glyphicon glyphicon-remove',
                validating: 'glyphicon glyphicon-refresh'
            },
            // This option will not ignore invisible fields which belong to inactive panels
            excluded: ':disabled',
            fields: {
            }
        })
        .bootstrapWizard({
            tabClass: 'nav nav-pills',
            onTabClick: function(tab, navigation, index) {
                return validateTab(index);
            },
            onNext: function(tab, navigation, index) {
                var numTabs    = $('#trackerForm').find('.tab-pane').length,
                    isValidTab = validateTab(index - 1);
                if (!isValidTab) {
                    return false;
                }

                if (index === numTabs) {
                    // We are at the last tab

                    // Uncomment the following line to submit the form using the defaultSubmit() method
                    // $('#installationForm').formValidation('defaultSubmit');

                    // For testing purpose
                    $('#completeModal').modal();
                }

                return true;
            },
            onPrevious: function(tab, navigation, index) {
                return validateTab(index + 1);
            },
            onTabShow: function(tab, navigation, index) {
                // Update the label of Next button when we are at the last tab
                var numTabs = $('#trackerForm').find('.tab-pane').length;
                $('#trackerForm')
                    .find('.next')
                        .removeClass('disabled')    // Enable the Next button
                        .find('a')
                        .html(index === numTabs - 1 ? 'submit' : 'Next');

                // You don't need to care about it
                // It is for the specific demo
                adjustIframeHeight();
            }
        });

    function validateTab(index) {
        var fv   = $('#trackerForm').data('formValidation'), // FormValidation instance
            // The current tab
            $tab = $('#trackerForm').find('.tab-pane').eq(index);

        // Validate the container
        fv.validateContainer($tab);

        var isValidStep = fv.isValidContainer($tab);
        if (isValidStep === false || isValidStep === null) {
            // Do not jump to the target tab
            return false;
        }

        return true;
    }
    $("#reviewBody").submit(function (e) {
        e.preventDefault();
    })
$("#educationalPerformance").slider();
$("#educationalPerformance").on("slide", function (educationalPerformance) {
	console.log("educationalPerformance:" + educationalPerformance.value);
	
});


});