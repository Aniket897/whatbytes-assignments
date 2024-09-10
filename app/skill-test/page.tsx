"use client";
import { useState } from "react";
import { TestResult } from "@/types";
import QuestionAnalysis from "@/components/skillTest/QuestionAnalysis";
import Statistics from "@/components/skillTest/Statistics";
import TestInfo from "@/components/skillTest/TestInfo";
import ComparisonGraph from "@/components/skillTest/ComparisonGraph";
import SyllabusWiseAnalysis from "@/components/skillTest/SyllabusWiseAnalysis";

const page = () => {
  const [testResult, setTestResult] = useState<TestResult>({
    rank: 1,
    percentile: 90,
    correctAnswers: 15,
  });

  const handleTestResultUpdate = (newTestResult: TestResult) => {
    setTestResult(newTestResult);
  };

  return (
    <div className="p-4 md:p-8 space-y-3">
      <h1>Skill Test</h1>
      <div className="flex flex-col xl:flex-row gap-3">
        <div className="space-y-3 xl:w-[60%]">
          <TestInfo testResult={testResult} onUpdate={handleTestResultUpdate} />
          <Statistics {...testResult} />
          <ComparisonGraph currentPercentile={testResult.percentile} />
        </div>
        <div className="space-y-3 xl:flex-1">
          <SyllabusWiseAnalysis />
          <QuestionAnalysis correct={testResult.correctAnswers} />
        </div>
      </div>
    </div>
  );
};

export default page;
