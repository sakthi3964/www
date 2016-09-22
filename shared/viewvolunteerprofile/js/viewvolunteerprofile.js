httpGet("/viewvolunteer", function (response) {
    response.forEach(function (element){
        var name = element.name;
        
        // var dob = element.dob;
        $('#name').html(response.profile[0].name);
        // var course = element.course;
        // var course = element.course;
    });
});