import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home";
import AdPanel from "./components/AdPanel";
import CreateAd from "./components/CreateAd";
import ErrorPage from "./components/ErrorPage";
import ProtectedRoute from "./components/ProtectedRoute";

const App: React.FC = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/ads" element={<ProtectedRoute element={<AdPanel />} />} />
      <Route path="/advertisements/new" element={<ProtectedRoute element={<CreateAd />} />} />
      <Route path="/error" element={<ErrorPage />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  </Router>
);

export default App;

