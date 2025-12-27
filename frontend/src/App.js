import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import RiskCard from "./components/RiskCard";
import axios from "axios";

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const scanPackage = async (packageName) => {


    try {
        setLoading(true);
  setError("");
  setData(null);
  console.log("Scanning:", packageName);
      const res = await axios.post("http://localhost:8000/scan-package", {
        name: packageName.trim(),
        
      });
      console.log("API Response:", res.data);  
      setData(res.data);
    } catch (err) {
      console.error(err);
      setError("Failed to scan package");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">
        Sentinel Security Scanner 🛡️
      </h1>

      <SearchBar onScan={scanPackage} />

      {loading && <p className="text-center mt-4 text-blue-600">Scanning package...</p>}
      {error && <p className="text-center mt-4 text-red-600">{error}</p>}
      {data && (
        <div className="mt-6 flex justify-center">
          <RiskCard result={data}/>
        </div>
      )}
    </div>
  );
}

export default App;
