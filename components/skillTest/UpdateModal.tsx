import HTMLIMAGE from "@/images/html.png";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TestResult } from "@/types";

const schema = z.object({
  rank: z
    .number({ message: "Please enter a valid rank" })
    .min(1, { message: "Rank should be greater than 0" })
    .max(100, { message: "Rank should be less than or equal to 100" }),
  percentile: z
    .number({ message: "Please enter a valid percentile" })
    .min(1, { message: "Percentile should be greater than 0" })
    .max(100, { message: "Percentile should be less than or equal to 100" }),
  currentScores: z
    .number({ message: "Please enter valid scores" })
    .min(0, { message: "Scores should be greater than or equal to 0" })
    .max(15, { message: "Scores should be less than or equal to 15" }),
});

interface UpdateModalProps {
  onClose: () => void;
  onUpdate: (newTestResult: TestResult) => void;
  testResult: TestResult;
}

const UpdateModal = ({ onClose, onUpdate, testResult }: UpdateModalProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    mode: "onChange",
    defaultValues: {
      rank: testResult.rank,
      percentile: testResult.percentile,
      currentScores: testResult.correctAnswers,
    },
  });

  const handleUpdate = (data: z.infer<typeof schema>) => {
    console.log(data);
    onUpdate({
      rank: data.rank,
      percentile: data.percentile,
      correctAnswers: data.currentScores,
    });
    onClose();
  };

  return (
    <div className="absolute top-0 left-0 w-full h-full bg-[#00000087] flex items-center justify-center z-40">
      <div className="bg-white rounded-md p-8 shadow-lg w-[700px] max-w-screen space-y-4">
        <div className="flex items-center justify-between">
          <h1>Update Scores</h1>
          <Image src={HTMLIMAGE} width={30} height={30} alt="HTML5" />
        </div>
        <form onSubmit={handleSubmit(handleUpdate)} className="space-y-4">
          <div className="flex items-center gap-x-4">
            <div className="flex flex-1 gap-3">
              <div className="bg-blue-800 text-white rounded-full p-2 w-7 h-7 flex items-center justify-center">
                1
              </div>
              <p>
                Update your <span className="font-bold">Rank</span>
              </p>
            </div>
            <div>
              <input
                {...register("rank", { valueAsNumber: true })}
                className="border border-blue-400 p-2 rounded"
                type="number"
              />
              {errors.rank && (
                <p className="text-red-500 text-[10px]">
                  {errors.rank.message}
                </p>
              )}
            </div>
          </div>
          <div className="flex items-center gap-x-4">
            <div className="flex flex-1 gap-3">
              <div className="bg-blue-800 text-white rounded-full p-2 w-7 h-7 flex items-center justify-center">
                1
              </div>
              <p>
                Update your <span className="font-bold">Percentile</span>
              </p>
            </div>
            <div>
              <input
                {...register("percentile", {
                  valueAsNumber: true,
                })}
                className="border border-blue-400 p-2 rounded"
                type="number"
              />
              {errors.percentile && (
                <p className="text-red-500 text-[10px]">
                  {errors.percentile.message}
                </p>
              )}
            </div>
          </div>
          <div className="flex items-center gap-x-4">
            <div className="flex flex-1 gap-3">
              <div className="bg-blue-800 text-white rounded-full p-2 w-7 h-7 flex items-center justify-center">
                1
              </div>
              <p>
                Update your{" "}
                <span className="font-bold">Current scores (out of 15)</span>
              </p>
            </div>
            <div>
              <input
                {...register("currentScores", {
                  valueAsNumber: true,
                })}
                className="border border-blue-400 p-2 rounded"
                type="number"
              />
              {errors.currentScores && (
                <p className="text-red-500 text-[10px]">
                  {errors.currentScores.message}
                </p>
              )}
            </div>
          </div>
          {/* FOOTER BUTTOS */}
          <div className="flex justify-end gap-5 pt-5">
            <button
              onClick={onClose}
              className="border border-blue-800 text-blue-800 p-2 rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="border-2 px-4 border-black text-white p-2 rounded bg-blue-900 flex items-center justify-center gap-3 hover:bg-blue-800"
            >
              Update
              <ArrowRight />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateModal;
