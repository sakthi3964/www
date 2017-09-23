viewGraphFn();
function viewGraphFn(){
  var session = localStorage.getItem("user");
  if (session == null) {
      window.location.href = "../../../../index.html";
  }
  else {
      var role = localStorage.getItem("role");
      console.log(role);
      if(role == "children"){
          console.log("hiiii");
        $(".cumlative").addClass("hide");
      }
      var data = {};
      var url = window.location.href;
      if (url.substring(url.lastIndexOf('html') + 1) == "tml") {
          var id = localStorage.getItem("user");
      }
      else {
          var dec = url.substring(url.lastIndexOf(':') + 1);
          id = window.atob(dec);
      }
      data.id = id;
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


                  $('#listOfDates').append('<a href="../../graph/en/graph.html?date&' + element.created_at + '" id=' + elementid + '><div class="calendor"><div class="month"><p>' + month + '</p></div><div class="date"><p>' + day + '</p></div><div class="year"><p>' + year + '</p></div></div></a>');
              }, this);
          }
      })
  }
}