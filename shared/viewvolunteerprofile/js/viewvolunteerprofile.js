httpGet("/viewvolunteer", function (response) {
    response.forEach(function (element){
        var name = element.name;
        $('#name').append(name);
        // var dob = element.dob;
        // var course = element.course;
        // var course = element.course;
    });
});