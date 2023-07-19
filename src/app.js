let date = new Date();

let hours = date.getHours();

if (hours < 10) {
  let updatedHours = `0${hours}`;
}

let minutes = date.getMinutes();

if (minutes < 10) {
  let updatedMinutes = `${minutes}`;
}

let currentTime = document.querySelector("#time");
currentTime.innerHTML = `${hours}:${minutes}`;

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let day = days[date.getDay()];

let currentDay = document.querySelector("#day");
currentDay.innerHTML = `${day}`;

function searchCity(city) {
  let cityInput = document.querySelector("#city").value;

  let apiKey = "2c13e0a2b6fe347b0421bb02eef2o43t";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${cityInput}&key=${apiKey}&units=metric`;

  axios.get(`${apiUrl}`).then(displayWeather);
}

function displayWeather(response) {
  let headingUpdate = document.querySelector("h1");
  let temperatureUpdate = document.querySelector("#temperature");
  let humidityUpdate = document.querySelector("#humidity");
  let windSpeedUpdate = document.querySelector("#windspeed");
  let descriptionUpdate = document.querySelector("#description");

  celciusTemperature = response.data.temperature.current;

  let headingValue = response.data.city;
  let temperatureValue = Math.round(celciusTemperature);
  let humidityValue = response.data.temperature.humidity;
  let windSpeedValue = Math.round(response.data.wind.speed);
  let descriptionValue = response.data.condition.description;

  headingUpdate.innerHTML = `${headingValue}`;
  temperatureUpdate.innerHTML = `${temperatureValue}`;
  humidityUpdate.innerHTML = `${humidityValue}`;
  windSpeedUpdate.innerHTML = `${windSpeedValue}`;
  descriptionUpdate.innerHTML = `${descriptionValue}`;
}

function convertToFahrenheit(event) {
  event.preventDefault();
  let fahrenheitTemperature = (celciusTemperature * 9) / 5 + 32;

  let temperatureUpdate = document.querySelector("#temperature");
  temperatureUpdate.innerHTML = Math.round(fahrenheitTemperature);
}

let celciusTemperature = null;

let searchForm = document.querySelector("#form");
searchForm.addEventListener("submit", searchCity);

let fahrenheitConversion = document.querySelector("#fahrenheit-unit");
fahrenheitConversion.addEventListener("click", convertToFahrenheit);

searchCity("Cape Town");
