import React, { useEffect, useState } from "react";
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
  const [searchCity, setSearchCity] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      try {
        const data = await fetchClimateData(city);
        setClimateData(data);
      } catch (error) {
        console.error("Error loading data:", error);
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

  return (
    <div className="dashboard">
      <h1>Climate Dashboard</h1>

      {/* Search Bar */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Search for a city (India)"
          value={searchCity}
          onChange={(e) => setSearchCity(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

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
    </div>
  );
};

export default Dashboard;
