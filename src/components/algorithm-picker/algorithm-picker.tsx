import { FC } from "react";
import { ALGORITHMS } from "../../constants/algorithms.ts";
import { Algorithm } from "./algorithm.tsx";

export const AlgorithmPicker: FC = () => {
  return (
    <div className="bg-black/30 px-2 py-4 h-full">
      <h2 className="text-3xl text-center pb-8">
        Choose algorithm to visualize
      </h2>
      <div className="w-full flex flex-col items-center gap-5">
        {ALGORITHMS.map((algorithm) => (
          <Algorithm key={algorithm} name={algorithm} />
        ))}
      </div>
    </div>
  );
};
