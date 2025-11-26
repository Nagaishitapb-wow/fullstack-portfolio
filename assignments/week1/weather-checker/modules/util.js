// modules/utils.js
/**
 * Format the OpenWeatherMap response into a simple object
 */
export function formatWeather(data) {
  const name = `${data.name}, ${data.sys?.country || ""}`.trim();
  const description = data.weather?.[0]?.description || "N/A";
  const temp = data.main?.temp;
  const feelsLike = data.main?.feels_like;
  const humidity = data.main?.humidity;
  const wind = data.wind?.speed;

  return {
    location: name,
    description,
    temp,
    feelsLike,
    humidity,
    wind,
  };
}

export function prettyPrint(weather) {
  return [
    `Location : ${weather.location}`,
    `Weather  : ${weather.description}`,
    `Temp     : ${weather.temp} °C`,
    `FeelsLike: ${weather.feelsLike} °C`,
    `Humidity : ${weather.humidity} %`,
    `Wind     : ${weather.wind} m/s`,
  ].join("\n");
}
