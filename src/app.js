let date = new Date();

let hours = date.getHours();

if (hours < 10) {
  let hours = `0${hours}`;
}

let minutes = date.getMinutes();

if (hours < 10) {
  let minutes = `0${minutes}`;
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

function searchCity(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#city").value;
  let apiKey = "2c13e0a2b6fe347b0421bb02eef2o43t";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${cityInput}&key=${apiKey}&units=metric`;

  let heading = document.querySelector("h1");
  heading.innerHTML = `${cityInput}`;

  axios.get(`${apiUrl}`).then(displayWeather);
}

function displayWeather(response) {
  let temperatureValue = Math.round(response.data.temperature.current);
  let humidityValue = response.data.temperature.humidity;
  let windSpeedValue = Math.round(response.data.wind.speed);
  let descriptionValue = response.data.condition.description;

  // let iconValue = response.data.condition.icon;
  // let iconUrl = `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${iconValue}.png`;

  let temperatureUpdate = document.querySelector("#temperature");
  temperatureUpdate.innerHTML = `${temperatureValue}`;

  let humidityUpdate = document.querySelector("#humidity");
  humidityUpdate.innerHTML = `${humidityValue}`;

  let windSpeedUpdate = document.querySelector("#windspeed");
  windSpeedUpdate.innerHTML = `${windSpeedValue}`;

  let descriptionUpdate = document.querySelector("#description");
  descriptionUpdate.innerHTML = `${descriptionValue}`;

  //let iconUpdate = document.querySelector("#weather-icon");
  //iconUpdate.innerHTML = `${iconValue}`;
}

let searchForm = document.querySelector("#form");
searchForm.addEventListener("submit", searchCity);
