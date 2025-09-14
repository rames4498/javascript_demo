// Import Elements:
let tempContainer = document.querySelector(".temp");
let icon = document.querySelector("#icon");
let weatherType = document.querySelector("#weather-type");
let humidity = document.querySelector("#humidity");
let windSpeed = document.querySelector("#wind-speed");
let locationContainer = document.querySelector("#location");

//const apiKey = ;
// let loc = "delhi";

function submitLocation(event) {
  event.preventDefault();
  let loc = document.querySelector("#location-input").value.trim();

  apiFetch(loc);
}

function apiFetch(loc) {
  const api = `https://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=${apiKey}&units=metric`;

  fetch(api)
    .then((res) => res.json())
    .then((data) => {
      tempContainer.innerHTML = data.main.temp;
      icon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
      weatherType.innerHTML = data.weather[0].description;
      humidity.innerHTML = data.main.humidity;
      windSpeed.innerHTML = `${(data.wind.speed * 3.6).toFixed(2)} Km/h`; // meter per second
      locationContainer.innerHTML = `${data.name}, ${data.sys.country}`;
    })
    .catch((err) => {
      alert("City Not Found");
    });
}

apiFetch("delhi");
