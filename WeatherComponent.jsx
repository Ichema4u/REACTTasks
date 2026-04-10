import React, { useEffect, useState } from "react";
import Button from "./ButtonComponent";

function Weather() {
  const [weatherData, setWeatherData] = useState(null);
  const [temperature, setTemperature] = useState(null);
  const [error, setError] = useState("");
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(true);
  const apiKey = "YOUR_API_KEY"; // Replace with your OpenWeatherMap API key
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  useEffect(() => {
    // Simulate an API call
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setWeatherData(data);
        setTemperature(data.main.temp);
        setLoading(false);
      })
      .catch((error) => {
        setError("Error fetching weather data");
        setLoading(false);
      });
  }, []);

  return (
    <div className="weather">
      <h1>Weather Report</h1>
      <p>This is a placeholder component for weather information.</p>
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />

      <Button buttonText="Get Weather" />

      {loading ? (
        <p>Loading weather data...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div>
          <h2>{weatherData.name}</h2>
          <p>Temperature: {temperature}°C</p>
        </div>
      )}
    </div>
  );
}
export default Weather;
