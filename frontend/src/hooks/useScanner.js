import { useState } from "react";
import axios from "axios";

const API_BASE = "http://localhost:8000"; // change if deployed

export default function useScanner() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const scanPackage = async (packageName) => {
    if (!packageName) {
      setError("Package name cannot be empty");
      return;
    }

    setLoading(true);
    setError(null);
    setData(null);

    try {
      const res = await fetch(`${API_BASE}/scan-package`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: packageName,
          ecosystem: "npm" // default, backend supports this
        })
      });

      if (!res.ok) {
        throw new Error("Scan failed");
      }

      const result = await res.json();
      setData(result);
    } catch (err) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return { scanPackage, data, loading, error };
}
