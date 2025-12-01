import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./pages/Deshboard";
import Login from "./pages/Login"; 

export default function App() {
  return (
    <div className="min-h-screen text-slate-900 dark:text-slate-100">
      {/* animated bg + blobs */}
      <div className="app-bg"></div>
      <div className="blob one animate-hue"></div>
      <div className="blob two animate-hue"></div>
      <div className="blob three animate-hue"></div>

      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}
