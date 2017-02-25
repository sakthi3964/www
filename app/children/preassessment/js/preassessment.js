$(document).ready(function () {

    var session = localStorage.getItem("user");
    if (session == null) {
        window.location.href = "../../../../index.html";
    }
    else {
        $('#goal').change(function () {

            $('#specificfield').show();
        });

        $("input[name='effort']").click(function () {
            if ($("#effort1").is(":checked")) {
                $("#effortinp").show();
            } else {
                $("#effortinp").hide();
            }
        });
        $("input[name='familyfin']").click(function () {
            if ($("#familyfin1").is(":checked")) {
                $("#familyfininp").show();
            } else {
                $("#familyfininp").hide();
            }
        });
        $("input[name='orgfin']").click(function () {
            if ($("#orgfin1").is(":checked")) {
                $("#orgfininp").show();
            } else {
                $("#orgfininp").hide();
            }
        });
        $("input[name='neighbourfin']").click(function () {
            if ($("#neighbourfin1").is(":checked")) {
                $("#neighbourfininp").show();
            } else {
                $("#neighbourfininp").hide();
            }
        });
        $("input[name='teacherfin']").click(function () {
            if ($("#teacherfin1").is(":checked")) {
                $("#teacherfininp").show();
            } else {
                $("#teacherfininp").hide();
            }
        });

        $("#supportencouragenil").click(function () {
            $("#supportencouragefamily").prop("checked", false);
            $("#supportencouragefriends").prop("checked", false)
            $("#supportencourageneighbour").prop("checked", false)
            $("#supportencourageteachers").prop("checked", false)
        })

        $("input[name='housework']").click(function () {
            if ($("#houseworkyes").is(":checked")) {
                $("#houseworkinp").show();
            } else {
                $("#houseworkinp").hide();
            }
        });

        $("input[name='clubmember']").click(function () {
            if ($("#clubmemberyes").is(":checked")) {
                $("#clubnameinp").show();
            } else {
                $("#clubnameinp").hide();
            }
        });

        $("input[name='continuestudies']").click(function () {
            if ($("#continueno").is(":checked")) {
                $("#continueinp").show();
            } else {
                $("#continueinp").hide();
            }
        });

        $("input[name='safework']").click(function () {
            if ($("#safeworkno").is(":checked")) {
                $("#safeworkinp").show();
            } else {
                $("#safeworkinp").hide();
            }
        });

        $("input[name='job']").click(function () {
            if ($("#jobyes").is(":checked")) {
                $(".jobq").show();


            } else {
                $(".jobq").hide();
            }
        });

        $("input[name='safe']").click(function () {
            if ($("#safeno").is(":checked")) {
                $("#notfeelsafe").show();
            } else {
                $("#notfeelsafe").hide();
            }
        });

        $("input[name='safework']").click(function () {
            if ($("#safeworkno").is(":checked")) {
                $("#safeworkinp").show();
            } else {
                $("#safeworkinp").hide();
            }
        });

        $("input[name='addicted']").click(function () {
            if ($("#addictedyes").is(":checked")) {
                $("#addictedinp").show();
            } else {
                $("#addictedinp").hide();
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

        $('#PreassessmentForm')
            .formValidation({
                framework: 'bootstrap',
                // icon: {
                //     valid: 'glyphicon glyphicon-ok',
                //     invalid: 'glyphicon glyphicon-remove',
                //     validating: 'glyphicon glyphicon-refresh'
                // },
                // This option will not ignore invisible fields which belong to inactive panels


                fields: {


                    //individual validation textbox



                    // age1: {
                    //     selector: '.age',
                    //     validators: {
                    //         notEmpty: {
                    //             message: 'required'
                    //         }
                    //     }
                    // },




                    // //individual validation checkbox

                    // 'supportencourage[]': {
                    //     validators: {
                    //         choice: {
                    //             min: 1,
                    //             message: 'select this field'
                    //         }
                    //     }
                    // },



                    // //individual validation radiobutton

                    // addictionsmoke: {
                    //     selector: '.addictionsmoke',
                    //     validators: {
                    //         notEmpty: {
                    //             message: 'This field should not be empty'
                    //         }
                    //     }
                    // },
                    // addictionliquor: {
                    //     selector: '.addictionliquor',
                    //     validators: {
                    //         notEmpty: {
                    //             message: 'This field should not be empty'
                    //         }
                    //     }
                    // },
                    // addictiondrug: {
                    //     selector: '.addictiondrug',
                    //     validators: {
                    //         notEmpty: {
                    //             message: 'This field should not be empty'
                    //         }
                    //     }
                    // },
                    // childsupport: {
                    //     selector: '.childsupport',
                    //     validators: {
                    //         notEmpty: {
                    //             message: 'This field should not be empty'
                    //         }
                    //     }
                    // },
                    // safework: {
                    //     validators: {
                    //         notEmpty: {
                    //             message: 'This field should not be empty'
                    //         }
                    //     }
                    // },
                    // parentsgoal: {
                    //     validators: {
                    //         notEmpty: {
                    //             message: 'This field should not be empty'
                    //         }
                    //     }
                    // },
                    // addicted: {
                    //     validators: {
                    //         notEmpty: {
                    //             message: 'This field should not be empty'
                    //         }
                    //     }
                    // },
                    // familyfin: {
                    //     validators: {
                    //         notEmpty: {
                    //             message: 'This field should not be empty'
                    //         }
                    //     }
                    // },

                    // orgfin: {
                    //     validators: {
                    //         notEmpty: {
                    //             message: 'This field should not be empty'
                    //         }
                    //     }
                    // },

                    // neighbourfin: {
                    //     validators: {
                    //         notEmpty: {
                    //             message: 'This field should not be empty'
                    //         }
                    //     }
                    // },
                    // teacherfin: {
                    //     validators: {
                    //         notEmpty: {
                    //             message: 'This field should not be empty'
                    //         }
                    //     }
                    // },
                    // continuestudies: {
                    //     validators: {
                    //         notEmpty: {
                    //             message: 'This field should not be empty'
                    //         }
                    //     }
                    // },
                    // idea: {
                    //     validators: {
                    //         notEmpty: {
                    //             message: 'This field should not be empty'
                    //         }
                    //     }
                    // },
                    // effort: {
                    //     validators: {
                    //         notEmpty: {
                    //             message: 'This field should not be empty'
                    //         }
                    //     }
                    // },

                    // job: {
                    //     validators: {
                    //         notEmpty: {
                    //             message: 'This field should not be empty'
                    //         }
                    //     }
                    // },

                    // salary: {
                    //     validators: {
                    //         notEmpty: {
                    //             message: 'This field should not be empty'
                    //         }
                    //     }
                    // },
                    // work: {
                    //     validators: {
                    //         notEmpty: {
                    //             message: 'This field should not be empty'
                    //         }
                    //     }
                    // },
                    // listen: {
                    //     validators: {
                    //         notEmpty: {
                    //             message: 'This field should not be empty'
                    //         }
                    //     }
                    // },
                    // housework: {
                    //     validators: {
                    //         notEmpty: {
                    //             message: 'This field should not be empty'
                    //         }
                    //     }
                    // },

                    // nhelp: {
                    //     validators: {
                    //         notEmpty: {
                    //             message: 'This field should not be empty'
                    //         }
                    //     }
                    // },
                    // safe: {
                    //     validators: {
                    //         notEmpty: {
                    //             message: 'This field should not be empty'
                    //         }
                    //     }
                    // },
                    // friends: {
                    //     validators: {
                    //         notEmpty: {
                    //             message: 'This field should not be empty'
                    //         }
                    //     }
                    // },
                    // clubmember: {
                    //     validators: {
                    //         notEmpty: {
                    //             message: 'This field should not be empty'
                    //         }
                    //     }
                    // },
                    // events: {
                    //     validators: {
                    //         notEmpty: {
                    //             message: 'This field should not be empty'
                    //         }
                    //     }
                    // },
                    // continue: {
                    //     validators: {
                    //         notEmpty: {
                    //             message: 'This field should not be empty'
                    //         }
                    //     }
                    // },


                    // // supporttochild: {
                    // //     validators: {
                    // //         notEmpty: {
                    // //             message: 'select this field'
                    // //         }
                    // //     }
                    // // },


                    // //common validation textbox
                    // Text_All: {
                    //     selector: '.Text_All',
                    //     validators: {
                    //         notEmpty: {
                    //             message: 'This field should not be empty'
                    //         }
                    //     }
                    // },
                    // monthlyincome1: {
                    //     selector: '.monthlyincome',
                    //     validators: {
                    //         notEmpty: {
                    //             message: 'The monthlyincome should not be empty'
                    //         },
                    //         regexp: {
                    //             regexp: /^[0-9,]+$/i,
                    //         }
                    //     }
                    // },


                    // Text_Only: {
                    //     selector: '.Text_Only',
                    //     validators: {
                    //         notEmpty: {
                    //             message: 'This field should not be empty'
                    //         },
                    //         regexp: {
                    //             regexp: /^[a-z\s]+$/i,
                    //             message: 'The field can consist of alphabetical characters and spaces only'
                    //         }
                    //     }
                    // },
                    // //common validation dropdown
                    // Dropdown: {
                    //     validators: {
                    //         notEmpty: {
                    //             message: 'select this field'
                    //         }
                    //     }
                    // },

                }
            })
            .bootstrapWizard({
                tabClass: 'nav nav-pills',
                onTabClick: function (tab, navigation, index) {
                    return validateTab(index);
                },
                onNext: function (tab, navigation, index) {
                    var numTabs = $('#PreassessmentForm').find('.tab-pane').length,
                        isValidTab = validateTab(index - 1);
                    if (!isValidTab) {
                        return false;
                    }

                    if (index === numTabs) {


                        var data = {};
                        var insert = [];


                        var id = localStorage.getItem("user");
                        data.id = id;
                        data.standard = ($('#standard').val());
                        console.log(data.standard);
                        data.schooltype = ($('#schooltype').val());
                        console.log(data.schooltype);
                        data.schoolname = ($('#schoolname').val());
                        console.log("hellllloooooooo    " + data.schoolname);
                        data.housetype = ($('#housetype').val());
                        console.log(data.housetype);
                        data.goal1 = ($('#goal1').val());
                        data.goal2 = ($('#goal2').val());
                        data.goal3 = ($('#goal3').val());
                        data.goal4 = ($('#goal4').val());
                        data.goal5
                            = ($('#goal5').val());
                        data.parentswish = ($('#parentswish').val());
                        data.parentsgoal = ($("input[name='parentsgoal']:checked").val());
                        data.idea = ($("input[name='idea']:checked").val());
                        var effort = ($("input[name='effort']:checked").val());
                        //var effortobj = {};
                        if (effort == 'yes') {
                            data.effortval = $('#effortinp').val();


                        }
                        else {
                            data.effortval = "nil";

                        }



                        var familyfin = ($("input[name='familyfin']:checked").val());
                        //var effortobj = {};
                        if (familyfin == 'yes') {
                            data.familyfininp = $('#familyfininp').val();


                        }

                        else {
                            data.familyfininp = "nil";

                        }

                        var orgfin = ($("input[name='orgfin']:checked").val());
                        //var effortobj = {};
                        if (orgfin == 'yes') {
                            data.orgfininp = $('#orgfininp').val();


                        }

                        else {
                            data.orgfininp = "nil";

                        }

                        var neighbourfin = ($("input[name='neighbourfin']:checked").val());
                        //var effortobj = {};
                        if (neighbourfin == 'yes') {
                            data.neighbourfininp = $('#neighbourfininp').val();


                        }

                        else {
                            data.neighbourfininp = "nil";

                        }

                        var teacherfin = ($("input[name='teacherfin']:checked").val());
                        //var effortobj = {};
                        if (teacherfin == 'yes') {
                            data.teacherfininp = $('#teacherfininp').val();


                        }

                        else {
                            data.teacherfininp = "nil";

                        }
                        data.whomotivated = ($('#whomotivated').val());

                        data.job = ($("input[name='job']:checked").val());


                        data.whyjob = ($('#whyjob').val());
                        data.kindofjob = ($('#kindofjob').val());
                        data.jobincome = ($('#howmuchincome').val());

                        data.salary = ($("input[name='salary']:checked").val());
                        data.work = ($("input[name='work']:checked").val());

                        data.listen = ($("input[name='listen']:checked").val());
                        data.discussion = ($('#discussion').val());
                        data.expectationparents = ($('#expectationparents').val());


                        var safeinworkplace = ($("input[name='safework']:checked").val());

                        if (safeinworkplace == 'no') {
                            data.safeinwork = $('#safeworkinp').val();


                        }

                        else {
                            data.safeinwork = "no";

                        }
                        var housework = ($("input[name='housework']:checked").val());

                        if (housework == 'yes') {
                            data.houseworkinp = $('#houseworkinp').val();


                        }

                        else {
                            data.houseworkinp = "no";

                        }
                        data.addicted = ($("input[name='addicted']:checked").val());

                        data.nhelp = ($("input[name='nhelp']:checked").val());


                        var safe = ($("input[name='safe']:checked").val());
                        //var effortobj = {};
                        console.log("safe value" + safe);
                        if (safe == 'no') {
                            data.notfeelsafe = $('#notfeelsafe').val();


                        }
                        else {
                            data.notfeelsafe = "yes";

                        }

                        data.favsub = ($('#favsub').val());
                        data.difficultsub = ($('#difficultsub').val());
                        data.favsports = ($('#favsports').val());

                        data.friends = ($("input[name='friends']:checked").val());

                        var clubmember = ($("input[name='clubmember']:checked").val());
                        //var effortobj = {};
                        if (clubmember == 'yes') {
                            data.clubnameinp = $('#clubnameinp').val();


                        }

                        else {
                            data.clubnameinp = "no";

                        }
                        data.events = ($("input[name='events']:checked").val());

                        data.talents = ($('#talents').val());
                        data.supportfromtycl = ($('#supportfromtycl').val());
                        data.expectfromtycl = ($('#expectfromtycl').val());

                        var continuestudies = ($("input[name='continuestudies']:checked").val());
                        //var effortobj = {};
                        if (continuestudies == 'no') {
                            data.continueinp = $('#teacherfininp').val();


                        }

                        else {
                            data.continueinp = "yes";

                        }

                        data.favthing = ($('#favthing').val());
                        data.hatething = ($('#hatething').val());


                        data.help = ($("input[name='help']:checked").val());





                        //var effortobj = {};

                        //console.log(data.effort);
                        // console.log(effortobj.effortinp);



                        $('.supportencourage').each(function () {
                            if ($(this).is(":checked")) {
                                insert.push($(this).val());

                            }
                        });
                        insert = insert.toString();
                        data.checkbox1 = insert;
                        console.log("hi");
                        console.log(data.checkbox1);



                        data.details = [];
                        var name1;
                        var relation1;
                        var age1;
                        var occupation1;
                        var monthlyincome1;
                        var supporttochild1;
                        console.log(memberscount);
                        for (var i = 0; i <= memberscount; i++) {
                            name1 = "name-[" + i + "]";
                            relation1 = "relation-[" + i + "]";
                            console.log(name1);
                            age1 = "age-[" + i + "]";
                            monthlyincome1 = "monthlyincome-[" + i + "]";
                            occupation1 = "occupation-[" + i + "]";
                            supporttochild1 = "supporttochild-[" + i + "]";

                            var temp = {
                                "name": document.getElementsByName(name1)[0].value,
                                "relation": document.getElementsByName(relation1)[0].value,
                                "age": document.getElementsByName(age1)[0].value,
                                "monthlyincome": document.getElementsByName(monthlyincome1)[0].value,
                                "occupation": document.getElementsByName(occupation1)[0].value,
                                "supporttochild1": document.getElementsByName(supporttochild1)[0].value
                            };
                            data.details.push(temp);
                            

                        }

                        console.log(data.details);

                        // data.relation = [];
                        // data.age = [];
                        // data.monthlyincome = [];
                        // data.occupation = [];
                        // data.supporttochild = [];
                        // var name1;
                        // var relation1;
                        // var age1;
                        // var occupation1;
                        // var monthlyincome1;
                        // var supporttochild1;
                        // console.log(memberscount);
                        // for (var i = 0; i <= memberscount; i++) {
                        //     name1 = "name-[" + i + "]";
                        //     relation1 = "relation-[" + i + "]";
                        //     console.log(name1);
                        //     age1 = "age-[" + i + "]";
                        //     monthlyincome1 = "monthlyincome-[" + i + "]";
                        //     occupation1 = "occupation-[" + i + "]";
                        //     supporttochild1 = "supporttochild-[" + i + "]";
                        //     data.name[i] = document.getElementsByName(name1)[0].value;
                        //     data.relation[i] = document.getElementsByName(relation1)[0].value;
                        //     data.age[i] = document.getElementsByName(age1)[0].value;
                        //     data.monthlyincome[i] = document.getElementsByName(monthlyincome1)[0].value;
                        //     data.occupation[i] = document.getElementsByName(occupation1)[0].value;
                        //     data.supporttochild[i] = ($("input[name='" + supporttochild1 + "']:checked").val());

                        //     // var continuestudies = ($("input[name='continuestudies']:checked").val());

                        //     console.log("hi row : " + i);
                        //     console.log("name " + document.getElementsByName(name1)[0].value);
                        //     console.log("relation " + document.getElementsByName(relation1)[0].value);
                        //     console.log("age " + document.getElementsByName(age1)[0].value);
                        //     console.log("occupation " + document.getElementsByName(occupation1)[0].value);
                        //     console.log("monthlyincome " + document.getElementsByName(monthlyincome1)[0].value);
                        //     console.log("support " + document.getElementsByName(supporttochild1)[0].value);

                        // }





                        data.familyRelation = [];
                        // data.smoking = [];
                        // data.liquor = [];
                        // data.drug = [];

                        var familyRelation1;
                        var smoking1;
                        var liquor1;
                        var drug1;

                        for (var j = 0; j <= member; j++) {
                            familyRelation1 = "familyRelation-[" + j + "]";
                            smoking1 = "smoking-[" + j + "]";
                            liquor1 = "liquor-[" + j + "]";
                            drug1 = "drug-[" + j + "]";


                            var temp1 = {
                                "familyrelation": document.getElementsByName(familyRelation1)[0].value,
                                "smoking": document.getElementsByName(smoking1)[0].value,
                                "liquor": document.getElementsByName(liquor1)[0].value,
                                "drug": document.getElementsByName(drug1)[0].value
                                                           };
                            data.familyRelation.push(temp1);

                            // data.familyRelation[j] = document.getElementsByName(familyRelation1)[0].value;
                            // data.smoking[j] = ($("input[name='" + smoking1 + "']:checked").val());
                            // data.liquor[j] = ($("input[name='" + liquor1 + "']:checked").val());
                            // data.drug[j] = ($("input[name='" + drug1 + "']:checked").val());

                            // console.log("hi row : " + j);
                            // console.log("familyrelation " + document.getElementsByName(familyRelation1)[0].value);
                            // console.log("smoking " + document.getElementsByName(smoking1)[0].value);
                            // console.log("liquor " + document.getElementsByName(liquor1)[0].value);
                            // console.log("drug " + document.getElementsByName(drug1)[0].value);

                        }



                        // data.name = name;
                        // data.relation = relation;
                        // data.age = age;
                        // data.monthlyincome = monthlyincome;
                        // data.occupation = occupation;
                        // data.supporttochild = supporttochild;
                        var sample = JSON.stringify(data);
                        var data1 = {};
                        data1.pre = sample;
                        data1.time = new Date();
                        data1.id = localStorage.getItem("user");
                        console.log("timeeeeeeeeeeeeeeeeee     " + data1.time);
                        console.log(sample);
                        // var obj = JSON.parse(sample);
                        // console.log(obj);
                        // console.log("goal1 :   "+obj.goal1);
                        // console.log("name :   "+obj.name[0]);
                        httpPost("/preassess", data1, function (response) {
                            if (response == 1) {
                                $('#preassessment_Modal').modal({ backdrop: 'static', keyboard: false });
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
                    var numTabs = $('#PreassessmentForm').find('.tab-pane').length;
                    $('#PreassessmentForm')
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
            var fv = $('#PreassessmentForm').data('formValidation'), // FormValidation instance
                // The current tab
                $tab = $('#PreassessmentForm').find('.tab-pane').eq(index);

            // Validate the container
            fv.validateContainer($tab);

            var isValidStep = fv.isValidContainer($tab);
            if (isValidStep === false || isValidStep === null) {
                // Do not jump to the target tab
                return false;
            }

            return true;
        }


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
                .find('[name="name"]').attr('name', 'name-[' + memberscount + ']').end()
                .find('[name="relation"]').attr('name', 'relation-[' + memberscount + ']').end()
                .find('[name="age"]').attr('name', 'age-[' + memberscount + ']').end()
                .find('[name="occupation"]').attr('name', 'occupation-[' + memberscount + ']').end()
                .find('[name="monthlyincome"]').attr('name', 'monthlyincome-[' + memberscount + ']').end()
                .find('[name="supporttochild"]').attr('name', 'supporttochild-[' + memberscount + ']').end();



        })



        //   Remove button click handler
        $(document).on('click', '.removeButton', function () {
            $(this).parents('.removeone').remove();
            // index = row.attr('data-book-index');
            memberscount--;

        });

        member = 0;
        $('.addone1').on('click', '.addButton', function () {
            member++;
            var $template1 = $('#addiction'),
                $clone = $template1
                    .clone()
                    .removeClass('hide')
                    .removeAttr('id')

                    .insertBefore($template1);

            // Update the name attributes
            $clone

                .find('[name="familyRelation"]').attr('name', 'familyRelation-[' + member + ']').end()
                .find('[name="smoking"]').attr('name', 'smoking-[' + member + ']').end()
                .find('[name="liquor"]').attr('name', 'liquor-[' + member + ']').end()
                .find('[name="drug"]').attr('name', 'drug-[' + member + ']').end();
        })


        // Remove button click handler
        $(document).on('click', '.removeButton', function () {
            $(this).parents('.removeone1').remove();
            // index = row.attr('data-book-index');
            member--;

        });
    }
});




