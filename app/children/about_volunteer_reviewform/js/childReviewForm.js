
$(document).ready(function () {
    $("#reviewBody").submit(function (e) {
        e.preventDefault();
    })
	// $("#time").slider();
	// $("#time").on("slide", function (time) {
	// 	console.log("time:" + time.value);
	// 	$("#ex6SliderVal").text(time.value);
	// });
	// Without JQuery
	var slider = new Slider("#time");
	slider.on("slide", function (time) {
		//console.log(slideEvt.value);
		$("#ex6SliderVal").text(time.value);
	});

	$("#care").slider();
	$("#care").on("slide", function (care) {
		console.log("care:" + care.value);
		$("#ex6SliderVal").text(care.value);
	});
	// Without JQuery
	var slider = new Slider("#care");
	slider.on("slide", function (care) {
		//console.log(slideEvt.value);
		$("#ex6SliderVal").text(care.value);
	});



	$("#behaviour").slider();
	$("#behaviour").on("slide", function (behaviour) {
		console.log("behaviour:" + behaviour.value);
		$("#ex6SliderVal").text(behaviour.value);
	});
	// Without JQuery
	var slider = new Slider("#behaviour");
	slider.on("slide", function (behaviour) {
		//console.log(slideEvt.value);
		$("#ex6SliderVal").text(behaviour.value);
	});



	$("#confidentiality").slider();
	$("#confidentiality").on("slide", function (confidentiality) {
		console.log("confidentiality:" + confidentiality.value);
		$("#ex6SliderVal").text(confidentiality.value);
	});
	// Without JQuery
	var slider = new Slider("#confidentiality");
	slider.on("slide", function (confidentiality) {
		//console.log(slideEvt.value);
		$("#ex6SliderVal").text(confidentiality.value);
	});



	$("#mentorship").slider();
	$("#mentorship").on("slide", function (mentorship) {
		console.log("mentorship" + mentorship.value);
		$("#ex6SliderVal").text(mentorship.value);
	});
	// Without JQuery
	var slider = new Slider("#mentorship");
	slider.on("slide", function (mentorship) {
		//console.log(slideEvt.value);
		$("#ex6SliderVal").text(mentorship.value);
	});



	$("#environment").slider();
	$("#environment").on("slide", function (environment) {
		console.log("environment:" + environment.value);
		$("#ex6SliderVal").text(environment.value);
	});
	// Without JQuery
	var slider = new Slider("#environment");
	slider.on("slide", function (environment) {
		//console.log(slideEvt.value);
		$("#ex6SliderVal").text(environment.value);
	});



	$("#feelings").slider();
	$("#feelings").on("slide", function (feelings) {
		console.log("feelings:" + feelings.value);
		$("#ex6SliderVal").text(feelings.value);
	});
	// Without JQuery
	var slider = new Slider("#feelings");
	slider.on("slide", function (feelings) {
		//console.log(slideEvt.value);
		$("#ex6SliderVal").text(feelings.value);
	});



	$("#willingness").slider();
	$("#willingness").on("slide", function (willingness) {
		console.log("willingness:" + willingness.value);
		$("#ex6SliderVal").text(willingness.value);
	});
	// Without JQuery
	var slider = new Slider("#willingness");
	slider.on("slide", function (willingness) {
		//console.log(slideEvt.value);
		$("#ex6SliderVal").text(willingness.value);
	});



	$("#learning").slider();
	$("#learning").on("slide", function (learning) {
		console.log("learning:" + learning.value);
		$("#ex6SliderVal").text(learning.value);
	});
	// Without JQuery
	var slider = new Slider("#learning");
	slider.on("slide", function (learning) {
		//console.log(slideEvt.value);
		$("#ex6SliderVal").text(learning.value);
	});



	$("#feedback").slider();
	$("#feedback").on("slide", function (feedback) {
		console.log("feedback:" + feedback.value);
		$("#ex6SliderVal").text(feedback.value);
	});
	// Without JQuery
	var slider = new Slider("#feedback");
	slider.on("slide", function (feedback) {
		//console.log(slideEvt.value);
		$("#ex6SliderVal").text(feedback.value);
	});



	$("#submit").click(function () {
		var data = {};
		if ((time.value != 0) && (care.value != 0) && (behaviour.value != 0) && (confidentiality.value != 0) && (mentorship.value != 0) && (environment.value != 0) && (feelings.value != 0) && (willingness.value != 0) && (learning.value != 0) && (feedback.value != 0)) {
			console.log("sucess");
			var id = localStorage.getItem("user");
			data.id = id;
			data.time = time.value;
			data.care = care.value;
			data.behaviour = behaviour.value;
			data.confidentiality = confidentiality.value;
			data.mentorship = mentorship.value;
			data.environment = environment.value;
			data.feelings = feelings.value;
			data.willingness = willingness.value;
			data.learning = learning.value;
			data.feedback = feedback.value;

			console.log("final time " + data.time);
			console.log("final care " + data.care);

			console.log("hi");
			var settings = {
				"crossDomain": true,
				"url": "http://localhost:3406/review",
				"method": "POST",
				"headers": {
					"content-type": "application/json",
				},
				"processData": false,
				"data": JSON.stringify(data),
			}
			$.ajax(settings).done(function (response) {



			});

		}
		else {
			$('#errormodal').modal();
			return false;
		}

	});
});