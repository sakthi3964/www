$(document).ready(function () {
    $("#dob").change(function () {
        var str = $('#dob').val();
        var dateObj = new Date(str);
        var cur = new Date();
        var diff = cur - dateObj;
        var age = Math.floor(diff / 31536000000);
        $('#age').val(age);
    });



    $('#childForm')
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
                            message: localization.name[lang()]
                        }
                    }
                },

                dob: {
                    validators: {
                        notEmpty: {
                            message: localization.dob[lang()]
                        },
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
                            value: 12,
                            message: localization.childlesserage[lang()]
                        },
                        lessThan: {
                            value: 18,
                            message: localization.childgreaterage[lang()]
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
                center: {
                    validators: {
                        notEmpty: {
                            message: localization.name[lang()]
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
                user_id: {
                    validators: {
                        notEmpty: {
                            message: localization.name[lang()]
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
                }

            }
        });
    $("#childForm").submit(function (e) {
        e.preventDefault();
    });
    $("#submit").click(function () {
        var formData = new FormData();
        formData.append('file', $('#file')[0].files[0]);
        fileUpload("/childphoto", formData, function (response) {
            var data = {};
            var role = 3;
            var str = ($('#user_id').val()).trim();
            var domain = ($('#domain').val()).trim();
            var user_id = str.concat(domain);
            data.role = role;
            data.name = ($('#name').val()).trim();
            data.dob = ($('#dob').val()).trim();
            data.age = ($('#age').val()).trim();
            data.gender = ($("input[name='gender']:checked").val()).trim();
            data.user_id = user_id;
            data.password = ($('#password').val()).trim();
            data.center = ($('#center').val()).trim();
            data.photos = response;
            httpPost("/childrenregistration", data, function (response) {
                $('#registerModal').modal();
            });
        });
    });
});