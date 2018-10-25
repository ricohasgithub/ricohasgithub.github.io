
var cLoc = "";

function getWeather () {

 var city = document.getElementById('mainForm').city.value;

 var request = new XMLHttpRequest();
 var path = buildPathCity(city);

 request.open('GET', path, true);

 request.onload = function () {

    console.log('Req Sent');

    if (request.status >= 200 && request.status < 400) {

      const app = document.getElementById('root');

      const container = document.createElement('div');
      container.setAttribute('class', 'container');

      app.appendChild(container);

      var data = JSON.parse(this.response);

      var weatherData = data.weather[0];
      var mainData = data.main;
      var windData = data.wind;

      console.log(mainData);
      console.log(weatherData);

      const card = document.createElement('div');
      card.setAttribute('class', 'card');

      const icon = document.createElement('img');
      icon.src =  buildIconPath(weatherData.icon);

      const weatherMain = document.createElement('h1');
      weatherMain.textContent = weatherData.main;

      const tempC = document.createElement('p');
      const tempF = document.createElement('p');

      tempC.textContent = 'Temperature (Celsius): ' + tempConvK(0, mainData.temp);
      tempF.textContent = 'Temperature (Farenheit): ' + tempConvK(1, mainData.temp);

      const windInfo = document.createElement('p');
      windInfo.textContent = 'Wind Speed: ' + windData.speed;

      container.appendChild(card);

      card.appendChild(weatherMain);
      card.appendChild(icon);
      card.appendChild(tempC);
      card.appendChild(tempF);
      card.appendChild(windInfo);
      // document.getElementById('weather').innerHTML = weatherData.main;
      //
      // document.getElementById('cel').innerHTML = 'Temperature (Celsius): ' + tempConvK(0, mainData.temp);
      // document.getElementById('far').innerHTML = 'Temperature (Farenheit): ' + tempConvK(1, mainData.temp);

    } else {
      console.log();
      console.log('error');
    }

 }

 request.send();
}

function getWeatherGeoLoc () {
  var locWDisplay = document.getElementById('currWeather');
  if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(getLoc);
      getLoc(navigator.geolocation);
      console.log(cLoc);
    //  var lat = cLoc.substring(2, loc.indexOf('a'));
    //  console.log(lat);
  } else {
      locWDisplay.innerHTML = 'N';
  }
  console.log(cLoc);
}

function getLoc (position) {
    document.getElementById('currWeather').innerHTML =  "Latitude: " + position.coords.latitude +
    "<br>Longitude: " + position.coords.longitude;
}

function getRanCaliCity () {
  // Returns the name of a random California city (because California is the coolest state)
  var ran = Math.floor((Math.random() * 6));

  if (ran === 0) {
      document.getElementById('mainForm').city.value = "San Francisco";
  } else if (ran === 1) {
      document.getElementById('mainForm').city.value = "Los Angeles";
  } else if (ran === 2) {
      document.getElementById('mainForm').city.Value = "Pasadena";
  } else if (ran === 3) {
      document.getElementById('mainForm').city.value = "Mountain View";
  } else if (ran === 4) {
      document.getElementById('mainForm').city.value = "San Jose";
  } else if (ran === 5) {
      document.getElementById('mainForm').city.value = "Palo Alto";
  } else if (ran === 6) {
      document.getElementById('mainForm').city.value = "Berkeley";
  } else {
      document.getElementById('mainForm').city.value = "Cupterino";
  }

}

function tempConvK (caseN, temp) {
  // Converts from kelvin to celsius and farenheit depending on the case number value
  if (caseN === 0) {
      // Kelvin to Celsius
      return Math.round(temp - 273.15);
  } else {
      // Otherwise, convert to farehnheit
      return Math.round((temp - 273.15) * (9/5) + 32);
  }
}

function buidlLatLonPath (lat, lon) {
  return 'http://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon;
}

function buildIconPath (icon) {
  return 'http://openweathermap.org/img/w/' + icon + '.png';
}

function buildPathCity (city) {
    return 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&APPID=854ebc70b9591b40a9a998bd35e35e37';
}

function buildPathId (id) {
    return 'http://api.openweathermap.org/data/2.5/weather?id=' + id + '&APPID=854ebc70b9591b40a9a998bd35e35e37';
}
