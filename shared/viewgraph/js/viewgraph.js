viewGraphFn("volunteer");
function viewGraphFn(roleToGetdata){
  var session = localStorage.getItem("user");
  if (session == null) {
      window.location.href = "../../../../index.html";
  }
  else {
    var data = {};
    
      var role = localStorage.getItem("role");
      var type='';
      data.profile_id='';
      data.child_id='';
      data.role=role;
     // console.log(role);
    //   if(role == "children"){
    //       console.log("hiiii");
    //     $(".cumlative").addClass("hide");
    //   }
    if (window.location.href.indexOf("typegraph") > -1) {
      var type="typegraph";
   }
   if (window.location.href.indexOf("typetracker") > -1) {
    var type="typetracker";
 }

      var url = window.location.href;
    if(role=="volunteer" || role=="mentor")
    {
      data.profile_id = localStorage.getItem("user");
     
    }
      //if (url.substring(url.lastIndexOf('html') + 1) == "tml") {
       //   var profile_id = localStorage.getItem("user");
        //  data.profile_id=profile_id;
      //}
      if(role=="admin")
      {
        var dec = url.substring(url.lastIndexOf('&') + 1);
        var  child_id = window.atob(dec);
        data.child_id= child_id;
      }
      // else {
      //     var dec = url.substring(url.lastIndexOf('&') + 1);
      //   var  child_id = window.atob(dec);
      //   data.child_id= child_id;
         
      // }
      if(role=='children')
      {
          data.child_id=localStorage.getItem("user");
      }
    //  var dec= id;
      httpPost("/trackerDates", data, function (response) {
          $("#details").removeClass("hide");
          $(".loading").addClass("hide");

          var res_length = response.length;
          if (res_length == 0) {
              $(".no_record").removeClass("hide");
          }
          else {
            if(!$(".no_record").hasClass("hide")){
              $(".no_record").addClass("hide");
            }

              response.forEach(function (element) {
                  var dateObj = new Date(element.date);
                  // var day = dateObj.getUTCDate()+1;
                  // var year = dateObj.getUTCFullYear();
                  var day = dateObj.getDate();
                  var year = dateObj.getFullYear();
                  var monthNames = ["January", "February", "March", "April", "May", "June",
                      "July", "August", "September", "October", "November", "December"
                  ];
                  var monthna = new Date(element.date);
                  var month = monthNames[monthna.getMonth()];
                  var elementid = window.btoa(element.id);
                  var profile_id = localStorage.setItem("profile_id", element.profile_id);
                  if(type=="typegraph")
                  {
                  
                    if(element.role==roleToGetdata && roleToGetdata=="volunteer")
                    {
                      $('#listOfDates').append('<a class="calender-block" href="../../graph/en/graph.html?date&' + element.created_at + 'id#' + dec + '"><div class="calendor"><div class="month"><p>' + month + '</p></div><div class="date"><p>' + day + '</p></div><div class="year"><p>' + year + '</p></div></div></a>');
                    }
                    if(element.role==roleToGetdata && roleToGetdata=="mentor")
                    {
                      $('#listOfMentorDates').append('<a class="calender-block" href="../../graph/en/graph.html?date&' + element.created_at + 'id#' + dec + '"><div class="calendor"><div class="month"><p>' + month + '</p></div><div class="date"><p>' + day + '</p></div><div class="year"><p>' + year + '</p></div></div></a>');
                    }
                  }
                  if(type=="typetracker")
                  {
                    $(".getCumulativeGraph").addClass("hide");
                    if(element.role==roleToGetdata && roleToGetdata=="volunteer")
                    {
                      $('#listOfDates').append('<a class="calender-block" href="../../trackerdisplay/viewtracker/en/viewtracker.html?date&' + element.created_at + 'id#' + dec + '"><div class="calendor"><div class="month"><p>' + month + '</p></div><div class="date"><p>' + day + '</p></div><div class="year"><p>' + year + '</p></div></div></a>');
                    }
                    if(element.role==roleToGetdata && roleToGetdata=="mentor")
                    {
                      $('#listOfMentorDates').append('<a class="calender-block" href="../../trackerdisplay/viewtracker/en/viewtracker.html?date&' + element.created_at + 'id#' + dec + '"><div class="calendor"><div class="month"><p>' + month + '</p></div><div class="date"><p>' + day + '</p></div><div class="year"><p>' + year + '</p></div></div></a>');
                    }
                  }
                 
                 
              }, this);
          }
      })
  }
}