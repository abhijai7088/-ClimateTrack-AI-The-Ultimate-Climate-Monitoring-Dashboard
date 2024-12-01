import React from 'react';
import { Line } from 'react-chartjs-2';

const CarbonFootprintGraph = ({ history }) => {
  const data = {
    labels: history.map((entry) => entry.date),
    datasets: [
      {
        label: 'Carbon Footprint Progress (kg CO₂)',
        data: history.map((entry) => entry.value),
        fill: false,
        backgroundColor: '#4CAF50',
        borderColor: '#4CAF50',
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Date',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Carbon Footprint (kg CO₂)',
        },
        beginAtZero: true,
      },
    },
  };

  return (
    <div style={{ height: '400px', marginTop: '20px' }}>
      <Line data={data} options={options} />
    </div>
  );
};

export default CarbonFootprintGraph;
