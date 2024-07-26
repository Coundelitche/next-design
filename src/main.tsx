import React from "react";
import ReactDOM from "react-dom/client";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "../app/globals.css";
import App from "./App.tsx";
import BuyPage from "./BuyPage.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/buy" element={<BuyPage />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
