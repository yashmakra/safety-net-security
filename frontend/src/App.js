import React from 'react';
import './index.css';
import SearchBar from './components/SearchBar';
import RiskCard from './components/RiskCard';


function App() {
return (
<div className="p-4">
<h1 className="text-2xl font-bold mb-4">Safety Net Security Scanner</h1>
<SearchBar />
<RiskCard />
</div>
);
}

export default App;