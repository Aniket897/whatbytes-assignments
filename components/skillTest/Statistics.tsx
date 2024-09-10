import { TestResult } from "@/types";

interface StateCardProps {
  icon: string;
  title: string;
  value: string;
}

const StateCard = ({ icon, title, value }: StateCardProps) => {
  return (
    <div className="border-r flex items-center gap-x-5 pt-3 pr-4">
      <div className="w-[50px] h-[50px] rounded-full border bg-gray-50 flex items-center justify-center text-2xl">
        {icon}
      </div>
      <div className="space-y-1">
        <h1 className="text-xl">{value}</h1>
        <p className="text-gray-400 uppercase text-xs">{title}</p>
      </div>
    </div>
  );
};

const Statistics = ({ rank, percentile, correctAnswers }: TestResult) => {
  return (
    <div className="w-full p-8 rounded-md shadow-sm border">
      <h2>Quick Statistics</h2>
      <div className="flex flex-wrap items-center gap-4">
        <StateCard icon="🏆" title="your rank" value={`${rank}`} />
        <StateCard icon="📄" title="percentile" value={`${percentile}%`} />
        <StateCard
          icon="✅"
          title="correct answers"
          value={`${correctAnswers} / 15`}
        />
      </div>
    </div>
  );
};

export default Statistics;
