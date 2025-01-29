<<<<<<< HEAD
// src/components/RecommendationList.js
import React from 'react';

const RecommendationList = ({ carbonFootprint }) => {
  const getRecommendations = () => {
    if (carbonFootprint > 1000) {
      return [
        "Use more public transport or carpool.",
        "Opt for energy-efficient lighting and appliances.",
        "Reduce meat consumption and eat more plant-based meals.",
        "Cut down on waste by recycling and composting."
      ];
    } else if (carbonFootprint > 500) {
      return [
        "Try using more renewable energy sources at home.",
        "Consider cycling instead of driving for short trips.",
        "Eat local and seasonal foods to reduce transportation emissions."
      ];
    } else {
      return [
        "Great job! Continue maintaining sustainable habits."
=======
import React, { useState, useEffect } from "react";
import "./RecommendationList.css";

const RecommendationList = () => {
  const [carbonFootprint, setCarbonFootprint] = useState(0); // State for manual carbon footprint input
  const [input, setInput] = useState(""); // State to capture user input for carbon footprint

  // Function to get personalized recommendations based on the carbon footprint
  const getRecommendations = () => {
    if (carbonFootprint > 1000) {
      return [
        { text: "🚗 Use public transport or carpool.", category: "Transportation" },
        { text: "💡 Switch to energy-efficient appliances.", category: "Energy" },
        { text: "🥦 Adopt a more plant-based diet.", category: "Diet" },
        { text: "♻️ Practice better waste management.", category: "Waste" },
      ];
    } else if (carbonFootprint > 500) {
      return [
        { text: "🚴‍♀️ Cycle or walk for short trips.", category: "Transportation" },
        { text: "🔋 Invest in solar panels or renewables.", category: "Energy" },
        { text: "🌱 Buy local and seasonal foods.", category: "Diet" },
      ];
    } else if (carbonFootprint > 0) {
      return [
        { text: "🎉 Keep up your sustainable habits!", category: "General" },
      ];
    } else {
      return [
        { text: "Please enter your carbon footprint to get recommendations.", category: "General" },
>>>>>>> 935354b ( ALL files are uploaded)
      ];
    }
  };

<<<<<<< HEAD
  return (
    <div className="recommendations">
      <h3>Your Carbon Footprint Breakdown</h3>
      <ul>
        {getRecommendations().map((recommendation, index) => (
          <li key={index}>{recommendation}</li>
=======
  // Function to handle the input change and update the carbon footprint
  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = () => {
    const inputValue = parseInt(input);
    if (!isNaN(inputValue) && inputValue >= 0) {
      setCarbonFootprint(inputValue);
    } else {
      alert("Please enter a valid number for carbon footprint.");
    }
    setInput(""); // Clear input field after submitting
  };

  return (
    <div className="recommendations">
      <h3>🌟 Personalized Sustainability Tips</h3>
      
      {/* Carbon Footprint Input Section */}
      <div className="input-section">
        <label htmlFor="carbon-footprint-input">Enter your carbon footprint (kg CO₂): </label>
        <input
          type="number"
          id="carbon-footprint-input"
          value={input}
          onChange={handleInputChange}
          placeholder="Enter in kg CO₂"
        />
        <button onClick={handleSubmit}>Submit</button>
      </div>

      {/* Display Recommendations */}
      <ul>
        {getRecommendations().map((rec, index) => (
          <li key={index}>
            <strong>{rec.category}:</strong> {rec.text}
          </li>
>>>>>>> 935354b ( ALL files are uploaded)
        ))}
      </ul>
    </div>
  );
};

export default RecommendationList;
