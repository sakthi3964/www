$(document).ready(function () {
    var data = {};
    var id;
    var url = window.location.href;
    var child_id;
    if (url.substring(url.lastIndexOf('html') + 1) == "tml") {
        id = localStorage.getItem("user");
    }
    else {
        id = url.substring(url.lastIndexOf(':') + 1);
    }
    data.id = id;
    httpPost("/viewchildrenownprofile", data, function (response) {
        $("#body-tag").removeClass("hide");
        $(".loading").addClass("hide");
        var pressmentobject = JSON.parse(response.pre_assessment_data);
        $('#preid').html(pressmentobject.id);
        $('#prestandard').html(pressmentobject.standard);
        $('#preschooltype').html(pressmentobject.schooltype);
        $('#preschoolname').html(pressmentobject.schoolname);
        $('#prehousetype').html(pressmentobject.housetype);
        // $('#presupport').html(pressmentobject.goal5);
        pressmentobject.name.forEach(function (element) {
            $("#pre_family_details").append('<div class="col-sm-6 col-xs-6 col-md-6"><h5>Name</h5></div><div class="col-sm-6 col-xs-6 col-md-6"><p id="prefamilyname" class="prefamilydatas">' + element + '</p></div>');
        });
        pressmentobject.relation.forEach(function (element) {
            $("#pre_family_details").append('<div class="col-sm-6 col-xs-6 col-md-6"><h5>Relation</h5></div><div class="col-sm-6 col-xs-6 col-md-6"><p id="prefamilyrelation" class="prefamilydatas">' + element + '</p></div>');
        });
        pressmentobject.age.forEach(function (element) {
            $("#pre_family_details").append('<div class="col-sm-6 col-xs-6 col-md-6"><h5>Age</h5></div><div class="col-sm-6 col-xs-6 col-md-6"><p id="prefamilyage" class="prefamilydatas">' + element + '</p></div>');
        });
        pressmentobject.monthlyincome.forEach(function (element) {
            $("#pre_family_details").append('<div class="col-sm-6 col-xs-6 col-md-6"><h5>Occupation</h5></div><div class="col-sm-6 col-xs-6 col-md-6"><p id="prefamilyoccupation" class="prefamilydatas">' + element + '</p></div>');
        });
        pressmentobject.occupation.forEach(function (element) {
            $("#pre_family_details").append('<div class="col-sm-6 col-xs-6 col-md-6"><h5>Monthly Income</h5></div><div class="col-sm-6 col-xs-6 col-md-6"><p id="prefamilymMonthlyincome" class="prefamilydatas">' + element + '</p></div>');
        });
        // pressmentobject.supporttochild.forEach(function (element) {
        //     $("#pre_family_details").append('<div class="col-sm-5 col-xs-6 col-md-6"><h5>Occupation</h5></div><div class="col-sm-5 col-xs-6 col-md-6"><p id="prefamilyoccupation" class="prefamilydatas">'+element+'</p></div>');
        //     // alert(element);
        // });
        $('#pregoal1').html(pressmentobject.goal1);
        $('#pregoal2').html(pressmentobject.goal2);
        $('#pregoal3').html(pressmentobject.goal3);
        $('#pregoal4').html(pressmentobject.goal4);
        $('#pregoal5').html(pressmentobject.goal5);
        $('#preparentwish').html(pressmentobject.parentswish);
        $('#preparentsgoal').html(pressmentobject.parentsgoal);
        $('#pregoalidea').html(pressmentobject.idea);
        $('#pregoaleffort').html(pressmentobject.effortval);
        $('#pre_support_goal').html(pressmentobject.checkbox1);
        $('#pre_financial_family').html(pressmentobject.familyfininp);
        $('#pre_financial_organisation').html(pressmentobject.orgfininp);
        $('#pre_financial_neighbours').html(pressmentobject.neighbourfininp);
        $('#pre_financial_teachers').html(pressmentobject.teacherfininp);
        $('#pre_motivated_goal').html(pressmentobject.whomotivated);
        $('#pre_parttime_job').html(pressmentobject.job);
        if (pressmentobject.job == "yes") {
            $('#parttimejob').show();
        }

        $('#pre_why_job').html(pressmentobject.whyjob);
        $('#pre_kindofjob').html(pressmentobject.kindofjob);
        $('#pre_parttime_income').html(pressmentobject.jobincome);
        $('#pre_parttime_salary').html(pressmentobject.salary);
        $('#pre_parttime_safe').html(pressmentobject.safeinwork);


        $('#pre_listen').html(pressmentobject.listen);
        $('#pre_discussion').html(pressmentobject.discussion);
        $('#pre_parents_expectation').html(pressmentobject.expectationparents);
        $('#pre_burdened').html(pressmentobject.effortval);
        $('#pre_addicted').html(pressmentobject.effortval);

        pressmentobject.familyRelation.forEach(function (element) {
            $("#pre_addicted_details").append('<div class="col-sm-6 col-xs-6 col-md-6"><h5>Relation</h5></div><div class="col-sm-6 col-xs-6 col-md-6"><p id="pre_addicted_relation" class="prefamilydatas">' + element + '</p></div>');
        });

        // $('#pre_addicted_relation').html(pressmentobject.effortval);
        // $('#pre_addicted_smoking').html(pressmentobject.effortval);
        $('#pre_neighbours_help').html(pressmentobject.nhelp);
        $('#pre_neighbourhood_safe').html(pressmentobject.notfeelsafe);
        $('#pre_favorite_subject').html(pressmentobject.favsub);
        $('#pre_difficult_subject').html(pressmentobject.difficultsub);
        $('#pre_favorite_sports').html(pressmentobject.favsports);

        $('#pre_friends').html(pressmentobject.friends);

        $('#pre_club').html(pressmentobject.clubnameinp);

        $('#pre_events').html(pressmentobject.events);
        $('#pre_talents').html(pressmentobject.talents);
        $('#pre_org_support').html(pressmentobject.supportfromtycl);
        $('#pre_expectation').html(pressmentobject.expectfromtycl);
        $('#pre_studies').html(pressmentobject.continueinp);
        $('#pre_favorite_things').html(pressmentobject.favthing);
        $('#pre_hate_things').html(pressmentobject.hatething);
        $('#pre_future_help').html(pressmentobject.help);



    });

    function adjustIframeHeight() {
            var $body = $('body'),
                $iframe = $body.data('iframe.fv');
            if ($iframe) {
                // Adjust the height of iframe
                $iframe.height($body.height());
            }
        }
        $('#preassessform')
            .formValidation({
                framework: 'bootstrap',
                // icon: {
                //     valid: 'glyphicon glyphicon-ok',
                //     invalid: 'glyphicon glyphicon-remove',
                //     validating: 'glyphicon glyphicon-refresh'
                // },
                // This option will not ignore invisible fields which belong to inactive panels
                // excluded: ':disabled',
               
            })
            .bootstrapWizard({
                tabClass: 'nav nav-pills',
                onTabClick: function (tab, navigation, index) {
                    return validateTab(index);
                },
                onNext: function (tab, navigation, index) {
                    var numTabs = $('#preassessform').find('.tab-pane').length,
                        isValidTab = validateTab(index - 1);
                    if (!isValidTab) {
                        return false;
                    }
                    if (index === numTabs) {
                        
                        


                    }
                    return true;
                },
                onPrevious: function (tab, navigation, index) {
                    return validateTab(index + 1);
                },
                onTabShow: function (tab, navigation, index) {
                    // Update the label of Next button when we are at the last tab
                    var numTabs = $('#preassessform').find('.tab-pane').length;

                    // You don't need to care about it
                    // It is for the specific demo
                    adjustIframeHeight();
                }
            });

        function validateTab(index) {
            var fv = $('#preassessform').data('formValidation'), // FormValidation instance
                // The current tab
                $tab = $('#preassessform').find('.tab-pane').eq(index);

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




