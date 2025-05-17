import React from "react";
import { Billboard as BillboardType } from "@/types";

interface BillboardProps {
  data: BillboardType;
}

const Billboard: React.FC<BillboardProps> = ({ data }) => {
  return (
    <div className="p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden">
      <div
        style={{ backgroundImage: `url(${data.imageUrl})` }}
        className="rounded-xl relative aspect-square md:aspect-[2.4/1] bg-cover overflow-hidden"
      >
        <div className="flex flex-col items-center justify-center text-center gap-y-8 h-full w-full">
          <div className="font-bold text-3xl sm:text-5xl lg:text-6xl max-w-xs sm:max-w-xl">
            {data.label}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Billboard;
