// import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import ClientDashboard from "./components/ClientDashboard";
import Error from "./components/Error";
import TransporterDashBoard from "./components/TransporterDashBoard";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="client" element={<ClientDashboard />} />
      <Route path="transporter" element={<TransporterDashBoard />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default App;
