export default function Gauge({ score }) {
  const getColor = () => {
    if (score < 40) return "bg-green-500";
    if (score < 70) return "bg-yellow-500";
    return "bg-red-500";
  };

  const getLabel = () => {
    if (score < 40) return "Low Risk";
    if (score < 70) return "Medium Risk";
    return "High Risk";
  };

  return (
    <div className="w-full mt-4">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium">Risk Score</span>
        <span className="text-sm font-semibold">{score}/100</span>
      </div>

      <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden">
        <div
          className={`h-full ${getColor()} transition-all duration-500`}
          style={{ width: `${score}%` }}
        />
      </div>

      <p className="mt-2 text-sm font-semibold text-gray-700">
        {getLabel()}
      </p>
    </div>
  );
}