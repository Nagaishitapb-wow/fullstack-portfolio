const API_KEY = "3d87874bc182d349705147bdd3312cc6";
const baseUrl = "https://api.openweathermap.org/data/2.5/weather";

const searchBtn = document.getElementById("search-btn");
const cityInput = document.getElementById("city-input");
const loadingText = document.getElementById("loading");
const errorText = document.getElementById("error");
const weatherBox = document.getElementById("weather-result");

const locText = document.getElementById("location");
const tempText = document.getElementById("temp");
const descText = document.getElementById("desc");

async function fetchWeather(city) {
  loadingText.classList.remove("hidden");
  weatherBox.classList.add("hidden");
  errorText.classList.add("hidden");

  try {
    const response = await fetch(`${baseUrl}?q=${city}&appid=${API_KEY}&units=metric`);
    const data = await response.json();

    // Handle API city-not-found response properly
    if (data.cod === "404") {
      throw new Error("City not found");
    }

    locText.textContent = `${data.name}, ${data.sys.country}`;
    tempText.textContent = data.main.temp.toFixed(1);
    descText.textContent = data.weather[0].description;

    weatherBox.classList.remove("hidden");
  } catch (err) {
    errorText.textContent = "Invalid city name!";
    errorText.classList.remove("hidden");
    weatherBox.classList.add("hidden");
    console.error(err);
  } finally {
    loadingText.classList.add("hidden");
  }
}

searchBtn.addEventListener("click", () => {
  const city = cityInput.value.trim();
  if (city) {
    fetchWeather(city);
  } else {
    errorText.textContent = "Please enter a city";
    errorText.classList.remove("hidden");
  }
});
