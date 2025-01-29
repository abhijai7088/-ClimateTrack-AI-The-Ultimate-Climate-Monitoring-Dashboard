import React, { useEffect, useState } from "react";
<<<<<<< HEAD
import { fetchClimateData } from "../api/climateData";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import "./Dashboard.css";

ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

const Dashboard = () => {
  const [climateData, setClimateData] = useState(null);
  const [city, setCity] = useState("delhi");
=======
import { fetchClimateData } from '../api/climateData';
import { fetchForecastData } from '../api/forecastData';
import { fetchFutureData } from '../api/futureData';
import { fetchMarineData } from '../api/marineData';
import "./Dashboard.css"; // Assuming you have your custom CSS for the dashboard
import NasaEonetMap from "./NasaEonetMap";

const Dashboard = () => {
  const [climateData, setClimateData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [futureData, setFutureData] = useState(null);
  const [marineData, setMarineData] = useState(null);
  const [city, setCity] = useState("Delhi");
>>>>>>> 935354b ( ALL files are uploaded)
  const [searchCity, setSearchCity] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      try {
<<<<<<< HEAD
        const data = await fetchClimateData(city);
        setClimateData(data);
      } catch (error) {
        console.error("Error loading data:", error);
=======
        const climate = await fetchClimateData(city);
        const forecast = await fetchForecastData(city);
        const future = await fetchFutureData(city);
        const marine = await fetchMarineData(city);

        setClimateData(climate);
        setForecastData(forecast);
        setFutureData(future);
        setMarineData(marine);
      } catch (error) {
        console.error("Error fetching data:", error);
>>>>>>> 935354b ( ALL files are uploaded)
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, [city]);

  const handleSearch = () => {
    if (searchCity.trim()) {
      setCity(searchCity);
    }
  };

<<<<<<< HEAD
  const temperatureData = {
    labels: climateData?.dates || [],
    datasets: [
      {
        label: 'Global Temperature (°C)',
        data: climateData?.temperatures || [],
        borderColor: '#FF5733',
        backgroundColor: 'rgba(255, 87, 51, 0.2)',
        fill: true,
      },
    ],
  };

  const co2Data = {
    labels: climateData?.dates || [],
    datasets: [
      {
        label: 'CO2 Emissions (ppm)',
        data: climateData?.co2_emissions || [],
        borderColor: '#33C4FF',
        backgroundColor: 'rgba(51, 196, 255, 0.2)',
        fill: true,
      },
    ],
  };

=======
>>>>>>> 935354b ( ALL files are uploaded)
  return (
    <div className="dashboard">
      <h1>Climate Dashboard</h1>

<<<<<<< HEAD
      {/* Search Bar */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Search for a city (India)"
=======
      <div className="search-container">
        <input
          type="text"
          placeholder="Search for a city (e.g., New York)"
>>>>>>> 935354b ( ALL files are uploaded)
          value={searchCity}
          onChange={(e) => setSearchCity(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

<<<<<<< HEAD
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <div className="climate-data">
            <h2>Weather in {climateData?.location.name}</h2>
            <p>
              <strong>Condition:</strong> {climateData?.current.condition.text}
            </p>
            <p>
              <strong>Temperature:</strong> {climateData?.current.temp_c}°C ({climateData?.current.temp_f}°F)
            </p>
            <p>
              <strong>Feels Like:</strong> {climateData?.current.feelslike_c}°C ({climateData?.current.feelslike_f}°F)
            </p>
            <p>
              <strong>Humidity:</strong> {climateData?.current.humidity}%
            </p>
            <p>
              <strong>Wind:</strong> {climateData?.current.wind_kph} kph, {climateData?.current.wind_dir}
            </p>
            <p>
              <strong>Last Updated:</strong> {climateData?.current.last_updated}
            </p>
          </div>

          {/* Charts */}
          <div className="charts-container">
            <div className="chart">
              <h3>Global Temperature Trends</h3>
              <Line data={temperatureData} options={{ responsive: true }} />
            </div>
            <div className="chart">
              <h3>CO2 Emissions</h3>
              <Line data={co2Data} options={{ responsive: true }} />
            </div>
          </div>
        </>
      )}
=======
      {loading && <p>Loading data...</p>}

      {climateData?.error ? (
        <p>Error: {climateData.error}</p>
      ) : (
        <>
          <div className="weather-and-aqi">
            <div className="weather-info">
              <h2>
                Weather in {climateData?.location.name}, {climateData?.location.region}, {climateData?.location.country}
              </h2>
              <p><strong>Condition:</strong> {climateData?.current?.condition?.text}</p>
              <p><strong>Temperature:</strong> {climateData?.current?.temp_c}°C ({climateData?.current?.temp_f}°F)</p>
              <p><strong>Feels Like:</strong> {climateData?.current?.feelslike_c}°C ({climateData?.current?.feelslike_f}°F)</p>
              <p><strong>Humidity:</strong> {climateData?.current?.humidity}%</p>
              <p><strong>Wind:</strong> {climateData?.current?.wind_kph} kph, {climateData?.current?.wind_dir}</p>
              <p><strong>Last Updated:</strong> {climateData?.current?.last_updated}</p>
            </div>
            <div className="aqi-info">
              <h3>Air Quality (AQI)</h3>
              <p><strong>PM2.5:</strong> {climateData?.air_quality?.aqi?.pm2_5}</p>
              <p><strong>PM10:</strong> {climateData?.air_quality?.aqi?.pm10}</p>
              <p><strong>Ozone:</strong> {climateData?.air_quality?.aqi?.o3}</p>
            </div>
          </div>

          <div className="forecast-and-future">
            <div className="forecast-info">
              <h3>Next Day Forecast</h3>
              {forecastData && forecastData?.forecast?.forecastday?.[0] ? (
                <>
                  <p><strong>Condition:</strong> {forecastData?.forecast?.forecastday[0]?.day?.condition?.text}</p>
                  <p><strong>Temperature:</strong> {forecastData?.forecast?.forecastday[0]?.day?.avgtemp_c}°C</p>
                  <p><strong>Precipitation:</strong> {forecastData?.forecast?.forecastday[0]?.day?.totalprecip_mm} mm</p>
                </>
              ) : (
                <p>Loading forecast data...</p>
              )}
            </div>
            <div className="future-info">
              <h3>Future Weather (2025-02-13)</h3>
              {futureData && futureData?.forecast?.forecastday?.[0] ? (
                <>
                  <p><strong>Condition:</strong> {futureData?.forecast?.forecastday[0]?.day?.condition?.text}</p>
                  <p><strong>Temperature:</strong> {futureData?.forecast?.forecastday[0]?.day?.avgtemp_c}°C</p>
                </>
              ) : (
                <p>Loading future data...</p>
              )}
            </div>
          </div>

          <div className="marine-info">
            <h3>Marine Weather</h3>
            {marineData && marineData?.marine?.[0] ? (
              <>
                <p><strong>Wave Height:</strong> {marineData?.marine?.[0]?.wave_height} m</p>
                <p><strong>Wind Speed:</strong> {marineData?.marine?.[0]?.wind_speed} kph</p>
              </>
            ) : (
              <p>Loading marine data...</p>
            )}
          </div>
        </>
      )}

      <div className="climate-events-section">
        <h2>Interactive Climate Events Map</h2>
        <NasaEonetMap />
      </div>
>>>>>>> 935354b ( ALL files are uploaded)
    </div>
  );
};

export default Dashboard;
