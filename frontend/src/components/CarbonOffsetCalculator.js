// src/components/CarbonOffsetCalculator.js
import React from 'react';

const CarbonOffsetCalculator = ({ carbonFootprint }) => {
  const calculateOffset = () => {
    const treesRequired = (carbonFootprint / 10); // Example: 10kg CO2 per tree
    return treesRequired.toFixed(2);
  };

  return (
    <div className="carbon-offset-calculator">
      <h3>Offset Your Carbon Footprint</h3>
      <p>Based on your carbon footprint of {carbonFootprint} kg CO2, you can offset this by planting {calculateOffset()} trees.</p>
      <button onClick={() => window.open('https://example.com/offset')}>Learn More about Carbon Offsets</button>
    </div>
  );
};

export default CarbonOffsetCalculator;
