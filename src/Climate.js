// Climate.js
import React, { useState, useEffect } from "react";
import "./Climate.css";
// Replace "YOUR_API_KEY" with your actual OpenWeatherMap API key
const API_KEY = "15ebe344c60c56152510b91663872883";

export default function Climate() {
  const [climateData, setClimateData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchClimateData = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=chennai&appid=${API_KEY}&units=metric`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch climate data");
        }
        const data = await response.json();
        setClimateData(data);
        console.log(data);
        setLoading(false);
        setError(null);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchClimateData();
  }, []);

  return (
    <div
      className="climate-container"
      style={{ display: "flex", flexWrap: "wrap" }}
    >
      <h3 className="climate-heading">Climate in Chennai</h3>
      {loading ? (
        <p>Loading climate data...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <div className="climate-details">
          {/* Display climate data */}
          <p className="climate-info">
            Temperature: {climateData.main.temp} °C
          </p>
          <p className="climate-info">
            Humidity: {climateData.main.humidity} %
          </p>
          <p className="climate-info">
            Weather: {climateData.weather[0].description}
          </p>
          <img
            className="img"
            src="https://cdn2.iconfinder.com/data/icons/weather-colored-3/128/7-512.png"
          />
        </div>
      )}
    </div>
  );
}
