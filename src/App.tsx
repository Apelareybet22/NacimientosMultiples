import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Benefits from './pages/Benefits';
import Credential from './pages/Credential';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/benefits" element={<Benefits />} />
          <Route path="/credential" element={<Credential />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;