const background = document.querySelector(".bg");
const form = document.querySelector("form");
const search = document.querySelector("#search");
const find = document.querySelector("#find");
const city = document.querySelector("#city");
const degree = document.querySelector("#degree");
const celsius = document.querySelector("#celsius");
const fahrenheit = document.querySelector("#fahrenheit");
const icon = document.querySelector("#icon");
const iconTitle = document.querySelector("#weather");
const links = document.querySelectorAll("a");

links.forEach((a) => {
  a.addEventListener("click", () => {
    search.value = a.innerHTML;
    fetchWeatherData();
    closeNav();
  });
});

document.getElementById("date").innerText = new Date().toDateString();

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (search.value.length == 0) {
    alert("please type a city name");
  } else {
    fetchWeatherData();
    search.value = "";
  }
});

function fetchWeatherData() {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${search.value}&units=metric&appid=02425cdb930e970ecb9de125493f4880`
  )
    .then((response) => response.json())
    .then((data) => {
      const icn = data.weather[0].icon;
      const icnBg = data.weather[0].main;
      const tempFahrenheit = Math.round((data.main.temp / 5) * 9 + 32);
      background.style.backgroundImage = `url("./assets/${icnBg}.jpg")`;
      city.innerHTML = data.name;
      degree.innerHTML = Math.round(data.main.temp) + "&#176;";
      icon.src = `http://openweathermap.org/img/wn/${icn}@2x.png`;
      iconTitle.innerHTML = icnBg;
      console.log(data);
      celsius.addEventListener("click", function () {
        degree.innerHTML = Math.round(data.main.temp) + "&#176;";
      });
      fahrenheit.addEventListener("click", function () {
        degree.innerHTML = tempFahrenheit + "&#176;";
      });
    });
}
function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.transform = "translateX: 250px";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}
