// import React, { useState } from 'react';
// import './AccessibilityWidget.css';

// const AccessibilityWidget = () => {
//   const [voiceEnabled, setVoiceEnabled] = useState(false);
//   const [colorBlindMode, setColorBlindMode] = useState(false);

//   const toggleVoiceAssist = () => setVoiceEnabled(!voiceEnabled);
//   const toggleColorBlindMode = () => setColorBlindMode(!colorBlindMode);

//   // Example voice function (you can integrate Web Speech API for real voice assistance)
//   const speak = (text) => {
//     if (voiceEnabled && window.speechSynthesis) {
//       const utterance = new SpeechSynthesisUtterance(text);
//       window.speechSynthesis.speak(utterance);
//     }
//   };

//   return (
//     <div className={`accessibility-widget ${colorBlindMode ? 'color-blind' : ''}`}>
//       <h3>Accessibility Options</h3>
//       <button onClick={toggleVoiceAssist}>
//         {voiceEnabled ? 'Disable Voice Assistance' : 'Enable Voice Assistance'}
//       </button>
//       <button onClick={toggleColorBlindMode}>
//         {colorBlindMode ? 'Disable Color Blind Mode' : 'Enable Color Blind Mode'}
//       </button>
//       {voiceEnabled && <p>Voice Assistance is enabled. You can now hear the page content.</p>}
//     </div>
//   );
// };

// export default AccessibilityWidget;
