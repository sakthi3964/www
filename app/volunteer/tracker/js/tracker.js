$(document).ready(function () {
    var session = localStorage.getItem("user");
    if (session == null) {
        window.location.href = "../../../../index.html";
    }
    else {
       
        $("#date").datepicker({
            dateFormat: 'dd-mm-yy',
            maxDate: new Date, minDate: new Date(1960, 1, 12)
        });

        $('#placeOfMeeting').change(function () {
            if ($('#placeOfMeeting').val() == 'Others') {
                $('#others').show();

            }
            else {
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
    }

});

$(document).ready(function () {
    // You don't need to care about this function
    // It is for the specific demo
    function adjustIframeHeight() {
        var $body = $('body'),
            $iframe = $body.data('iframe.fv');
        if ($iframe) {
            // Adjust the height of iframe
            $iframe.height($body.height());
        }
    }

    $('#trackerForm')
        .formValidation({
            framework: 'bootstrap',

            fields: {
                date: {
                    validators: {
                        notEmpty: {
                            message: 'Enter your date of meeting'
                        }
                    }
                },
                placeOfMeeting: {
                    validators: {
                        notEmpty: {
                            message: 'Enter your place of meeting'
                        }
                    }
                },
                agenda: {
                    validators: {
                        notEmpty: {
                            message: 'Enter your agenda'
                        }
                    }
                },
                outcome: {
                    validators: {
                        notEmpty: {
                            message: 'Enter your agenda'
                        }
                    }
                },
                accomplishment: {
                    validators: {
                        notEmpty: {
                            message: 'Enter accomplishment of your child'
                        }
                    }
                },
                connection: {
                    validators: {
                        notEmpty: {
                            message: 'Check, if there is any new connection'
                        }
                    }
                },
                connectedTo1: {
                    selector: '.connectedTo1',
                    validators: {
                        notEmpty: {
                            message: 'Check, if there is any new connection'
                        }
                    }
                },

                purpose1: {
                    selector: '.purpose1',
                    validators: {
                        notEmpty: {
                            message: 'Enter your purpose'
                        }
                    }
                },
                learnings: {
                    validators: {
                        notEmpty: {
                            message: 'Enter Learnings of your Mentee'
                        }
                    }
                },
                challengesMentee: {
                    validators: {
                        notEmpty: {
                            message: 'whether your Mentee faced any  Challenges'
                        }
                    }
                },
                challengesDetailMenteeText: {
                    validators: {
                        notEmpty: {
                            message: 'Enter Challenges of your Mentee'
                        }
                    }
                },

                challengesMentor: {
                    validators: {
                        notEmpty: {
                            message: 'whether your Mentor faced any  Challenges'
                        }
                    }
                },
                challengesDetailMentorText: {
                    validators: {
                        notEmpty: {
                            message: 'Enter Challenges of your Mentor'
                        }
                    }
                },
                challengesVolunteer: {
                    validators: {
                        notEmpty: {
                            message: 'whether your Mentor faced any  Challenges'
                        }
                    }
                },
                challengesDetailVolunteerText: {
                    validators: {
                        notEmpty: {
                            message: 'Enter Challenges of volunteer'
                        }
                    }
                },
                // commentsForRating: {
                //     validators: {
                //         notEmpty: {
                //             message: 'please enter your comments'
                //         }
                //     }
                // }
                commentsForRating: {
                        selector: '.commentsForRating',
                        validators: {
                            notEmpty: {
                                message: 'comments needed'
                            }
                        }
                    }
            }
        })
        .bootstrapWizard({
            tabClass: 'nav nav-pills',
            onTabClick: function (tab, navigation, index) {
                return validateTab(index);
            },
            onNext: function (tab, navigation, index) {
                var numTabs = $('#trackerForm').find('.tab-pane').length,
                    isValidTab = validateTab(index - 1);
                if (!isValidTab) {
                    return false;
                }

                if (index === numTabs) {
                    $(".loading").removeClass("hide");
                    $("#trackerbody").addClass("hide");
                    // We are at the last tab

                    // Uncomment the following line to submit the form using the defaultSubmit() method
                    // $('#installationForm').formValidation('defaultSubmit');

                    // For testing purpose

                    // $('#completeModal').modal({backdrop: 'static', keyboard: false});
                    var data = {};
                    var data1 = {};
                    data1.connectedToJsonArray = [];

                    var connectedTo1;
                    var purpose1;
                    // alert(memberscount);
                    for (var i = 0; i <= memberscount; i++) {
                        connectedTo1 = "connectedTo-[" + i + "]";
                        purpose1 = "purpose-[" + i + "]";
                        var connectedToName=document.getElementsByName(connectedTo1)[0].value;
                         var connectedToPurpose=document.getElementsByName(purpose1)[0].value;

                        var connection = {
                            "connectedTo":connectedToName,
                            "purpose": connectedToPurpose
                        };
                        if(connectedToName != "" && connectedToPurpose != "")
                        {
                             data1.connectedToJsonArray.push(connection);
                        }
                       
                    }
                    
                    var sample = JSON.stringify(data1);
                    data.newcon = sample;
                    data.date = ($('#date').val());
                    var location = ($('#placeOfMeeting').val());
                    if (location == "Others") {
                        data.location = ($('#others').val());
                    }
                    else {
                        data.location = ($('#placeOfMeeting').val());
                    }
                    //  data.location=($('#placeOfMeeting').val());
                    data.agenda = ($('#agenda').val());
                    data.outcome = ($('#outcome').val());
                    data.keyAccomplishment = ($('#accomplishment').val());
                    //data.keyLearning=($("input[name='connection']:checked").val());
                    var connect = $("input[name='connection']:checked").val();
                    // var connection = {};
                    // if (connect == 'yes') {
                    //     connection.connectedTo = $('#connectedTo').val();
                    //     connection.purpose = $('#purpose').val();

                    // }

                    // else {
                    //     connection.connectedTo = "nil";
                    //     connection.purpose = "nil";
                    // }
                    // data.newConnection = JSON.stringify(connection);

                    data.keyLearning = ($('#learnings').val());

                    var challenge = $("input[name='challengesMentee']:checked").val();

                    if (challenge == 'yes') {
                        data.menteeChallenges = $('#challengesDetailMenteeText').val();

                    }
                    else {
                        data.menteeChallenges = "No";

                    }

                    var challenge1 = $("input[name='challengesMentor']:checked").val();

                    if (challenge1 == 'yes') {
                        data.mentorChallenges = $('#challengesDetailMentorText').val();

                    }
                    else {
                        data.mentorChallenges = "No";

                    }

                    var challenge1 = $("input[name='challengesVolunteer']:checked").val();

                    if (challenge1 == 'yes') {
                        data.volunteerChallenges = $('#challengesDetailVolunteerText').val();

                    }
                    else {
                        data.volunteerChallenges = "No";

                    }
                    if ((education.value > 8) || (education.value < 3)) {

                    }
                    var id = localStorage.getItem("user");
                    var review = {};
                    
                    // $('.education').slider().on('slideStart', function (ev) {
                    //     var newVal = $('.education').data('slider').getValue();
                    //     if (newVal>9 || newVal<3) {
                    //         $(".com1").removeClass("hide");
                    //     }
                    // });
                    review.education = education.value;
                    review.educationText = ($('#reviewcom1').val()).trim();
                    review.health = health.value;
                    review.healthText = ($('#reviewcom2').val()).trim();
                    review.familyRelationship = familyRelationship.value;
                    review.familyRelationshipText = ($('#reviewcom3').val()).trim();
                    review.friendRelationship = friendRelationship.value;
                    review.friendRelationshipText = ($('#reviewcom4').val()).trim();
                    review.positiveAttitude = positiveAttitude.value;
                    review.positiveAttitudeText = ($('#reviewcom5').val()).trim();
                    review.coCurricular = coCurricular.value;
                    review.coCurricularText = ($('#reviewcom6').val()).trim();
                    review.socialCommunity = socialCommunity.value;
                    review.socialCommunityText = ($('#reviewcom7').val()).trim();
                    review.safeFeel = safeFeel.value;
                    review.safeFeelText = ($('#reviewcom8').val()).trim();
                    review.socialInteraction = socialInteraction.value;
                    review.socialInteractionText = ($('#reviewcom9').val()).trim();
                    review.hygiene = hygiene.value;
                    review.hygieneText = ($('#reviewcom10').val()).trim();
                    data.review = JSON.stringify(review);
                    data.id = id;
                    httpPost("/tracker", data, function (response) {
                        $(".loading").addClass("hide");
                        $('#modalbody').append("Your Tracker details has been submitted for " + $('#date').val())
                        $('#trackerModal').modal({ backdrop: 'static', keyboard: false });


                    })
                }
                return true;
            },
            onPrevious: function (tab, navigation, index) {
                return validateTab(index + 1);
            },
            onTabShow: function (tab, navigation, index) {
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
        var fv = $('#trackerForm').data('formValidation'), // FormValidation instance
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
    });

    $("#education").slider();
    $("#education").on("slide", function (education) {

    });
    $("#health").slider();
    $("#health").on("slide", function (health) {

    });
    $("#familyRelationship").slider();
    $("#familyRelationship").on("slide", function (familyRelationship) {

    });

    $("#friendRelationship").slider();
    $("#friendRelationship").on("slide", function (friendRelationship) {

    });

    $("#positiveAttitude").slider();
    $("#positiveAttitude").on("slide", function (positiveAttitude) {

    });

    $("#coCurricular").slider();
    $("#coCurricular").on("slide", function (coCurricular) {

    });

    $("#socialCommunity").slider();
    $("#socialCommunity").on("slide", function (socialCommunity) {

    });

    $("#safeFeel").slider();
    $("#safeFeel").on("slide", function (safeFeel) {

    });

    $("#socialInteraction").slider();
    $("#socialInteraction").on("slide", function (socialInteraction) {

    });

    $("#hygiene").slider();
    $("#hygiene").on("slide", function (hygiene) {

    });


    memberscount = 0;


    // Add button click handler
    $('.addone').on('click', '.addButton', function () {
        memberscount++;

        var $template = $('#family'),
            $clone = $template
                .clone()
                .removeClass('hide')
                .removeAttr('id')

                .insertBefore($template);

        // Update the name attributes
        $clone
            .find('[name="connectedTo"]').attr('name', 'connectedTo-[' + memberscount + ']').end()
            .find('[name="purpose"]').attr('name', 'purpose-[' + memberscount + ']').end();



    })

    $(document).on('click', '.removeButton', function () {
        $(this).parents('.removeone').remove();
        // index = row.attr('data-book-index');
        memberscount--;

    });





});