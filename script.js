const apiKey = "5a3b042317e9be08406e0bc0d2da5cf1";

let history = [];
let favorites = [];
let darkMode = false;

async function weather() {
  const city = document.getElementById("cityInput").value;
  const result = document.getElementById("weatherResult");

  if (!city) {
    alert("Enter City Name");
    return;
  }

  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );

    const data = await response.json();

    if (data.cod != 200) {
      result.innerHTML = "❌ City not found";
      return;
    }

    const sunrise = new Date(data.sys.sunrise * 1000).toLocaleTimeString();
    const sunset = new Date(data.sys.sunset * 1000).toLocaleTimeString();

    result.innerHTML = `
      <h2>${data.name}</h2>
      <p>🌡 Temp: ${data.main.temp} °C</p>
      <p>🌤 Weather: ${data.weather[0].main}</p>
      <p>🔻 Min Temp: ${data.main.temp_min} °C</p>
      <p>🔺 Max Temp: ${data.main.temp_max} °C</p>
      <p>💧 Humidity: ${data.main.humidity}%</p>
      <p>💨 Wind: ${data.wind.speed} m/s</p>
      <p>🌅 Sunrise: ${sunrise}</p>
      <p>🌇 Sunset: ${sunset}</p>
    `;

    if (!history.some(item => item.toLowerCase() === city.toLowerCase())) {
      history.push(city);
    }

    displayHistory();

  } catch (error) {
    result.innerHTML = "⚠️ Error fetching weather";
  }
}
function displayHistory(searchText = "") {
  const historyDiv = document.getElementById("history");

  const filtered = history.filter(item =>
    item.toLowerCase().includes(searchText.toLowerCase())
  );

  const sorted = [...filtered].sort();

  historyDiv.innerHTML = sorted.map(city => `
    <p onclick="searchFromHistory('${city}')">
      ${city}
      <button onclick="addFavorite('${city}', event)">✩</button>
    </p>
  `).join("");
}

function searchFromHistory(city) {
  document.getElementById("cityInput").value = city;
  weather();
}
function addFavorite(city, event) {
  event.stopPropagation();

  if (!favorites.includes(city)) {
    favorites.push(city);
  }

  displayFavorites();
}

function displayFavorites() {
  const favDiv = document.getElementById("favorites");

  favDiv.innerHTML = favorites.map(city => `
    <p onclick="searchFromHistory('${city}')">
      ⭐ ${city}
    </p>
  `).join("");
}

function toggleTheme() {
  darkMode = !darkMode;
  document.body.classList.toggle("dark");

  const btn = document.querySelector(".theme-btn");
  if (btn) {
    btn.innerText = darkMode ? "☀️" : "🌙";
  }
}

function toggleSidebar() {
  document.getElementById("sidebar").classList.toggle("active");
}

document.addEventListener("click", function (e) {
  const sidebar = document.getElementById("sidebar");
  const menuBtn = document.querySelector(".menu-btn");

  if (
    sidebar.classList.contains("active") &&
    !sidebar.contains(e.target) &&
    !menuBtn.contains(e.target)
  ) {
    sidebar.classList.remove("active");
  }
});