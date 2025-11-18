// modules/api.js
import process from "process";

const API_BASE = "https://api.openweathermap.org/data/2.5";
const KEY = process.env.OPENWEATHER_API_KEY;

if (!KEY) {
  throw new Error("Missing OPENWEATHER_API_KEY in environment. Add it to .env or export it.");
}

/**
 * Fetch current weather for a city (by name).
 * Returns parsed JSON on success or throws an Error on failure.
 */
export async function getCurrentWeatherByCity(city, { units = "metric" } = {}) {
  if (!city || typeof city !== "string") throw new Error("City name is required");

  const url = `${API_BASE}/weather?q=${encodeURIComponent(city)}&appid=${KEY}&units=${units}`;

  let res;
  try {
    res = await fetch(url, { method: "GET" });
  } catch (err) {
    // Network-level error
    throw new Error(`Network error while contacting OpenWeatherMap: ${err.message}`);
  }

  if (!res.ok) {
    // Parse body if possible for helpful message
    let bodyText = await res.text().catch(() => "");
    let msg = `OpenWeatherMap returned ${res.status} ${res.statusText}`;
    if (bodyText) msg += ` — ${bodyText}`;
    throw new Error(msg);
  }

  const data = await res.json();
  // Basic validation
  if (!data || !data.weather) throw new Error("Unexpected API response structure");
  return data;
}
