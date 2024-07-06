import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/home.tsx";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./components/layout/layout.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
