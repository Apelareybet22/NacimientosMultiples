import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Benefits from "./pages/Benefits";
import UsefulInformation from "./pages/UsefulInformation"; // Asegúrate de que el nombre sea correcto

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/benefits" element={<Benefits />} />
          <Route path="/usefulinfo" element={<UsefulInformation />} />{" "}
          {/* Usa el componente correcto */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
