interface ProgressbarProps {
  percentage: number;
}

const Progressbar = ({ percentage }: ProgressbarProps) => {
  const bgColor =
    percentage >= 90
      ? "bg-green-100"
      : percentage >= 80
      ? "bg-blue-100"
      : percentage >= 50
      ? "bg-orange-100"
      : "bg-red-100";

  const ProgressbarColor =
    percentage >= 90
      ? "bg-green-500"
      : percentage >= 80
      ? "bg-blue-500"
      : percentage >= 50
      ? "bg-orange-500"
      : "bg-red-500";

  const textColor =
    percentage >= 90
      ? "text-green-500"
      : percentage >= 80
      ? "text-blue-500"
      : percentage >= 50
      ? "text-orange-500"
      : "text-red-500";

  const width = percentage + "%";

  return (
    <div className="flex items-center justify-between gap-5">
      <div
        className={`h-[10px] overflow-hidden rounded-full flex-1 ${bgColor}`}
      >
        <div className={`h-full ${ProgressbarColor}`} style={{ width }}></div>
      </div>
      <p className={`${textColor}`}>{width}</p>
    </div>
  );
};

export default Progressbar;
