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
            // excluded: ':disabled',
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
               connectedTo: {
                   validators: {
                       notEmpty: {
                           message: 'Check, if there is any new connection'
                       }
                   }
               },
               
               purpose: {
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
               education: {
                   validators: {
                       notEmpty: {
                           message: 'Rank for Mentee education'
                       }
                   }
               }



                
                
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

                   // $('#completeModal').modal();
                   var data={};
                data.date=($('#date').val());
                   data.location=($('#placeOfMeeting').val());
                   data.agenda=console.log($('#agenda').val());
                   data.outcome=($('#outcome').val());
                   data.keyAccomplishment=($('#accomplishment').val());
                   data.keyLearning=($("input[name='connection']:checked").val());
                   var connect=$("input[name='connection']:checked").val();
                   var connection={};
                   if(connect=='yes')
                   {                       
                       connection.connectedTo=$('#connectedTo').val();
                       connection.purpose=$('#purpose').val();
                        
                   }
                   else{
                       connection.connectedTo="nil";
                       connection.purpose="nil";
                   }
                   data.newConnection = JSON.stringify(connection);
            
                        data.keyLearning=($('#learnings').val());
                        
                         var challenge=$("input[name='challengesMentee']:checked").val();
                   
                   if(challenge=='yes')
                   {                       
                       data.menteeChallenges=$('#challengesDetailMenteeText').val();
                     
                   }
                   else{
                        data.menteeChallenges="nil";
                       
                   }
                                     
                         var challenge1=$("input[name='challengesMentor']:checked").val();
                 
                   if(challenge1=='yes')
                   {                       
                       data.mentorChallenges=$('#challengesDetailMentorText').val();
                     
                   }
                   else
                   {
                        data.mentorChallenges="nil";
                       
                   }
                  
                       var challenge1=$("input[name='challengesVolunteer']:checked").val();
                   
                   if(challenge1=='yes')
                   {                       
                      data.volunteerChallenges=$('#challengesDetailVolunteerText').val();
                     
                   }
                   else
                   {
                        data.volunteerChallenges="nil";
                       
                   }
                   
                       var review={};
                       review.education=education.value;
                       review.educationText=$('#reviewcom1').val();
                        review.health=health.value;
                       review.healthText=$('#reviewcom2').val();
                       review.familyRelationship=familyRelationship.value;
                       review.familyRelationshipText=$('#reviewcom3').val();
                       review.friendRelationship=friendRelationship.value;
                       review.friendRelationshipText=$('#reviewcom4').val();
                       review.positiveAttitude=positiveAttitude.value;
                       review.positiveAttitudeText=$('#reviewcom5').val();
                       review.coCurricular=coCurricular.value;
                       review.coCurricularText=$('#reviewcom6').val();
                       review.socialCommunity=socialCommunity.value;
                        review.socialCommunityText=$('#reviewcom7').val();                    
                       review.safeFeel=safeFeel.value;
                        review.safeFeelText=$('#reviewcom8').val();
                       review.socialInteraction=socialInteraction.value;
                        review.socialInteractionText=$('#reviewcom9').val();
                       review.hygiene=hygiene.value;
                        review.hygieneText=$('#reviewcom10').val();
                      data.review = JSON.stringify(review);

                      var settings = {
                            "async": true,
                            "crossDomain": true,
                            "url": "http://localhost:3006/tracker",
                            "method": "POST",
                            "headers": {
                                "content-type": "application/json",
                            },
                            "processData": false,
                            "data": data,
                        }
                        // "data": JSON.stringify(data),
                        $.ajax(settings).done(function (response) {


                        });

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
    });

$("#education").slider();
$("#education").on("slide", function (education) {
	console.log("education:" + education.value);
   
});
$("#health").slider();
$("#health").on("slide", function (health) {
	console.log("health:" + health.value);
	
});
$("#familyRelationship").slider();
$("#familyRelationship").on("slide", function (familyRelationship) {
	console.log("familyRelationship:" + familyRelationship.value);
	
});

$("#friendRelationship").slider();
$("#friendRelationship").on("slide", function (friendRelationship) {
	console.log("friendRelationship:" + friendRelationship.value);
	
});

$("#positiveAttitude").slider();
$("#positiveAttitude").on("slide", function (positiveAttitude) {
	console.log("positiveAttitude:" + positiveAttitude.value);
	
});

$("#coCurricular").slider();
$("#coCurricular").on("slide", function (coCurricular) {
	console.log("coCurricular:" + coCurricular.value);
	
});

$("#socialCommunity").slider();
$("#socialCommunity").on("slide", function (socialCommunity) {
	console.log("socialCommunity:" + socialCommunity.value);
	
});

$("#safeFeel").slider();
$("#safeFeel").on("slide", function (safeFeel) {
	console.log("safeFeel:" + safeFeel.value);
	
});

$("#socialInteraction").slider();
$("#socialInteraction").on("slide", function (socialInteraction) {
	console.log("socialInteraction:" + socialInteraction.value);
	
});

$("#hygiene").slider();
$("#hygiene").on("slide", function (hygiene) {
	console.log("hygiene:" + hygiene.value);
	
});





});