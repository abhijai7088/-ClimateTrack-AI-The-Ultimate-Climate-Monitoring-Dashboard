// src/components/CarbonFootprintCalculator.js
import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import './Calculator.css';
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const CarbonFootprintCalculator = () => {
  const [transportation, setTransportation] = useState({ carMiles: 0, bikeMiles: 0, publicTransportMiles: 0 });
  const [energy, setEnergy] = useState({ kWh: 0, renewable: 0 });
  const [food, setFood] = useState({ meatMeals: 0, vegMeals: 0 });
  const [waste, setWaste] = useState({ kgWaste: 0 });
  const [water, setWater] = useState({ liters: 0 });

  const calculateFootprint = () => {
    const transportFootprint = (transportation.carMiles * 0.411) + (transportation.publicTransportMiles * 0.05) + (transportation.bikeMiles * 0.02);
    const energyFootprint = (energy.kWh * 0.92) - (energy.renewable * 0.3);
    const foodFootprint = (food.meatMeals * 10.0) + (food.vegMeals * 2.0);
    const wasteFootprint = waste.kgWaste * 0.5;
    const waterFootprint = water.liters * 0.003;

    return transportFootprint + energyFootprint + foodFootprint + wasteFootprint + waterFootprint;
  };

  const getSuggestions = (totalFootprint) => {
    if (totalFootprint > 1000) {
      return "Consider reducing your car travel and switching to renewable energy for a significant reduction.";
    } else if (totalFootprint > 500) {
      return "Try using more public transportation and eating more plant-based foods.";
    } else {
      return "Great job! Continue maintaining sustainable habits.";
    }
  };

  // Graph data setup
  const chartData = {
    labels: ['Transportation', 'Energy', 'Food', 'Waste', 'Water'],
    datasets: [
      {
        label: 'Carbon Footprint (kg CO2)',
        data: [
          (transportation.carMiles * 0.411) + (transportation.publicTransportMiles * 0.05) + (transportation.bikeMiles * 0.02),
          (energy.kWh * 0.92) - (energy.renewable * 0.3),
          (food.meatMeals * 10.0) + (food.vegMeals * 2.0),
          waste.kgWaste * 0.5,
          water.liters * 0.003
        ],
        borderColor: '#4caf50',
        backgroundColor: 'rgba(76, 175, 80, 0.2)',
        fill: true,
      },
    ],
  };

  return (
    <div className="calculator">
      <h1>Advanced Carbon Footprint Calculator</h1>
      
      {/* Inputs for Transportation */}
      <div className="input-group">
        <label>Car Miles/Month:</label>
        <input type="number" value={transportation.carMiles} onChange={e => setTransportation({ ...transportation, carMiles: e.target.value })} />
      </div>
      <div className="input-group">
        <label>Public Transport Miles/Month:</label>
        <input type="number" value={transportation.publicTransportMiles} onChange={e => setTransportation({ ...transportation, publicTransportMiles: e.target.value })} />
      </div>
      <div className="input-group">
        <label>Bike Miles/Month:</label>
        <input type="number" value={transportation.bikeMiles} onChange={e => setTransportation({ ...transportation, bikeMiles: e.target.value })} />
      </div>

      {/* Inputs for Energy Consumption */}
      <div className="input-group">
        <label>Electricity Consumption (kWh/month):</label>
        <input type="number" value={energy.kWh} onChange={e => setEnergy({ ...energy, kWh: e.target.value })} />
      </div>
      <div className="input-group">
        <label>Renewable Energy Percentage:</label>
        <input type="number" value={energy.renewable} onChange={e => setEnergy({ ...energy, renewable: e.target.value })} />
      </div>

      {/* Inputs for Food Consumption */}
      <div className="input-group">
        <label>Meals with Meat/Month:</label>
        <input type="number" value={food.meatMeals} onChange={e => setFood({ ...food, meatMeals: e.target.value })} />
      </div>
      <div className="input-group">
        <label>Meals without Meat/Month:</label>
        <input type="number" value={food.vegMeals} onChange={e => setFood({ ...food, vegMeals: e.target.value })} />
      </div>

      {/* Inputs for Waste Generation */}
      <div className="input-group">
        <label>Waste Generated (kg/month):</label>
        <input type="number" value={waste.kgWaste} onChange={e => setWaste({ ...waste, kgWaste: e.target.value })} />
      </div>

      {/* Inputs for Water Usage */}
      <div className="input-group">
        <label>Water Usage (liters/month):</label>
        <input type="number" value={water.liters} onChange={e => setWater({ ...water, liters: e.target.value })} />
      </div>

      {/* Submit Button */}
      <div className="btn-submit-container">
        <button className="btn-submit" onClick={() => alert(`Total Footprint: ${calculateFootprint()} kg CO2`)}>Calculate Footprint</button>
      </div>

      {/* Result Display */}
      <div className="result">
        <h4>Your Total Carbon Footprint: {calculateFootprint()} kg CO2</h4>
        <p>{getSuggestions(calculateFootprint())}</p>
      </div>

      {/* Graph Section */}
      <div className="graph">
        <Line data={chartData} options={{ responsive: true, plugins: { title: { display: true, text: 'Carbon Footprint Breakdown' } } }} />
      </div>
    </div>
  );
};

export default CarbonFootprintCalculator;
