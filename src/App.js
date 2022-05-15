import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import Dashboard from "./components/Dashboard";
import Error from "./components/Error";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default App;
