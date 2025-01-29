<<<<<<< HEAD
import React from 'react';
import { Line } from 'react-chartjs-2';
=======
import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";

// Registering Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);
>>>>>>> 935354b ( ALL files are uploaded)

const CarbonFootprintGraph = ({ history }) => {
  const data = {
    labels: history.map((entry) => entry.date),
    datasets: [
      {
<<<<<<< HEAD
        label: 'Carbon Footprint Progress (kg CO₂)',
        data: history.map((entry) => entry.value),
        fill: false,
        backgroundColor: '#4CAF50',
        borderColor: '#4CAF50',
=======
        label: "Carbon Footprint Progress (kg CO₂)",
        data: history.map((entry) => entry.value),
        fill: false,
        backgroundColor: "#4CAF50",
        borderColor: "#4CAF50",
        pointBackgroundColor: "#fff",
        pointBorderColor: "#4CAF50",
        pointBorderWidth: 2,
        pointRadius: 5,
        tension: 0.4, // Smooth curve for line chart
>>>>>>> 935354b ( ALL files are uploaded)
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
<<<<<<< HEAD
        position: 'top',
=======
        position: "top",
        labels: {
          font: {
            size: 14,
            family: "'Arial', sans-serif",
          },
        },
      },
      tooltip: {
        backgroundColor: "#333",
        titleColor: "#fff",
        bodyColor: "#fff",
        borderColor: "#4CAF50",
        borderWidth: 1,
>>>>>>> 935354b ( ALL files are uploaded)
      },
    },
    scales: {
      x: {
        title: {
          display: true,
<<<<<<< HEAD
          text: 'Date',
=======
          text: "Date",
          font: {
            size: 14,
            family: "'Arial', sans-serif",
          },
        },
        grid: {
          color: "#f1f1f1",
>>>>>>> 935354b ( ALL files are uploaded)
        },
      },
      y: {
        title: {
          display: true,
<<<<<<< HEAD
          text: 'Carbon Footprint (kg CO₂)',
=======
          text: "Carbon Footprint (kg CO₂)",
          font: {
            size: 14,
            family: "'Arial', sans-serif",
          },
        },
        grid: {
          color: "#f1f1f1",
>>>>>>> 935354b ( ALL files are uploaded)
        },
        beginAtZero: true,
      },
    },
<<<<<<< HEAD
  };

  return (
    <div style={{ height: '400px', marginTop: '20px' }}>
=======
    hover: {
      mode: "nearest",
      intersect: false,
    },
  };

  return (
    <div
      style={{
        height: "400px",
        marginTop: "20px",
        backgroundColor: "#f4f4f9",
        borderRadius: "12px",
        padding: "20px",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h3
        style={{
          textAlign: "center",
          fontFamily: "'Arial', sans-serif",
          color: "#333",
          marginBottom: "20px",
        }}
      >
        📉 Carbon Footprint Progress
      </h3>
>>>>>>> 935354b ( ALL files are uploaded)
      <Line data={data} options={options} />
    </div>
  );
};

export default CarbonFootprintGraph;
