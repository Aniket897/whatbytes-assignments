interface QuestionAnalysisProps {
  correct: number;
}

const QuestionAnalysis = ({ correct }: QuestionAnalysisProps) => {
  const total = 15;
  const percentage = Math.round((correct / total) * 100);
  return (
    <div className="p-8 rounded-md shadow-sm border space-y-3">
      <div className="flex items-center justify-between font-bold">
        <h1>Question Analysis</h1>
        <h1 className="text-blue-500">{correct}/15</h1>
      </div>
      <p>
        <span className="font-bold">
          You scored {correct} questions correct out of 15.{" "}
        </span>
        However it still needs some improvement.
      </p>
      <div className="flex items-center justify-center pt-4">
        <div
          style={{
            background: `conic-gradient(#60a5fa ${
              percentage * 3.6
            }deg, #e5e7eb 0deg)`,
          }}
          className="relative w-36 h-36 flex items-center justify-center rounded-full"
        >
          <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center">
            <span className="text-4xl">🎯</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionAnalysis;
