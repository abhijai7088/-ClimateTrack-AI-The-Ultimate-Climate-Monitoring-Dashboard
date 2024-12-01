// src/components/QuizWidget.js
import React, { useState } from 'react';

const QuizWidget = ({ setCarbonFootprint }) => {
  const [score, setScore] = useState(0);

  const handleAnswer = (impact) => {
    setScore(score + impact);
    setCarbonFootprint(score + impact);
  };

  return (
    <div className="quiz-widget">
      <h3>What's Your Carbon Footprint?</h3>
      <p>Answer a few questions to find out which activities contribute most to your carbon footprint.</p>

      <div>
        <p>How often do you use your car?</p>
        <button onClick={() => handleAnswer(50)}>Daily</button>
        <button onClick={() => handleAnswer(20)}>A few times a week</button>
        <button onClick={() => handleAnswer(5)}>Rarely</button>
      </div>

      <div>
        <p>How many meat-based meals do you eat per week?</p>
        <button onClick={() => handleAnswer(30)}>More than 10</button>
        <button onClick={() => handleAnswer(10)}>5-10</button>
        <button onClick={() => handleAnswer(0)}>Less than 5</button>
      </div>
    </div>
  );
};

export default QuizWidget;
