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
                            message: 'The name should not be empty'
                        }
                    }
                },

                dob: {
                    validators: {
                        notEmpty: {
                            message: 'Enter your DOB'
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
                            message: 'Your age should be greater than 18'
                        },
                        lessThan: {
                            value: 18,
                            message: 'Sorry, The age should be 12 to 18'
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
                            message: 'select child gender'
                        }
                    }
                },
                center: {
                    validators: {
                        notEmpty: {
                            message: 'select child center'
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
        var role = 1;
        var str = $('#email_id').val();
        var domain = $('#domain').val();
        var email_id = str.concat(domain);
        alert(email_id);
        data.role = role;
        data.name = $('#name').val();
        data.dob = $('#dob').val();
        data.age = $('#age').val();
        data.gender = $("input[name='gender']:checked").val();
        alert(data.gender);
        data.address = $('#address').val();
        data.email_id = email_id;
        data.password = $('#password').val();
        data.center = $('#center').val();

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
            alert("successfully inserted");
        });
    })
});