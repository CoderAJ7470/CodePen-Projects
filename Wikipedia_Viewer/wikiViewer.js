$(function(){
  
  $("#wikiSearch").focus(function(){
      $(this).attr("value", "");
  });
  
  // Runs all code when the user clicks the search button
  $("#submitButton").click(function(){
    let searchTerm = $("#wikiSearch").val();
    
    if(searchTerm === "Please enter a search term here"){
      $(".fieldError").css("visibility", "visible");
    }
    else{
      $(".fieldError").css("visibility", "hidden");
      
      var urlString = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchTerm + "&limit=50&callback=?";
      
      $.ajax({
        type: "GET",
        url: urlString,
        async: false,
        dataType: "json",
        success: function(data){
          $("#resultsList").html("");
          for(var index = 0; index < data[1].length; index++){
            $("#resultsList").append("<li><a href='" + data[3][index] + "' target='_blank'>" + data[1][index] + "</a><br>" +
                                    data[2][index] + "<br><br></li>");
          }
          $("#wikiSearch").val("");
        },
        error: function(error){
          $(".fieldError").css("visibility", "visible");
          $(".fieldError").html("Please ensure you entered a valid search term");
        }
        // $("#wikiSearch").attr("value", "");
      }); // End of $.ajax(...) call
      
    }
  });
  
  $("#wikiSearch").keypress(function(e){
    if(e.which === 13){
      $("#submitButton").click();
    }
  });
  
});
