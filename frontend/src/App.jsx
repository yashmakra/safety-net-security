// import { useState } from "react";

// function App() {
//   const [url, setUrl] = useState("");

//   return (
//     <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
//       <h1 className="text-4xl font-bold mb-6">
//         Sentinel Security 🛡️
//       </h1>

//       <input
//         type="text"
//         placeholder="Paste GitHub README URL"
//         value={url}
//         onChange={(e) => setUrl(e.target.value)}
//         className="w-full max-w-xl p-3 border rounded-md mb-4"
//       />

//       <button className="px-6 py-2 bg-black text-white rounded-md hover:bg-gray-800">
//         Scan README
//       </button>
//     </div>
//   );
// }

// export default App;



// import React from 'react';
// import SearchBar from './components/SearchBar.jsx';
// import RiskCard from './components/RiskCard.jsx';
// import Gauge from './components/Gauge.jsx';

// const someData = {
//   package_name: 'example-lib',
//   risk_score: 75,
//   hallucination: 0.2,
//   logic_poisoning: 0.1,
//   api_burn_cost: 0.05
// };

// const someScore = 75;

// export default function App() {
//   return (
//     <div className="p-6">
//       <SearchBar />
//       <RiskCard result={someData} />
//       <Gauge value={someScore} />
//     </div>
//   );
// }

import SearchBar from './components/SearchBar';
import RiskCard from './components/RiskCard';
import Gauge from './components/Gauge';

const someData = {
  package_name: 'example-lib',
  risk_score: 75,
  hallucination: 0.2,
  logic_poisoning: 0.1,
  api_burn_cost: 0.05
};

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">

      {/* Header */}
      <h1 className="text-4xl font-bold mb-8 flex items-center gap-2">
        Sentinel Security
        <span>🛡️</span>
      </h1>

      {/* Search Bar */}
      <div className="w-full max-w-2xl mb-10">
        <SearchBar />
      </div>

      {/* Risk Report */}
      <div className="w-full max-w-3xl bg-white rounded-xl shadow-md p-6 mb-6">
        <RiskCard result={someData} />
      </div>

      {/* Gauge */}
      <div className="w-full max-w-md bg-white rounded-xl shadow-md p-6">
        <Gauge value={75} />
      </div>

    </div>
  );
}

