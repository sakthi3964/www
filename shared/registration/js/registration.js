$(document).ready(function () {
    $('#role').change(function () {
        if ($('#role').val() == '') {
            $('#mission').show();
            $('#volunteer').hide();
            $('#mentor').hide();
        }
        else if ($('#role').val() == 'volunteer') {
            $('#mission').hide();
            $('#volunteer').show();
            $('#mentor').hide();
        }
        else if ($('#role').val() == 'mentor') {
            $('#mission').hide();
            $('#volunteer').hide();
            $('#mentor').show();
        }
    });
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

    $("#dob").change(function () {
        var str = $('#dob').val();
        var dateObj = new Date(str);
        var cur = new Date();
        var diff = cur - dateObj;
        var age = Math.floor(diff / 31536000000);
        $('#age').val(age);
    });


    var url = window.location.href;
    var edit = url.substring(url.lastIndexOf('?') + 1);
    if (edit != "edit") {
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
                            numeric: {
                                message: localization.validno[lang()]
                            }
                        }
                    },
                    code: {
                        validators: {
                            numeric: {
                                message: 'Invalid number'
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
                            },
                            regexp: {
                                regexp: /^[a-z\s]+$/i,
                                message: localization.validname[lang()]
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
                    cv: {
                        selector: '.cv',
                        validators: {
                            notEmpty: {
                                message: localization.cv[lang()]
                            },
                            file: {
                                extension: 'doc,pdf',
                                type: 'application/msword,application/pdf',
                                maxSize: 5 * 1024 * 1024,   // 5 MB
                                message: 'The selected file is not valid'
                            }
                        }
                    },
                    photo: {
                        selector: '.photo',
                        validators: {
                            notEmpty: {
                                message: localization.photo[lang()]
                            },
                            file: {
                                extension: 'jpeg,png,jpg',
                                type: 'image/jpeg,image/jpg,image/png',
                                maxSize: 2048 * 1024,   // 2 MB
                                message: 'The selected file is not valid'
                            }
                        }
                    },
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
                        var role = ($('#role').val()).trim();
                        var formData = new FormData();
                        formData.append("role", role);
                        $.each($("input[type=file]"), function (i, obj) {
                            $.each(obj.files, function (j, file) {
                                formData.append('photo', file, file.name);
                            })
                        });
                        fileUpload("/addfiles", formData, function (response) {
                            var res = JSON.parse(response);
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
                            data.cv = res.cv;
                            data.photo = res.photo;
                            $("#emailidpresent").hide();
                            $("#mobilepresent").hide();
                            httpPost("/registration", data, function (response) {
                                console.log("responsewithzero" + response[0]);
                                console.log("kdhfskdhf" + response.emailidpresent);
                                if (response.emailidpresent == 1 && response.mobileidpresent == 1) {
                                    $("#emailidpresent").show();
                                    $("#mobilepresent").show();
                                    $("#emailidpresent").html("email id already exit");
                                    $("#mobilepresent").html("mobile no already exit");
                                    return $('#myTab a[href="#secondtab"]').tab('show');
                                }
                                else if (response.emailidpresent == 1) {
                                    $("#emailidpresent").show();
                                    $("#mobilepresent").hide();
                                    $("#emailidpresent").html("email id already exit");
                                    return $('#myTab a[href="#secondtab"]').tab('show');
                                }
                                else if (response.mobilenopresent == 1) {
                                    $("#emailidpresent").hide();
                                    $("#mobilepresent").show();
                                    $("#mobilepresent").html("mobile no already exit");
                                    return $('#myTab a[href="#secondtab"]').tab('show');
                                }
                                else
                                    // $('#registerModal').modal();
                                    $('#registerModal').modal({ backdrop: 'static', keyboard: false });
                            });


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

    }
    else {
        var data = {};
        var id = localStorage.getItem("user");

        data.id = id;
        httpPost("/editreturn", data, function (response) {
            radiobtn = response[0].gender;
            if (radiobtn == 'male') {
                document.forms["registrationForm"]["male"].checked = true;
            }
            else {
                document.forms["registrationForm"]["female"].checked = true;
            }
            document.getElementById("name").value = response[0].name;
            document.getElementById("role").value = response[0].role;
            console.log(response[0].role);
            document.getElementById("age").value = response[0].age;
            var dob = response[0].dob;
            console.log(response[0].dob);
            // function changeDateFormat(inputDate) {  // expects Y-m-d
            //     var splitDate = inputDate.split('-');
            //     if (splitDate.count == 0) {
            //         return null;
            //     }

            //     var year = splitDate[0];
            //     var month = splitDate[1];
            //     var day = splitDate[2];

            //     return day[0] + '\\' + month + '\\' + year;
            // }
            function format(inputDate) {
                var date = new Date(inputDate);
                if (!isNaN(date.getTime())) {
                    // Months use 0 index.
                    return date.getDate() + '-' + date.getMonth() + 1 + '-' + date.getFullYear();
                }
            }

            var inputDate = dob;
            var newDate = format(inputDate);
            console.log(newDate);
            document.getElementById("dob").value = newDate;
            document.getElementById("mobile_no").value = response[0].mobile_no;
            document.getElementById("code").value = response[0].code;
            document.getElementById("phone").value = response[0].phone;
            document.getElementById("address_line1").value = response[0].address_line1;
            document.getElementById("address_line2").value = response[0].address_line2;
            document.getElementById("city").value = response[0].city;
            document.getElementById("state").value = response[0].state;
            document.getElementById("postal_code").value = response[0].postal_code;
            document.getElementById("country").value = response[0].country;
            console.log(response[0].country);
            document.getElementById("email_id").value = response[0].email_id;
            document.getElementById("password").value = response[0].password;
            document.getElementById("cpassword").value = response[0].cpassword;
            document.getElementById("course").value = response[0].profileinfo.course;
            document.getElementById("department").value = response[0].profileinfo.department;
            document.getElementById("institution").value = response[0].profileinfo.institution;
            document.getElementById("designation").value = response[0].profileinfo.designation;
            document.getElementById("organization").value = response[0].profileinfo.organization;
            document.getElementById("work_type").value = response[0].profileinfo.work_type;
            document.getElementById("area_of_expertise").value = response[0].profileinfo.area_of_expertise;
            document.getElementById("experience").value = response[0].profileinfo.experience;
            document.getElementById("commitment").value = response[0].profileinfo.commitment;
            document.getElementById("reference").value = response[0].profileinfo.reference;
            // document.getElementById("file").value = response[0].file;
            document.getElementById("password").disabled = true;
            document.getElementById("cpassword").disabled = true;
            document.getElementById("email_id").disabled = true;
            $('#file1').hide();
            $('#cv1').hide();


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
                    // role: {
                    //     validators: {
                    //         notEmpty: {
                    //             message: localization.name[lang()]
                    //         }
                    //     }
                    // },
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
                            numeric: {
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
                    cv: {
                        validators: {
                            notEmpty: {
                                message: localization.cv[lang()]
                            }
                        }
                    },
                    photo: {
                        validators: {
                            notEmpty: {
                                message: localization.photo[lang()]
                            }
                        }
                    },
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
                        var role = $('#role').val();
                        var formData = new FormData();
                        formData.append("role", role);
                        // $.each($("input[type=file]"), function (i, obj) {
                        //     $.each(obj.files, function (j, file) {
                        //         formData.append('photo', file, file.name);
                        //     })
                        // });
                        // fileUpload("/addfiles", formData, function (response) {
                        // var res = JSON.parse(response);
                        var data = {};
                        var id = localStorage.getItem("user");
                        data.id = id;
                        console.log(data.id);
                        data.role = $('#role').val();
                        data.name = ($('#name').val()).trim();
                        data.dob = ($('#dob').val()).trim();
                        console.log(data.dob);
                        console.log(new Date(data.dob));
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
                        // data.cv = res.cv;
                        // data.photo = res.photo;
                        httpPost("/editupdate", data, function (response) {
                            $('#editmodal').modal({ backdrop: 'static', keyboard: false });
                        });
                        // });


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

    }

});