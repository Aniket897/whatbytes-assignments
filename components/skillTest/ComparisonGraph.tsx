"use client";
import PercentileChart from "./PercentileChart";

interface camparisonGraphProps {
  currentPercentile: number;
}

// sample data for comparison graph
const sampleData = [
  { percentile: 10, students: 5 },
  { percentile: 30, students: 2 },
  { percentile: 45, students: 3 },
  { percentile: 78, students: 6 },
  { percentile: 90, students: 1 },
  { percentile: 100, students: 4 },
];

const ComparisonGraph = ({ currentPercentile }: camparisonGraphProps) => {
  return (
    <div className="w-full p-8 rounded-md shadow-sm border space-y-3">
      <h1 className="font-bold">Comparison Graph</h1>
      <div className="flex gap-3">
        <p className="flex-1">
          <span className="font-bold">
            You scored {currentPercentile}% percentile{" "}
          </span>{" "}
          which is lower than the average percentile 72% of all engineers who
          took the assignment
        </p>
        <div className="w-[50px] h-[50px] rounded-full border bg-gray-50 flex items-center justify-center text-2xl">
          <p>📈</p>
        </div>
      </div>
      <PercentileChart
        currentPercentile={currentPercentile}
        data={sampleData}
      />
    </div>
  );
};

export default ComparisonGraph;
