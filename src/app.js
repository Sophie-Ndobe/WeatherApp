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
