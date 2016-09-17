var data={};
    var url=window.location.href;
    var date1=url.substring(url.indexOf(':')+1,url.length);
  //  console.log("date1 :"+date1);
    var date2=date1.substring(date1.indexOf(':')+1,date1.length);
    //console.log("date2 :"+date2);
    var date3=date2.substring(date2.indexOf(':')+1,date2.length);
    data.date=date3;
    //console.log("graph date: "+data.date)
   
    var settings = {
        "crossDomain": true,

        "url": "http://localhost:3406/viewReviewDetail",
        "method": "POST",
        "headers": {
            "content-type": "application/json",
        },
        "processData": false,
        "data": JSON.stringify(data),
    }
    
    $.ajax(settings).done(function (response) {

console.log(response);
var res= JSON.stringify(response.review);
var res1=JSON.parse(res);
var res2=JSON.parse(res1);
console.log("revie      "+res2);
var education=parseInt(res2.education);
var health=parseInt(res2.health);
var familyRelationship=parseInt(res2.familyRelationship);
var friendRelationship=parseInt(res2.friendRelationship);
var positiveAttitude=parseInt(res2.positiveAttitude);
var coCurricular=parseInt(res2.coCurricular);
var socialCommunity=parseInt(res2.socialCommunity);
var safeFeel=parseInt(res2.safeFeel);
var socialInteraction=parseInt(res2.socialInteraction);
var hygiene=parseInt(res2.hygiene);

console.log("review education: "+res2.education);

var chart = new CanvasJS.Chart("chartContainer",
            {
                
                title: {
                    text: "Review Form"
                },
                animationEnabled: true,
                axisY: {
                    title: "Points"
                },
                 axisX: {
                    title: "Holistic Indicators",
            
				labelAngle: -90
			
                },

                legend: {
                    verticalAlign: "bottom",
                    horizontalAlign: "center"
                },
                theme: "theme4",
                backgroundColor:"#ECF1F5",
                data: [

                    {
                        type: "column",

                        dataPoints: [
                            { y: education, label: "education" },
                            { y: health, label: "health" },
                            { y: familyRelationship, label: "familyRelationship" },
                            { y: friendRelationship, label: "friendRelationship" },
                            { y: positiveAttitude, label: "positiveAttitude" },
                            { y: coCurricular, label: "coCurricular" },
                            { y: socialCommunity, label: "socialCommunity" },
                            { y: safeFeel, label: "safeFeel" },
                            { y: socialInteraction, label: "socialInteraction" },
                            { y: hygiene, label: "hygiene" }
                        ]
                    }
                ]
            });
        chart.render();
    });