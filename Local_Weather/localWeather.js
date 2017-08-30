$(document).ready(function(){
  
  var apiURL;
  var latitude;
  var longitude;
  
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      latitude = position.coords.latitude;
      longitude = position.coords.longitude;
      
      apiURL = "https://fcc-weather-api.glitch.me/api/current?lat=" + latitude +"&lon=" + longitude;
  
      $.getJSON(apiURL, function(data){
        
        let tempInC = "";
        let tempInF = "";
        let skyCondition = "";
        let windspeedInKPH = "";
        let windspeedInMPH = "";
        let windDirection = "";
        let visibilityInKM = "";
        let visibilityInMiles = "";
        
        $("#location").html(data.name);
        $("#country").html(data.sys.country);
        skyCondition = data.weather[0].description;
        tempInC = Math.round(data.main.temp) + "&deg;C";
        $("#humidity").html(data.main.humidity + "%");
        windspeedInKPH = Math.round((data.wind.speed * 3.6)) + " km/h";
        windDirection = data.wind.deg;
        visibilityInKM = Math.round((data.visibility * 0.001)) + " km";
        
        showSkyCondition(skyCondition);
        showWindDirection(windDirection);
        showMetricUnits();
        
        let button = $("#button");
        button.on("click", function(){
          if(button.html() == "Show Imperial Units")
          {
            button.html("Show Metric Units");
            showImperialUnits(tempInC, windspeedInKPH, visibilityInKM);
          }
          else
          {
            button.html("Show Imperial Units");
            showMetricUnits();
          }
        }); // End of anonymous button click function
        
        function showMetricUnits()
        {          
          $("#temp").html(tempInC);
          $("#windSpeed").html(windspeedInKPH);
          $("#visibility").html(visibilityInKM);
        }

        function showImperialUnits(celsiusTemp, kilometersPerHour, kilometers)
        {
          tempInF = parseFloat(celsiusTemp) * 1.8 + 32;
          windspeedInMPH = parseFloat(kilometersPerHour) / 1.61;
          visibilityInMiles = parseFloat(kilometers) / 1.61;
          
          $("#temp").html(Math.round(tempInF) + "&deg;F");
          $("#windSpeed").html(Math.round(windspeedInMPH) + " mph");
          $("#visibility").html(Math.round(visibilityInMiles) + " miles");
        }

        function showSkyCondition(skyAndOrPrecip)
        {
          switch(skyAndOrPrecip){
            case "clear sky":
              $("#currentCondition").html("Clear");
              $("body").css("background-image", "url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/1321144/clear_sky.jpg)");
              break;
            case "scattered clouds":
            case "few clouds":
            case "broken clouds":
              $("#currentCondition").html("Partly Cloudy");
              $("body").css("background-image", "url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/1321144/partly-cloudy.jpg)");
              $("body").css("color", "#000");
              $("#button").css("color", "#000");
              break;
            case "overcast clouds":
              $("#currentCondition").html("Overcast");
              $("body").css("background-image", 'url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/1321144/overcast.jpg)');
              break;
            case "haze":
              $("#currentCondition").html("Haze");
              $("body").css("background-image", 'url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/1321144/overcast.jpg)');
              break;
            case "light rain":
              $("#currentCondition").html("Light Rain");
              $("body").css("background-image", 'url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/1321144/rain.jpg)');
              break;
            case "moderate rain":
              $("#currentCondition").html("Moderate Rain");
              $("body").css("background-image", 'url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/1321144/rain.jpg)');
              break;
            case "heavy intensity rain":
              $("#currentCondition").html("Heavy Rain");
              $("body").css("background-image", 'url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/1321144/heavy_rain.jpg)');
              break;
            default:
              $("#currentCondition").html("Current sky condition and/or precip unknown");
              $("body").css("color", "#000");
          }
        } // End of showSkyCondition(...) function
        
        function showWindDirection(direction)
        {
          if(direction >= 0 && direction < 20)
            $("#windDirection").html("N");
          else if(direction >= 20 && direction < 40)
            $("#windDirection").html("NNE");
          else if(direction >= 40 && direction < 60)
            $("#windDirection").html("NE");
          else if(direction >= 60 && direction < 80)
            $("#windDirection").html("ENE");
          else if(direction >= 80 && direction < 100)
            $("#windDirection").html("E");
          else if(direction >= 100 && direction < 120)
            $("#windDirection").html("ESE");
          else if(direction >= 120 && direction < 140)
            $("#windDirection").html("SE");
          else if(direction >= 140 && direction < 160)
            $("#windDirection").html("SSE");
          else if(direction >= 160 && direction < 180)
            $("#windDirection").html("S");
          else
            $("#windDirection").html("unknown direction");
        } // End of showWindDirection(...) function   
        
        // setTimeout(function(){
        //   window.location.reload();
        // }, 60000);
        
      }); // End of getJSON(...) function
    }); // End of navigator getCurrentPosition function
  } // End of if(navigator....) statement
});

