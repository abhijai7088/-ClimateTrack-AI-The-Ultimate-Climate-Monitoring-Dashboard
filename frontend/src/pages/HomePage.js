import React, { useState } from 'react';
import ProgressTracker from '../components/ProgressTracker';
import RecommendationList from '../components/RecommendationList';
import QuizWidget from '../components/QuizWidget';
import CarbonOffsetCalculator from '../components/CarbonOffsetCalculator';
import CarbonFootprintGraph from '../components/CarbonFootprintGraph';

import './HomePage.css'; // Advanced styles for the homepage

const HomePage = () => {
  const [carbonFootprint, setCarbonFootprint] = useState(0);
  const [history, setHistory] = useState([]);

  // Function to update the history and carbon footprint
  const updateCarbonFootprint = (newFootprint) => {
    setCarbonFootprint(newFootprint);
    setHistory([...history, { date: new Date().toLocaleDateString(), value: newFootprint }]);
  };

  return (
    <div className="home-page">
      {/* Intro Section */}
      <section className="intro">
        <h1>Welcome to the Advanced Carbon Footprint Calculator</h1>
        <p>
          Climate change is one of the most pressing challenges of our time. Rising global temperatures, 
          extreme weather events, and the loss of biodiversity are just a few of its alarming consequences.
        </p>
        <p>
          By understanding and reducing your carbon footprint, you can contribute to slowing down global 
          warming and protecting our planet. Together, small changes can lead to a significant impact. This 
          platform is designed to empower you with tools and knowledge to make informed, sustainable choices.
        </p>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>Track Your Carbon Footprint</h2>
        <ProgressTracker carbonFootprint={carbonFootprint} setCarbonFootprint={updateCarbonFootprint} />

        <h2>Your Carbon Footprint Progress</h2>
        <CarbonFootprintGraph history={history} />

        <h2>Personalized Recommendations</h2>
        <RecommendationList carbonFootprint={carbonFootprint} />

        <h2>What's Your Carbon Footprint?</h2>
        <QuizWidget setCarbonFootprint={updateCarbonFootprint} />

        <h2>Offset Your Carbon Footprint</h2>
        <CarbonOffsetCalculator carbonFootprint={carbonFootprint} />
      </section>

      {/* Learn More Section */}
      <section className="learn-more">
        <h2>Learn More About Reducing Carbon Footprints</h2>
        <p>Explore these valuable resources to broaden your understanding and take effective actions:</p>
        <ul>
          <li><a href="https://example.com/transportation-impact">The Impact of Transportation on Carbon Emissions</a></li>
          <li><a href="https://example.com/energy-efficiency">How to Use Less Energy at Home</a></li>
          <li><a href="https://example.com/sustainable-diet">The Role of Diet in Sustainability</a></li>
          <li><a href="https://example.com/reduce-waste">Simple Ways to Reduce Waste and Recycle Better</a></li>
          <li><a href="https://example.com/global-warming-effects">Understanding the Effects of Global Warming</a></li>
        </ul>
      </section>
    </div>
  );
};

export default HomePage;
