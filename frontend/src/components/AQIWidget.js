// // src/components/AQIWidget.js
// import React, { useState, useEffect } from 'react';
// import { fetchAQIData } from '../api/aqiAPI';

// const AQIWidget = () => {
//   const [aqiData, setAqiData] = useState(null);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const getAQIData = async () => {
//       try {
//         const data = await fetchAQIData();
//         setAqiData(data);
//       } catch (err) {
//         setError('Failed to fetch AQI data');
//       }
//     };

//     getAQIData();
//   }, []);

//   if (error) return <div>{error}</div>;

//   if (!aqiData) return <div>Loading AQI Data...</div>;

//   return (
//     <div className="aqi-widget">
//       <h3>🌍 Air Quality Index (AQI)</h3>
//       <ul>
//         {aqiData.data.cities.map((city, index) => (
//           <li key={index}>
//             <strong>{city.city}</strong> - AQI: {city.aqi}
//             <div>
//               <small>{city.country}</small>
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default AQIWidget;
