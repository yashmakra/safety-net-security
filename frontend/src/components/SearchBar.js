import { useState } from "react";

export default function SearchBar({ onScan }) {
  const [packageName, setPackageName] = useState("");
  const [error, setError] = useState("");

  const handleScan = () => {
    if (!packageName.trim()) {
      setError("Please enter a package name");
      return;
    }
    setError("");
    onScan(packageName.trim());
  };

  return (
    <div className="w-full max-w-xl mx-auto">
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="e.g. fast-auth-v9"
          value={packageName}
          onChange={(e) => setPackageName(e.target.value)}
          className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleScan}
          className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Scan
        </button>
      </div>

      {error && (
        <p className="text-sm text-red-500 mt-2">{error}</p>
      )}
    </div>
  );
}
