
import Gauge from "./Gauge";

export default function RiskCard({ result }) {
  if (!result) return null;

  const { package: packageName, risk } = result;
  const { score, color, reasons, status } = risk || {};

  return (
    <div className="
      max-w-xl mx-auto mt-6 p-6 rounded-2xl shadow-md
      bg-white dark:bg-gray-900
      text-gray-900 dark:text-gray-100
    ">
      <h2 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">
        🛡️ Sentinel Audit Report
      </h2>

      <p className="text-gray-600 dark:text-gray-400 mb-4">
        Package: <span className="font-mono">{packageName}</span>
      </p>

      <Gauge score={score} color={color} />

      <div className="mt-4 space-y-2 text-sm">
        {reasons?.map((reason, idx) => (
          <p key={idx} className="text-yellow-600 dark:text-yellow-400">
            ⚠️ {reason}
          </p>
        ))}
      </div>

      <div className="mt-4">
        {score >= 70 ? (
          <span className="
            px-3 py-1 text-sm font-semibold rounded-full
            bg-red-100 text-red-700
            dark:bg-red-900/40 dark:text-red-300
          ">
            MERGE BLOCKED
          </span>
        ) : (
          <span className="
            px-3 py-1 text-sm font-semibold rounded-full
            bg-green-100 text-green-700
            dark:bg-green-900/40 dark:text-green-300
          ">
            SAFE TO MERGE
          </span>
        )}
      </div>
    </div>
  );
}
