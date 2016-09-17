$(document).ready(function () {
    // $('#role').change(function () {
    //     if ($('#role').val() == '1') {
    //         $('#volunteer').show();
    //         $('#mentor').hide();
    //         $('#volunteer1').show();
    //         $('#mentor1').hide();
    //         $('#mail').show();
    //         $('#mission').hide();
    //     }
    //     if ($('#role').val() == '2') {
    //         $('#mentor').show();
    //         $('#volunteer').hide();
    //         $('#mentor1').show();
    //         $('#volunteer1').hide();
    //         $('#mail').show();
    //         $('#mission').hide();
    //     }
    //     if ($('#role').val() == '') {
    //         $('#mentor').hide();
    //         $('#volunteer').hide();
    //         $('#mentor1').hide();
    //         $('#volunteer1').hide();
    //         $('#mail').hide();
    //         $('#mission').hide();
    //     }
    // });

    $('#work_type').change(function () {

        if ($('#work_type').val() == 'professional') {
            $('#proff').show();
        }
        else {
            $("#designation").val("");
            $("#organization").val("");
            $("#area_of_expertise").val("");
            $('#proff').hide();
        }

    });
    function adjustIframeHeight() {
        var $body = $('body'),
            $iframe = $body.data('iframe.fv');
        if ($iframe) {
            // Adjust the height of iframe
            $iframe.height($body.height());
        }
    }

    $('#volunteerForm')
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
            //     name: {
            //         validators: {
            //             notEmpty: {
            //                 message: 'The name should not be empty'
            //             },
            //             regexp: {
            //                 regexp: /^[a-z\s]+$/i,
            //                 message: 'The name can consist of alphabetical characters and spaces only'
            //             }
            //         }

            //     },
            //     dob: {
            //         validators: {
            //             notEmpty: {
            //                 message: 'Enter your DOB'
            //             }
            //             // date: {
            //             //     message: 'The date is not valid',
            //             //    // format: 'YYYY/MM/DD',
            //             //     min: '2000/01/01',
            //             //     max: '2020/12/30'
            //             // }
            //         }
            //     },
            //     age: {
            //         validators: {
            //             greaterThan: {
            //                 value: 18,
            //                 message: 'Your age should be greater than 18'
            //             },
            //             lessThan: {
            //                 value: 100,
            //                 message: 'Still u are alive ??'
            //             },
            //             notEmpty: {
            //                 message: 'Enter your age'
            //             },
            //             integer: {
            //                 message: 'Enter valid age'
            //             }
            //         }
            //     },
            //     gender: {
            //         validators: {
            //             notEmpty: {
            //                 message: 'select your gender'
            //             }
            //         }
            //     },
            //     mobile_no: {
            //         validators: {
            //             notEmpty: {
            //                 message: 'Enter your mobile number'
            //             },
            //             integer: {
            //                 message: 'Enter valid number'
            //             }
            //         }
            //     },
            //    phone: {
            //         validators: {
            //             integer: {
            //                 message: 'Enter valid number'
            //             }
            //         }
            //     },
            //      code: {
            //         validators: {
            //             integer: {
            //                 message: 'Enter valid number'
            //             }
            //         }
            //     },
            //     email_id: {
            //         validators: {
            //             notEmpty: {
            //                 message: 'Enter your mail-id'
            //             }
            //         }
            //     },
            //     address_line1: {
            //         validators: {
            //             notEmpty: {
            //                 message: 'select your address'
            //             }
            //         }
            //     },
            //     address_line2: {
            //         validators: {
            //             notEmpty: {
            //                 message: 'select your street name'
            //             }
            //         }
            //     },
            //     city: {
            //         validators: {
            //             notEmpty: {
            //                 message: 'enter your city'
            //             }
            //         }
            //     },
            //     state: {
            //         validators: {
            //             notEmpty: {
            //                 message: 'select your state'
            //             }
            //         }
            //     },
            //     postal_code: {
            //         validators: {
            //             notEmpty: {
            //                 message: 'Enter your pin code'
            //             },
            //              integer: {
            //                 message: 'Enter valid number'
            //             }
            //         }
            //     },

            //     reference: {
            //         validators: {
            //             notEmpty: {
            //                 message: 'select your Point of Contact'
            //             }
            //         }
            //     },
            //     password: {
            //         validators: {
            //             notEmpty: {
            //                 message: 'Enter you password'
            //             },
            //             callback: {
            //                 message: 'The password is not valid',
            //                 callback: function (value, validator, $field) {
            //                     if (value === '') {
            //                         return true;
            //                     }

            //                     // Check the password strength
            //                     if (value.length < 8) {
            //                         return {
            //                             valid: false,
            //                             message: 'It must be more than 8 characters long'
            //                         };
            //                     }

            //                     // The password doesn't contain any uppercase character
            //                     if (value === value.toLowerCase()) {
            //                         return {
            //                             valid: false,
            //                             message: 'It must contain at least one upper case character'
            //                         }
            //                     }

            //                     // The password doesn't contain any uppercase character
            //                     if (value === value.toUpperCase()) {
            //                         return {
            //                             valid: false,
            //                             message: 'It must contain at least one lower case character'
            //                         }
            //                     }

            //                     // The password doesn't contain any digit
            //                     if (value.search(/[0-9]/) < 0) {
            //                         return {
            //                             valid: false,
            //                             message: 'It must contain at least one digit'
            //                         }
            //                     }

            //                     return true;
            //                 }
            //             }
            //         }
            //     },
            //     cpassword: {
            //         validators: {
            //             notEmpty: {
            //                 message: 'Enter your password again'
            //             },
            //             identical: {
            //                 field: 'password',
            //                 message: 'The password and its confirm are not the same'
            //             }
            //         }
            //     },
            //     commitment: {
            //         validators: {
            //             notEmpty: {
            //                 message: 'Enter your commitment'
            //             }
            //         }
            //     },
            //     // cv: {
            //     //     validators: {
            //     //         notEmpty: {
            //     //             message: 'Upload your cv'
            //     //         }
            //     //     }
            //     // },
            //     // photo: {
            //     //     validators: {
            //     //         notEmpty: {
            //     //             message: 'Upload your photo'
            //     //         }
            //     //     }
            //     // },
            //     work_type: {
            //         validators: {
            //             notEmpty: {
            //                 message: 'Enter you work type'
            //             }
            //         }
            //     }, designation: {
            //         validators: {
            //             notEmpty: {
            //                 message: 'Enter your designation'
            //             }
            //         }
            //     },
            //     organization: {
            //         validators: {
            //             notEmpty: {
            //                 message: 'Enter your organization'
            //             }
            //         }
            //     },
            //     area_of_expertise: {
            //         validators: {
            //             notEmpty: {
            //                 message: 'Enter your expertise'
            //             }
            //         }
            //     },
            //     experience: {
            //         validators: {
            //             notEmpty: {
            //                 message: 'Enter your experience'
            //             }
            //         }
            //     },

            //     course: {
            //         validators: {
            //             notEmpty: {
            //                 message: 'Enter your course'
            //             }
            //         }
            //     },
            //     department: {
            //         validators: {
            //             notEmpty: {
            //                 message: 'Enter your department'
            //             }
            //         }
            //     },
            //     institution: {
            //         validators: {
            //             notEmpty: {
            //                 message: 'Enter your institution'
            //             }
            //         }
            //     }
            }
        })
        .bootstrapWizard({
            tabClass: 'nav nav-pills',
            onTabClick: function (tab, navigation, index) {
                return validateTab(index);
            },
            onNext: function (tab, navigation, index) {
                var numTabs = $('#volunteerForm').find('.tab-pane').length,
                    isValidTab = validateTab(index - 1);
                if (!isValidTab) {
                    return false;
                }
                if (index === numTabs) {
                    var url= window.location.href;
                    var role = url.substring(url.lastIndexOf(':')+1);
                    var data = {};
                   
                    data.role = role;
                    console.log(data.role);
                    alert(data.role);
                    data.name = $('#name').val();
                    data.dob = $('#dob').val();
                    data.age = $('#age').val();
                    data.gender = $("input[name='gender']:checked").val();
                    data.course = $('#course').val();
                    data.department = $('#department').val();
                    data.work_type = $('#work_type').val();
                    data.institution = $('#institution').val();
                    data.address_line1 = $('#address_line1').val();
                    data.address_line2 = $('#address_line2').val();
                    data.city = $('#city').val();
                    data.state = $('#state').val();
                    data.country = $('#country').val();
                    data.postal_code = $('#postal_code').val();
                    data.code = $('#code').val();
                    data.mobile_no = $('#mobile_no').val();
                    data.phone = $('#phone').val();
                    data.email_id = $('#email_id').val();
                    data.designation = $('#designation').val();
                    data.organization = $('#organization').val();
                    data.area_of_expertise = $('#area_of_expertise').val();
                    data.experience = $('#experience').val();
                    data.password = $('#password').val();
                    data.reference = $('#reference').val();
                    data.commitment = $('#commitment').val();
                    data.cv = $('#cv').val();
                    data.photo = $('#photo').val();
                    console.log(data.address_line1);
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
                        alert( JSON.stringify(response));
                    });
                }
                return true;
            },
            onPrevious: function (tab, navigation, index) {
                return validateTab(index + 1);
            },
            onTabShow: function (tab, navigation, index) {
                // Update the label of Next button when we are at the last tab
                var numTabs = $('#volunteerForm').find('.tab-pane').length;
                $('#volunteerForm')
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
        var fv = $('#volunteerForm').data('formValidation'), // FormValidation instance
            // The current tab
            $tab = $('#volunteerForm').find('.tab-pane').eq(index);

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