import { Routes, Route } from "react-router-dom";
import './App.css'
import Navbar from "./components/Navbar";

import LocationsPage from "./pages/LocationsPage";
import EpisodiesPage from "./pages/EpisodiesPage";
import HomePage from "./pages/HomePage";
import Characters from "./pages/Characters";

function App() {
  return (
    <div className="section-page">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/characters" element={<HomePage />} />
        <Route path="/characters/:id" element={<Characters />} />
        <Route path="locations" element={<LocationsPage />} />
        <Route path="episodies" element={<EpisodiesPage />} />
      </Routes>
    </div>
  );
}

export default App;