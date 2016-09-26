$(document).ready(function () {


    $('#work_type').change(function () {

        if ($('#work_type').val() == 'professional') {
            $('#proff').show();
        }
        else {
            $("#designation").val("");
            $("#organization").val("");
            $("#area_of_expertise").val("");
            $("#experience").val("");
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

    $('#registrationForm')
        .formValidation({
            framework: 'bootstrap',
            // icon: {
            //     valid: 'glyphicon glyphicon-ok',
            //     invalid: 'glyphicon glyphicon-remove',
            //     validating: 'glyphicon glyphicon-refresh'
            // },
            // This option will not ignore invisible fields which belong to inactive panels
            // excluded: ':disabled',
            fields: {
                role: {
                    validators: {
                        notEmpty: {
                            message: localization.name[lang()]
                        }
                    }
                },
                name: {
                    validators: {
                        notEmpty: {
                            message: localization.name[lang()]
                        },
                        regexp: {
                            regexp: /^[a-z\s]+$/i,
                            message: localization.validname[lang()]
                        }
                    }

                },
                dob: {
                    validators: {
                        notEmpty: {
                            message: localization.dob[lang()]
                        }
                        // date: {
                        //     message: localization.validdob[lang()],
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
                            message: localization.lesserage[lang()]
                        },
                        lessThan: {
                            value: 100,
                            message: localization.greaterage[lang()]
                        },
                        notEmpty: {
                            message: localization.age[lang()]
                        },
                        integer: {
                            message: localization.validno[lang()]
                        }
                    }
                },
                gender: {
                    validators: {
                        notEmpty: {
                            message: localization.gender[lang()]
                        }
                    }
                },
                mobile_no: {
                    validators: {
                        notEmpty: {
                            message: localization.mobile_no[lang()]
                        },
                        integer: {
                            message: localization.validno[lang()]
                        }
                    }
                },
                phone: {
                    validators: {
                        integer: {
                            message: localization.validno[lang()]
                        }
                    }
                },
                code: {
                    validators: {
                        integer: {
                            message: localization.validno[lang()]
                        }
                    }
                },
                email_id: {
                    validators: {
                        notEmpty: {
                            message: localization.username[lang()]
                        }
                    }
                },
                address_line1: {
                    validators: {
                        notEmpty: {
                            message: localization.address_line1[lang()]
                        }
                    }
                },
                address_line2: {
                    validators: {
                        notEmpty: {
                            message: localization.address_line2[lang()]
                        }
                    }
                },
                city: {
                    validators: {
                        notEmpty: {
                            message: localization.city[lang()]
                        }
                    }
                },
                state: {
                    validators: {
                        notEmpty: {
                            message: localization.state[lang()]
                        }
                    }
                },
                postal_code: {
                    validators: {
                        notEmpty: {
                            message: localization.postal_code[lang()]
                        },
                        integer: {
                            message: localization.validno[lang()]
                        }
                    }
                },

                reference: {
                    validators: {
                        notEmpty: {
                            message: localization.reference[lang()]
                        }
                    }
                },
                password: {
                    validators: {
                        notEmpty: {
                            message: localization.password[lang()]
                        },
                        callback: {
                            message: 'The password is not valid',
                            callback: function (value, validator, $field) {
                                if (value === '') {
                                    return true;
                                }

                                // Check the password strength
                                if (value.length < 8) {
                                    return {
                                        valid: false,
                                        message: localization.psstr[lang()]
                                    };
                                }

                                // The password doesn't contain any uppercase character
                                if (value === value.toLowerCase()) {
                                    return {
                                        valid: false,
                                        message: localization.psupper[lang()]
                                    }
                                }

                                // The password doesn't contain any uppercase character
                                if (value === value.toUpperCase()) {
                                    return {
                                        valid: false,
                                        message: localization.pslower[lang()]
                                    }
                                }

                                // The password doesn't contain any digit
                                if (value.search(/[0-9]/) < 0) {
                                    return {
                                        valid: false,
                                        message: localization.psdigit[lang()]
                                    }
                                }

                                return true;
                            }
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
                commitment: {
                    validators: {
                        notEmpty: {
                            message: localization.commitment[lang()]
                        }
                    }
                },
                // cv: {
                //     validators: {
                //         notEmpty: {
                //             message: localization.cv[lang()]
                //         }
                //     }
                // },
                // photo: {
                //     validators: {
                //         notEmpty: {
                //             message: localization.photo[lang()]
                //         }
                //     }
                // },
                work_type: {
                    validators: {
                        notEmpty: {
                            message: localization.work_type[lang()]
                        }
                    }
                }, designation: {
                    validators: {
                        notEmpty: {
                            message: localization.designation[lang()]
                        }
                    }
                },
                organization: {
                    validators: {
                        notEmpty: {
                            message: localization.organization[lang()]
                        }
                    }
                },
                area_of_expertise: {
                    validators: {
                        notEmpty: {
                            message: localization.area_of_expertise[lang()]
                        }
                    }
                },
                experience: {
                    validators: {
                        notEmpty: {
                            message: localization.experience[lang()]
                        }
                    }
                },

                course: {
                    validators: {
                        notEmpty: {
                            message: localization.course[lang()]
                        }
                    }
                },
                department: {
                    validators: {
                        notEmpty: {
                            message: localization.department[lang()]
                        }
                    }
                },
                institution: {
                    validators: {
                        notEmpty: {
                            message: localization.institution[lang()]
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
                var numTabs = $('#registrationForm').find('.tab-pane').length,
                    isValidTab = validateTab(index - 1);
                if (!isValidTab) {
                    return false;
                }
                if (index === numTabs) {
                    var data = {};
                    data.role = ($('#role').val()).trim();
                    data.name = ($('#name').val()).trim();
                    data.dob = ($('#dob').val()).trim();
                    data.age = ($('#age').val()).trim();
                    data.gender = ($("input[name='gender']:checked").val()).trim();
                    data.course = ($('#course').val()).trim();
                    data.department = ($('#department').val()).trim();
                    data.institution = ($('#institution').val()).trim();
                    data.address_line1 = ($('#address_line1').val()).trim();
                    data.address_line2 = ($('#address_line2').val()).trim();
                    data.city = ($('#city').val()).trim();
                    data.state = ($('#state').val()).trim();
                    data.country = ($('#country').val()).trim();
                    data.postal_code = ($('#postal_code').val()).trim();
                    data.code = ($('#code').val()).trim();
                    data.mobile_no = ($('#mobile_no').val()).trim();
                    data.phone = ($('#phone').val()).trim();
                    data.email_id = ($('#email_id').val()).trim();
                    data.work_type = ($('#work_type').val()).trim();
                    data.designation = ($('#designation').val()).trim();
                    data.organization = ($('#organization').val()).trim();
                    data.area_of_expertise = ($('#area_of_expertise').val()).trim();
                    data.experience = ($('#experience').val()).trim();
                    data.password = ($('#password').val()).trim();
                    data.reference = ($('#reference').val()).trim();
                    data.commitment = ($('#commitment').val()).trim();
                    data.cv = $('#cv').val();
                    data.photo = $('#photo').val();
                    httpPost("/registration", data, function (response) {
                        alert(JSON.stringify(response));
                        alert("Successfully completed");
                    });
                }
                return true;
            },
            onPrevious: function (tab, navigation, index) {
                return validateTab(index + 1);
            },
            onTabShow: function (tab, navigation, index) {
                // Update the label of Next button when we are at the last tab
                var numTabs = $('#registrationForm').find('.tab-pane').length;
                $('#registrationForm')
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
        var fv = $('#registrationForm').data('formValidation'), // FormValidation instance
            // The current tab
            $tab = $('#registrationForm').find('.tab-pane').eq(index);

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