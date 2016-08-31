$(document).ready(function () {
    function adjustIframeHeight() {
        var $body = $('body'),
            $iframe = $body.data('iframe.fv');
        if ($iframe) {
            // Adjust the height of iframe
            $iframe.height($body.height());
        }
    }
    $('#mentorForm')
        .formValidation({
            framework: 'bootstrap',
            // icon: {
            //     valid: 'glyphicon glyphicon-ok',
            //     invalid: 'glyphicon glyphicon-remove',
            //     validating: 'glyphicon glyphicon-refresh'
            // },
            // This option will not ignore invisible fields which belong to inactive panels
            excluded: ':disabled',
            fields: {
                name: {
                    validators: {
                        notEmpty: {
                            message: 'The name should not be empty'
                        }
                    }
                },
                dob: {
                    validators: {
                        notEmpty: {
                            message: 'Enter your DOB'
                        }
                        // date: {
                        //     message: 'The date is not valid',
                        //    // format: 'YYYY/MM/DD',
                        //     min: '2000/01/01',
                        //     max: '2020/12/30'
                        // }
                    }
                },
                age: {
                    validators: {
                        greaterThan: {
                            value: 18,
                            message: 'Your age should be greater than 18'
                        },
                        lessThan: {
                            value: 100,
                            message: 'Still u are alive ??'
                        },
                        notEmpty: {
                            message: 'Enter your age'
                        },
                        integer: {
                            message: 'Enter valid age'
                        }
                    }
                },
                gender: {
                    validators: {
                        notEmpty: {
                            message: 'select your gender'
                        }
                    }
                },
                mobile_no: {
                    validators: {
                        notEmpty: {
                            message: 'Enter your mobile number'
                        },
                        integer: {
                            message: 'Enter valid number'
                        }
                    }
                },
                email_id: {
                    validators: {
                        notEmpty: {
                            message: 'Enter your mail-id'
                        }
                    }
                },
                reference: {
                    validators: {
                        notEmpty: {
                            message: 'select your Point of Contact'
                        }
                    }
                },
                password: {
                    validators: {
                        notEmpty: {
                            message: 'Enter your password'
                        }
                    }
                },
                cpassword: {
                    validators: {
                        notEmpty: {
                            message: 'Enter your password again'
                        },
                        identical: {
                            field: 'password',
                            message: 'The password and its confirm are not the same'
                        }
                    }
                },
                designation: {
                    validators: {
                        notEmpty: {
                            message: 'Enter your designation'
                        }
                    }
                },
                organization: {
                    validators: {
                        notEmpty: {
                            message: 'Enter your organization'
                        }
                    }
                },
                expertise: {
                    validators: {
                        notEmpty: {
                            message: 'Enter your expertise'
                        }
                    }
                },
                experience: {
                    validators: {
                        notEmpty: {
                            message: 'Enter you experience'
                        }
                    }
                },
                commitment: {
                    validators: {
                        notEmpty: {
                            message: 'Enter your commitment'
                        }
                    }
                },
                cv: {
                    validators: {
                        notEmpty: {
                            message: 'Upload your cv'
                        }
                    }
                },
                photo: {
                    validators: {
                        notEmpty: {
                            message: 'Upload your photo'
                        }
                    }
                },
            }
        })
        .bootstrapWizard({
            tabClass: 'nav nav-pills',
            onTabClick: function (tab, navigation, index) {
                return validateTab(index);
            },
            onNext: function (tab, navigation, index) {
                var numTabs = $('#mentorForm').find('.tab-pane').length,
                    isValidTab = validateTab(index - 1);
                if (!isValidTab) {
                    return false;
                }
                if (index === numTabs) {
                    var data = {};
                    var role = 3;
                    data.role = role;
                    data.name = $('#name').val();
                    data.dob = $('#dob').val();
                    data.age = $('#age').val();
                    data.gender = $("input[name='gender']:checked").val();
                    data.address = $('#address').val();
                    data.email_id = $('#email_id').val();
                    data.mobile_no = $('#mobile_no').val();
                    data.phone = $('#phone').val();
                    data.password = $('#password').val();
                    data.reference = $('#reference').val();
                    data.commitment = $('#commitment').val();
                    data.designation = $('#designation').val();
                    data.organization = $('#organization').val();
                    data.expertise = $('#expertise').val();
                    data.experience = $('#experience').val();
                    data.cv = $('#cv').val();
                    data.photo = $('#photo').val();
                    var settings = {
                        "async": true,
                        "crossDomain": true,
                        "url": "http://localhost:3406/registration",
                        "method": "POST",
                        "headers": {
                            "content-type": "application/json",
                        },
                        "processData": false,
                        "data": JSON.stringify(data),
                    }

                    $.ajax(settings).done(function (response) {
                        if (response == 3) {
                            alert("success");
                            // $('#errormodal').modal();
                            return false;
                        }
                    });
                }
                return true;
            },
            onPrevious: function (tab, navigation, index) {
                return validateTab(index + 1);
            },
            onTabShow: function (tab, navigation, index) {
                // Update the label of Next button when we are at the last tab
                var numTabs = $('#mentorForm').find('.tab-pane').length;
                $('#mentorForm')
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
        var fv = $('#mentorForm').data('formValidation'), // FormValidation instance
            // The current tab
            $tab = $('#mentorForm').find('.tab-pane').eq(index);

        // Validate the container
        fv.validateContainer($tab);

        var isValidStep = fv.isValidContainer($tab);
        // alert(isValidStep);
        // alert(index);
        if (isValidStep === false || isValidStep === null) {
            // Do not jump to the target tab
            return false;
        }

        return true;
    }
});