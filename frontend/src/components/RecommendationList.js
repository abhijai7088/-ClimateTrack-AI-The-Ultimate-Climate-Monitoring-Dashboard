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
      ];
    }
  };

  return (
    <div className="recommendations">
      <h3>Your Carbon Footprint Breakdown</h3>
      <ul>
        {getRecommendations().map((recommendation, index) => (
          <li key={index}>{recommendation}</li>
        ))}
      </ul>
    </div>
  );
};

export default RecommendationList;
