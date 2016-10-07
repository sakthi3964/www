$(document).ready(function () {
    var data = {};
    var id = localStorage.getItem("user");
    data.id = id;
    httpPost("/viewchildrenownprofile", data, function (response) {
        console.log(response);
        var pressmentobject = JSON.parse(response.pre_assessment_data);
        $('#preid').html(pressmentobject.id);
        $('#prestandard').html(pressmentobject.standard);
        $('#preschooltype').html(pressmentobject.schooltype);
        $('#preschoolname').html(pressmentobject.schoolname);
        $('#prehousetype').html(pressmentobject.housetype);
        $('#pregoal1').html(pressmentobject.goal1);
        $('#pregoal2').html(pressmentobject.goal2);
        $('#pregoal3').html(pressmentobject.goal3);
        $('#pregoal4').html(pressmentobject.goal4);
        $('#pregoal5').html(pressmentobject.goal5);
        $('#preparentswish').html(pressmentobject.parentswish);
        $('#preparentsgoal').html(pressmentobject.parentsgoal);
        $('#pregoalidea').html(pressmentobject.idea);
        $('#preeffort').html(pressmentobject.effortval);
        // $('#presupport').html(pressmentobject.goal5);
        pressmentobject.name.forEach(function (element) {
            // $("#pre_family_name").append('<div class="col-sm-3"><h4>Name</h4></div><div class="col-sm-3"><h4>'+element+'</h4></div>');
        });
        pressmentobject.relation.forEach(function (element) {
            // alert(element);
        });
        pressmentobject.age.forEach(function (element) {
            // alert(element);
        });
        pressmentobject.monthlyincome.forEach(function (element) {
            // alert(element);
        });
        pressmentobject.occupation.forEach(function (element) {
            // alert(element);
        });
        pressmentobject.supporttochild.forEach(function (element) {
            // alert(element);
        });


    });
});




