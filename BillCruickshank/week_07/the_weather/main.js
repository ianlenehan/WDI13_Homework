// open weather map key: fb87e495a96fccd8cad517f7ea6d0948
// api.openweathermap.org

var $weatherButton;
var key = "fb87e495a96fccd8cad517f7ea6d0948";
var theWeather;

$(document).ready(function () {
  $weatherButton = $('#weather-search');
  $('#search-button').on('click', function (event){
    event.preventDefault();
    $('#weather-now').html("");
    var cityName = $('#city-name').val();
    var requestString = 'http://api.openweathermap.org/data/2.5/weather?q='+cityName+'&appid='+key;
    $.ajax(requestString)
      .done(function (data){
        theWeather = data;
        var $weatherList = $('<dl>');
        $weatherList.append($('<dt>').text("Mainly"))
          .append($('<dd>').text(theWeather.weather[0].main))
          .append($('<dt>').text("Temp"))
          .append($('<dd>').text(theWeather.main.temp - 273.15));
        $('#weather-now').append($weatherList);
      });
  });
});
