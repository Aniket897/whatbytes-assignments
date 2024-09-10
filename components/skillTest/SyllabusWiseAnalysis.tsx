import Progressbar from "./Progressbar";

const SyllabusWiseAnalysis = () => {
  return (
    <div className="p-8 rounded-md shadow-sm border space-y-6">
      <h1 className="font-bold">Syllabus Wise Analysis</h1>
      <div className="space-y-6">
        <div className="space-y-2">
          <p className="text-gray-500">HTML Tools, Forms, History</p>
          <Progressbar percentage={80} />
        </div>
        <div className="space-y-2">
          <p className="text-gray-500">Tags & References in HTML</p>
          <Progressbar percentage={60} />
        </div>
        <div className="space-y-2">
          <p className="text-gray-500">Tables & References in HTML</p>
          <Progressbar percentage={24} />
        </div>
        <div className="space-y-2">
          <p className="text-gray-500">Tables & CSS Basics</p>
          <Progressbar percentage={96} />
        </div>
      </div>
    </div>
  );
};

export default SyllabusWiseAnalysis;
