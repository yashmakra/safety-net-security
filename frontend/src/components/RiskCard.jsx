import Gauge from "./Gauge";

export default function RiskCard({ result }) {
  if (!result) return null;

  const {
    package_name,
    risk_score,
    hallucination,
    logic_poisoning,
    api_burn_cost
  } = result;

  return (
    <div className="max-w-xl mx-auto mt-6 p-6 bg-white rounded-2xl shadow-md">
      <h2 className="text-xl font-bold mb-2">
        🛡️ Sentinel Audit Report
      </h2>

      <p className="text-gray-600 mb-4">
        Package: <span className="font-mono">{package_name}</span>
      </p>

      <Gauge score={risk_score} />

      <div className="mt-4 space-y-2 text-sm">
        {hallucination && (
          <p className="text-red-600">
            ❌ <strong>Hallucination Alert:</strong> Package not found on registry
          </p>
        )}

        {logic_poisoning && (
          <p className="text-yellow-600">
            ⚠️ <strong>Logic Warning:</strong> Insecure placeholder detected
          </p>
        )}

        {api_burn_cost > 0 && (
          <p className="text-orange-600">
            💰 <strong>Cost Warning:</strong> Estimated ${api_burn_cost.toFixed(2)} per run
          </p>
        )}
      </div>

      <div className="mt-4">
        {risk_score >= 70 ? (
          <span className="px-3 py-1 text-sm font-semibold bg-red-100 text-red-700 rounded-full">
            MERGE BLOCKED
          </span>
        ) : (
          <span className="px-3 py-1 text-sm font-semibold bg-green-100 text-green-700 rounded-full">
            SAFE TO MERGE
          </span>
        )}
      </div>
    </div>
  );
}