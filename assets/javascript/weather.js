var APIKey = "p0tRqcUOaBqvO7kQBGC8CNVeoFbpdtV8";
var city = "";


$(document).on("click", "#searchBtn", function(){
    $(".city").empty();
    var val = $('#citySearch').val();
    console.log(val);
    getWeatherDetailsByCity(val);
});

function getWeatherDetailsByCity(city) {

    var queryURL = "http://dataservice.accuweather.com/locations/v1/search?q=" + city + "&apikey=" + APIKey;

    //** Call gives us City Name , State, State Abbreviation **//
    $.ajax({
       url: queryURL,
       method: "GET"
    }).then(function (response) {
       var cityName = response["0"].LocalizedName;
       var state = response["0"].AdministrativeArea.EnglishName;
       var locationKey = response["0"].Key;

       console.log(response);
       console.log(response["0"].LocalizedName);
       console.log(response["0"].AdministrativeArea.EnglishName);
       console.log(response["0"].AdministrativeArea.ID);
       console.log(locationKey);

       $(".city").html("Weather for " + cityName + ", " + state);
       
       

       //** Call gives us the expected High and Low Temperature **//

       $.ajax({
         // url: "http://dataservice.accuweather.com/forecasts/v1/daily/1day/329823?apikey=gEyFG3sMmsH53AETARb5e8HpJutTAtfv",
         url: "http://dataservice.accuweather.com/forecasts/v1/daily/1day/" + locationKey + "?apikey="+ APIKey,
         method: "GET"
       }).then(function (response) {
         var highTemp = response.DailyForecasts["0"].Temperature.Maximum.Value;
         var lowTemp = response.DailyForecasts["0"].Temperature.Minimum.Value;

         console.log("High Temp " + response.DailyForecasts["0"].Temperature.Maximum.Value);
         console.log("Low Temp " + response.DailyForecasts["0"].Temperature.Minimum.Value);


         $(".hightemp").html("Expected High: " + highTemp);
         $(".lowtemp").html("Expected Low: "+ lowTemp);
       

       });

       //** Call gives us the current Weather **//

       $.ajax({
         url: "http://dataservice.accuweather.com/currentconditions/v1/" + locationKey + "?apikey="+ APIKey,
         method: "GET"
       }).then(function (response) {
         var currentTemp = response["0"].Temperature.Imperial.Value;
         var weatherText = response["0"].WeatherText;
         var weatherIcon = response["0"].WeatherIcon;

         console.log(response);
         console.log("Current Temp " + response["0"].Temperature.Imperial.Value);
         console.log(response["0"].WeatherText);
         console.log(response["0"].WeatherIcon);//Weather Icon

         $(".currentTemp").html("Current Temperature: "+ currentTemp);
         $(".weathertext").html(weatherText);
       
         // $(".icon").append(weatherText);
       });

 


     });

   }

   getWeatherDetailsByCity("");