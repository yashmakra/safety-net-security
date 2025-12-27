import { useState } from "react";
import axios from "axios";

export default function SearchBar({ onScan }) {
  const [packageName, setPackageName] = useState("");
  const [error, setError] = useState("");

  const handleScan =async() => {
    if (!packageName.trim()) {
      setError("Please enter a package name");
      return;
    }
    setError("");
   onScan(packageName.trim());
      try {
    const res = await axios.post("http://localhost:8000/scan-package", {
      name: packageName.trim(),
    });

  //  onScan(res.data); // send result to parent
  } catch (err) {
    console.error(err);
    setError("Failed to scan package");
  }
  };

  return (
    <div className="w-full max-w-xl mx-auto">
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="e.g. fast-auth-v9"
          value={packageName}
          onChange={(e) => setPackageName(e.target.value)}
          className="flex-1 px-4 py-2 rounded-lg
  bg-white dark:bg-gray-800
  text-gray-900 dark:text-gray-100
  placeholder-gray-500 dark:placeholder-gray-400
  border border-gray-300 dark:border-gray-700
  focus:outline-none focus:ring-2 focus:ring-blue-500"
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