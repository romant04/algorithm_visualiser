import { FC } from "react";
import logo from "/logo.png";

export const Navbar: FC = () => {
  return (
    <header className="bg-black/20 w-full py-3 px-5 nav">
      <div className="flex items-center gap-5">
        <img src={logo} alt="logo" width={48} />
        <h1 className="text-2xl text-emerald-400">Algorithm visualiser</h1>
      </div>
    </header>
  );
};
