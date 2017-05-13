$(document).ready(function () {

    var session = localStorage.getItem("user");
    if (session == null) {
        window.location.href = "../../../../index.html";
    }
    else {
        var isValid = $('#childForm')
            .formValidation({
                framework: 'bootstrap',
                // icon: {
                //     valid: 'glyphicon glyphicon-ok',
                //     invalid: 'glyphicon glyphicon-remove',
                //     validating: 'glyphicon glyphicon-refresh'
                // },
                // This option will not ignore invisible fields which belong to inactive panels
                //excluded: ':disabled',
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

                                    // The password doesn't contain any lowercase character
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
            }).on('success.field.fv', function (e, data) {
                console.log(data.fv.getInvalidFields().length);
                if (data.fv.getInvalidFields().length > 0) {    // There is invalid field
                    $('#submit').prop("disabled", true);
                }
                else {
                    $('#submit').prop("disabled", false);
                }
            });

        $("#dob").datepicker({

            dateFormat: 'dd-mm-yy',
            maxDate: new Date, minDate: new Date(1960, 1, 12)
        });

        $("#dob").change(function () {
            var str = $('#dob').val();
            var dateObj = new Date(str);
            var cur = new Date();
            var diff = cur - dateObj;
            var age = Math.floor(diff / 31536000000);
            $('#age').val(age);
        });
        $("#childForm").submit(function (e) {
            e.preventDefault();
        });



        // document.addEventListener("deviceready", onDeviceReady, false);
        // function onDeviceReady() {
        //     pictureSource = navigator.camera.PictureSourceType;
        //     destinationType = navigator.camera.DestinationType;
        // }

        // function getImage() {
        //     navigator.camera.getPicture(uploadPhoto, function (message) {
        //         alert('get picture failed');
        //     }, {
        //             quality: 100,
        //             destinationType: navigator.camera.DestinationType.FILE_URI,
        //             sourceType: navigator.camera.PictureSourceType.PHOTOLIBRARY
        //         });
        // }

        // function uploadPhoto(imageURI) {
        //     var options = new FileUploadOptions();
        //     options.fileKey = "file";
        //     options.fileName = imageURI.substr(imageURI.lastIndexOf('/') + 1);
        //     options.mimeType = "image/jpeg";
        //     console.log(options.fileName);
        //     var params = new Object();
        //     params.value1 = "test";
        //     params.value2 = "param";
        //     options.params = params;
        //     options.chunkedMode = false;

        //     var ft = new FileTransfer();
        //     ft.fileUpload(imageURI, "/childphoto", function (result) {
        //         console.log(JSON.stringify(result));
        //     }, function (error) {
        //         console.log(JSON.stringify(error));
        //     }, options);
        // }

        $("#submit").click(function () {
            var isValidForm = $('#childForm').data('formValidation').isValid();
            if (!isValidForm) {
                return;
            }
            // getImage();
            // function uploadPhoto(imageURI) {
            //     var options = new FileUploadOptions();
            //     options.fileKey = "file";
            //     options.fileName = imageURI.substr(imageURI.lastIndexOf('/') + 1);
            //     options.mimeType = "image/jpeg";
            //     console.log(options.fileName);
            //     var params = new Object();
            //     params.value1 = "test";
            //     params.value2 = "param";
            //     options.params = params;
            //     options.chunkedMode = false;

            //     var ft = new FileTransfer();
            //     ft.fileUpload(imageURI, "/childphoto", function (result) {
            //         console.log(JSON.stringify(result));
            //     }, function (error) {
            //         console.log(JSON.stringify(error));
            //     }, options);
            // }

            var formData = new FormData();
            formData.append('file', $('#file')[0].files[0]);

            $(".loading").removeClass("hide");
            $("#blockreg2").addClass("hide");

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
                data.gender = $("input[name='gender']:checked").val();
                data.user_id = user_id;
                data.password = ($('#password').val()).trim();
                data.center = ($('#center').val()).trim();
                data.photos = response;

                httpPost("/childrenregistration", data, function (response) {

                    $('#registerModal').modal({ backdrop: 'static', keyboard: false });

                });
            });
        });

    }
});