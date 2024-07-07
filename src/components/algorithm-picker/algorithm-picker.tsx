import { FC, useState } from "react";
import { ALGORITHMS } from "../../constants/algorithms.ts";
import { Algorithm } from "./algorithm.tsx";
import Highlight from "react-highlight";

export const AlgorithmPicker: FC = () => {
  const [chosenAlgorithm, setChosenAlgorithm] = useState<string | null>(null);

  return (
    <>
      {chosenAlgorithm ? (
        <div className="py-4 px-2 h-full bg-black/10 flex flex-col items-center">
          <h2 className="text-3xl text-center pb-2">{chosenAlgorithm}</h2>
          <div className="w-full">
            <Highlight className="javascript">
              {
                ALGORITHMS.find(
                  (algorithm) => algorithm.name === chosenAlgorithm
                )?.content
              }
            </Highlight>
          </div>
          <button
            className="bg-emerald-400 w-3/4 px-4 py-2 mt-5 rounded-sm text-gray-800 font-semibold mx-auto hover:bg-emerald-300"
            onClick={() => setChosenAlgorithm(null)}
          >
            Back
          </button>
        </div>
      ) : (
        <div className="bg-black/10 px-2 py-4 h-full">
          <h2 className="text-3xl text-center pb-8">
            Choose algorithm to visualize
          </h2>
          <div className="w-full flex flex-col items-center gap-5">
            {ALGORITHMS.map((algorithm) => (
              <Algorithm
                key={algorithm.name}
                name={algorithm.name}
                setAlgorithm={setChosenAlgorithm}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
};
