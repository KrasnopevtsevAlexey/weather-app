const apiKey = "74db02c73e13c79cb7b7fcfe1cb55e2e";
const apiUrl =
    `https://api.openweathermap.org/data/2.5/weather?units=metric&q=`;
    
const searchInput = document.querySelector(".search-box input");
const searchButton = document.querySelector(".search-box button");
const weatherIcon = document.querySelector(".weather-image i");
const weather1 = document.querySelector('.weather');
const error = document.querySelector(".error");

async function checkWhether(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    if (response.status == 404) {
        error.style.display = 'block';
        weather1.style.display = "none";
    }
    const date = await response.json();
    console.log(date, "date");

    document.querySelector('.city').innerHTML = date.name;
    document.querySelector(".temp").innerHTML =
        Math.round(date.main.temp) + "&#8451";
    document.querySelector(".himidty").innerHTML = date.main.humidity + '%';
    document.querySelector(".himidty1").innerHTML = date.wind.speed + 'km/h';


if (date.weather[0].main == 'Clear') {
    weatherIcon.className = 'fa-solid fa-sun';
} else if (date.weather[0].main == "Rain") {
    weatherIcon.className = 'fa-solid fa-cloud-rain';
} else if (date.weather[0].main == "Mist") {
    weatherIcon.className = 'fa-solid fa-cloud-mist';
} else if (date.weather[0].main == "Drizzle") {
    weatherIcon.className = 'fa-solid fa-cloud-drizzle';
}

weather1.style.display = 'block';
  error.style.display = "none";   
}


  searchButton.addEventListener("click", () => {
    checkWhether(searchInput.value);
    searchInput.value = "";
  });

searchInput.addEventListener("keydown", (e) => {
    if (e.keyCode === 13) {
          checkWhether(searchInput.value);
    searchInput.value = "";
      }
    
  });

checkWhether()