import React from "react";
import SearchBar from "./components/SearchBar";
import RiskCard from "./components/RiskCard";
import useScanner from "./hooks/useScanner";

function App() {
  const { scanPackage, data, loading, error } = useScanner();

    const handleScan = () => {
    if (!packageName) return alert("Enter a package name");
    scanPackage(packageName);
  };
  
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">
        Sentinel Security Scanner 🛡️
      </h1>

      {/* Search Input */}
      <SearchBar onScan={scanPackage} />

      {/* Loading */}
      {loading && (
        <p className="text-center mt-4 text-blue-600">
          Scanning package...
        </p>
      )}

      {/* Error */}
      {error && (
        <p className="text-center mt-4 text-red-600">
          {error}
        </p>
      )}

      {/* Result */}
      {data && (
        <div className="mt-6 flex justify-center">
          <RiskCard
            packageName={data.package}
            verdict={data.risk.status}
            score={data.risk.score}
            color={data.risk.color}
            reasons={data.risk.reasons}
          />
        </div>
      )}
    </div>
  );
}

export default App;
