$(document).ready(function () {
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
                        }
                    }
                },
                user_id: {
                    validators: {
                        notEmpty: {
                            message: localization.username[lang()]
                        }
                    }
                }

            }
        });
    $("#childForm").submit(function (e) {
        e.preventDefault();
    });
    $("#submit").click(function () {
        var data = {};
        var role = 3;
        var str = $('#user_id').val();
        var domain = $('#domain').val();
        var user_id = str.concat(domain);
        data.role = role;
        data.name = $('#name').val();
        data.dob = $('#dob').val();
        data.age = $('#age').val();
        data.gender = $("input[name='gender']:checked").val();
        data.user_id = user_id;
        data.password = $('#password').val();
        data.center = $('#center').val();
        httpPost("/childrenregistration", data, function (response) {
            alert("successfully registered");
        });
    })
});