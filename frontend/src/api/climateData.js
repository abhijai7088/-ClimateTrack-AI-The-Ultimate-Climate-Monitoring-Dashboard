// frontend/src/api/climateData.js
const API_KEY = "deccf33f5890475ca18173423242811";
const BASE_URL = "http://api.weatherapi.com/v1/current.json";

export const fetchClimateData = async (city = "delhi") => {
  try {
    const response = await fetch(`${BASE_URL}?key=${API_KEY}&q=${city}&aqi=no`);
    if (!response.ok) {
      throw new Error("Failed to fetch climate data");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching climate data:", error);
    throw error;
  }
};
