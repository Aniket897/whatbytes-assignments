import { Loader } from "lucide-react";

const loading = () => {
  return (
    <div className="flex items-center justify-center min-h-[500px]">
      <Loader size={15} className="animate-spin" />
    </div>
  );
};

export default loading;
