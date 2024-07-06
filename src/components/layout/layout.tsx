import { FC } from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "./navbar.tsx";

export const Layout: FC = () => {
  return (
    <div className="main_layout">
      <Navbar />
      <Outlet />
    </div>
  );
};
