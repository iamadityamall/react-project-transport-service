
import { Routes, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import ClientDashboard from "./components/ClientDashboard";
import Error from "./components/Error";
import TransporterDashBoard from "./components/TransporterDashBoard";
import Upload from "./components/Upload"

const App = () => {
  
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="client" element={<ClientDashboard />} />
      <Route path="transporter" element={<TransporterDashBoard />} />
      <Route path="upload" element={<Upload />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default App;
