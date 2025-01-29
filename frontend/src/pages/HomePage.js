<<<<<<< HEAD
import React, { useState } from 'react';
import ProgressTracker from '../components/ProgressTracker';
import RecommendationList from '../components/RecommendationList';
import QuizWidget from '../components/QuizWidget';
import CarbonOffsetCalculator from '../components/CarbonOffsetCalculator';
import CarbonFootprintGraph from '../components/CarbonFootprintGraph';

import './HomePage.css'; // Advanced styles for the homepage
=======
import React, { useState } from "react";
import ProgressTracker from "../components/ProgressTracker";
import RecommendationList from "../components/RecommendationList";
import QuizWidget from "../components/QuizWidget";
import CarbonOffsetCalculator from "../components/CarbonOffsetCalculator";
import CarbonFootprintGraph from "../components/CarbonFootprintGraph";
import TipsWidget from "../components/TipsWidget";
import EnergyTracker from "../components/EnergyTracker";
import NewsFeed from "../components/NewsFeed";
import SustainabilityGoals from "../components/SustainabilityGoals";

import "./HomePage.css";
>>>>>>> 935354b ( ALL files are uploaded)

const HomePage = () => {
  const [carbonFootprint, setCarbonFootprint] = useState(0);
  const [history, setHistory] = useState([]);

<<<<<<< HEAD
  // Function to update the history and carbon footprint
=======
>>>>>>> 935354b ( ALL files are uploaded)
  const updateCarbonFootprint = (newFootprint) => {
    setCarbonFootprint(newFootprint);
    setHistory([...history, { date: new Date().toLocaleDateString(), value: newFootprint }]);
  };

  return (
    <div className="home-page">
      {/* Intro Section */}
      <section className="intro">
<<<<<<< HEAD
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
=======
        <div className="intro-overlay">
          <h1>Welcome to the Sustainability Hub</h1>
          <p><b>Take actionable steps to reduce your carbon footprint and build a sustainable future.</b></p>
          <p>Explore your energy usage, track progress, and gain practical tips for a greener life.</p>
        </div>
      </section>

      {/* Quick Tips Section */}
      <section className="section">
        <h2>🌟 Quick Sustainability Tips</h2>
        <div className="subsection">
          <TipsWidget />
        </div>
      </section>

      {/* News Feed Section */}
      <section className="section">
        <h2>🌍 Stay Updated</h2>
        <NewsFeed />
      </section>

      {/* Energy Tracker Section */}
      <section className="section">
        <h2>🔋 Your Energy Usage Tracker</h2>
        <div className="subsection">
          <EnergyTracker />
        </div>
      </section>

      {/* Carbon Footprint and Sustainability Goals Section */}
      <section className="features-section">
        <h2>🌱 Carbon Footprint & Sustainability Goals</h2>
        <div className="subsection carbon-sustainability">
          <div className="carbon-footprint">
            <h3>Track Your Progress</h3>
            <ProgressTracker
              carbonFootprint={carbonFootprint}
              setCarbonFootprint={updateCarbonFootprint}
            />
          </div>
          <div className="sustainability-goals">
            <h3>Set Your Sustainability Goals</h3>
            <SustainabilityGoals />
          </div>
        </div>
      </section>

      {/* Quiz and Carbon Footprint Trends Section */}
      <section className="quiz-trends-section">
        <div className="subsection">
          <h3>Quiz: What's Your Carbon Footprint?</h3>
          <QuizWidget setCarbonFootprint={updateCarbonFootprint} />
        </div>
        <div className="subsection">
          <h3>Carbon Footprint Trends</h3>
          <CarbonFootprintGraph history={history} />
        </div>
      </section>

      {/* Sustainability Tips and Carbon Offset Section */}
      <section className="sustainability-tips-offset-section">
        <div className="subsection">
          <h3>Get Personalized Sustainability Tips</h3>
          <RecommendationList carbonFootprint={carbonFootprint} />
        </div>
        <div className="subsection">
          <h3>Offset Your Carbon Footprint</h3>
          <CarbonOffsetCalculator carbonFootprint={carbonFootprint} />
        </div>
>>>>>>> 935354b ( ALL files are uploaded)
      </section>
    </div>
  );
};

export default HomePage;
