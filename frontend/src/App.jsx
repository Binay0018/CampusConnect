import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/DashBoard";
import { store } from "./Store/Store";
import { Provider } from 'react-redux'

function App() {
  return (
   <Router>
  <Navbar />  {/* always visible */}
  <Routes>
    <Route path="/" element={<LandingPage />} />
    <Route path="/login/:role" element={<LoginPage />} />
    <Route path="/dashboard/:role" element={<Dashboard />} />
  </Routes>
</Router>

  );
}

export default App;
