// index.js
import "dotenv/config"; // loads .env into process.env
import process from "process";
import { getCurrentWeatherByCity } from "./modules/api.js";
import { formatWeather, prettyPrint } from "./modules/util.js";

async function main() {
  const city = process.argv.slice(2).join(" ") || "Mumbai";
  try {
    const raw = await getCurrentWeatherByCity(city, { units: "metric" });
    const weather = formatWeather(raw);
    console.log(prettyPrint(weather));
  } catch (err) {
    console.error("Error:", err.message);
    // Helpful suggestions
    if (err.message.includes("401") || err.message.toLowerCase().includes("invalid")) {
      console.error("→ Check your OpenWeatherMap API key.");
    } else if (err.message.toLowerCase().includes("404")) {
      console.error("→ City not found. Try a different city name or add a country code (e.g., 'London,GB').");
    }
    process.exitCode = 1;
  }
}

main();
