"use client";
import Image from "next/image";
import HTMLIMAGE from "@/images/html.png";
import UpdateModal from "./UpdateModal";
import { useState } from "react";
import { TestResult } from "@/types";

interface TestInfoProps {
  onUpdate: (newTestResult: TestResult) => void;
  testResult: TestResult;
}

const TestInfo = ({ onUpdate, testResult }: TestInfoProps) => {
  const [showUpdateModal, setShowUpdateModal] = useState(false);

  const handleToggleModal = () => {
    setShowUpdateModal(!showUpdateModal);
  };

  return (
    <div className="w-full rounded-md p-8 shadow-sm border">
      <div className="flex items-center gap-x-2">
        <div>
          <Image src={HTMLIMAGE} width={50} height={50} alt="HTML5" />
        </div>
        <div className="flex-1">
          <h1 className="font-bold">Hyper Text Markup Language</h1>
          <p className="text-gray-500">
            Questions:08 | Duration: 15mins | Submitted on 5 June 2021
          </p>
        </div>
        <button
          onClick={handleToggleModal}
          className="border-2 px-4 border-black text-white p-2 rounded bg-blue-900 hover:bg-blue-800 duration-150 transition-all"
        >
          Update
        </button>
      </div>
      {showUpdateModal && (
        <UpdateModal
          onUpdate={onUpdate}
          testResult={testResult}
          onClose={handleToggleModal}
        />
      )}
    </div>
  );
};

export default TestInfo;
