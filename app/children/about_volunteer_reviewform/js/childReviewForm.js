
$(document).ready(function () {
	var id = localStorage.getItem("user");
	data.id = id;

	var session = localStorage.getItem("user");
	if (session == null) {
		window.location.href = "../../../../index.html";
	}
	else {
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
		var localvalue = {};
		var id = localStorage.getItem("user");
		localvalue.id = id;

		httpPost("/childvolunteermentorid", localvalue, function (response) {
			$(".loading").addClass("hide");
			var res_length = response.length;
			if (res_length == 0) {
				$(".no_record").removeClass("hide");
			} else {
				$(".child_review_form").removeClass("hide");
				response.forEach(function (element) {
					$('#role').append('<option value=' + element.profile_id + '>' + element.role + '</option>');
				}, this);
			}


		})

		$("#submit1").click(function () {

			var data = {};
			if ((time.value != 0) && (care.value != 0) && (behaviour.value != 0) && (confidentiality.value != 0) && (mentorship.value != 0) && (environment.value != 0) && (feelings.value != 0) && (willingness.value != 0) && (learning.value != 0) && (feedback.value != 0)) {
				var id = localStorage.getItem("user");
				data.id = id;
				data.role = role.value;
				var data1 = {};
				data1.time = time.value;
				data1.care = care.value;
				data1.behaviour = behaviour.value;
				data1.confidentiality = confidentiality.value;
				data1.mentorship = mentorship.value;
				data1.environment = environment.value;
				data1.feelings = feelings.value;
				data1.willingness = willingness.value;
				data1.learning = learning.value;
				data1.feedback = feedback.value;
				data1.comment = ($('#comment').val());
				var review = JSON.stringify(data1);
				data.reviews = review;
				httpPost("/review", data, function (response) {
					$('#reviewmodal').modal({ backdrop: 'static', keyboard: false });
				});
			}

		});
	}
});