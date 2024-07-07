import { FC } from "react";

interface Props {
  name: string;
  setAlgorithm: (name: string) => void;
}

export const Algorithm: FC<Props> = ({ name, setAlgorithm }) => {
  return (
    <div
      className="bg-gray-600 py-3 px-2 w-4/5 hover:bg-gray-500 cursor-pointer"
      onClick={() => setAlgorithm(name)}
    >
      <h2 className="text-xl">{name}</h2>
    </div>
  );
};
