
var config = {
    city : 'Fairplay',
    units : 'metric',
    lan : 'en',
    format : 'json',
    APPID : '854ebc70b9591b40a9a998bd35e35e37'
};

function getWeather (city) {

 var request = new XMLHttpRequest();

 // request.open('GET', 'http://api.openweathermap.org/data/2.5/weather?q=London&APPID=54ebc70b9591b40a9a998bd35e35e37', true);
 // request.open('GET', 'http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=854ebc70b9591b40a9a998bd35e35e37', true);

 // request.open('GET', 'http://api.openweathermap.org/data/2.5/weather?id=2172797&APPID=854ebc70b9591b40a9a998bd35e35e37', true);

 var path = buildPathCity(city);

 request.onload = function () {

    console.log('Req Sent');

    if (request.status >= 200 && request.status < 400) {

      var data = JSON.parse(this.response);

      console.log('Succ');

      console.log(data.weather);

    } else {
      console.log('error');
    }

 }

 request.send();
}


function buildPathCity (city) {
    return 'http://api.openweathermap.org/data/2.5/weather?' + city + '=2172797&APPID=854ebc70b9591b40a9a998bd35e35e37'
}

function buildPathId (id) {
    return 'http://api.openweathermap.org/data/2.5/weather?' + id + '=2172797&APPID=854ebc70b9591b40a9a998bd35e35e37'
}
