// src/components/ProgressTracker.js
import React from 'react';
 // Add custom styles here

const ProgressTracker = ({ carbonFootprint }) => {
  const maxFootprint = 1000; // Define the maximum carbon footprint for progress tracking
  const progress = Math.min((carbonFootprint / maxFootprint) * 100, 100);

  return (
    <div className="progress-tracker">
      <h3>Your Carbon Footprint Progress</h3>
      <div className="progress-bar-container">
        <div
          className="progress-bar"
          style={{ width: `${progress}%`, backgroundColor: '#4CAF50' }}
        ></div>
      </div>
      <p>{carbonFootprint} kg CO2 of {maxFootprint} kg CO2</p>
    </div>
  );
};

export default ProgressTracker;
