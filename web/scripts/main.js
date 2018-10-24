
function getWeather () {

 var city = document.getElementById('mainForm').city.value;

 var request = new XMLHttpRequest();
 var path = buildPathCity(city);

 request.open('GET', path, true);

 request.onload = function () {

    console.log('Req Sent');

    if (request.status >= 200 && request.status < 400) {

      var data = JSON.parse(this.response);

      var weatherData = data.weather[0];
      var mainData = data.main;

      console.log(mainData);
      console.log(weatherData);
      // weatherJSON = JSON.stringify(weatherData);

      // console.log(weatherData);

      document.getElementById('weather').innerHTML = weatherData.main;
      
      document.getElementById('cel').innerHTML = tempConvK(0, mainData.temp);
      document.getElementById('far').innerHTML = tempConvK(1, mainData.temp);

    } else {
      console.log();
      console.log('error');
    }

 }

 request.send();
}

function tempConvK (caseN, temp) {
  // Converts from kelvin to celsius and farenheit depending on the case number value
  if (caseN === 0) {
      // Kelvin to Celsius
      return temp - 273.15;
  } else {
      // Otherwise, convert to farehnheit
      return (temp - 273.15) * (9/5) + 32;
  }
}

function buildPathCity (city) {
    return 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&APPID=854ebc70b9591b40a9a998bd35e35e37'
}

function buildPathId (id) {
    return 'http://api.openweathermap.org/data/2.5/weather?id=' + id + '&APPID=854ebc70b9591b40a9a998bd35e35e37'
}
