import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import Attractions from './pages/Attractions';
import LocalGuides from './pages/LocalGuides';
import NearbyCities from './pages/NearbyCities';
import FoodCulture from './pages/FoodCulture';
import Tips from './pages/Tips';
import Itinerary from './pages/Itinerary';
import Essentials from './pages/Essentials';
import Nightlife from './pages/Nightlife';
import Monetization from './pages/Monetization';
import WorldCup from './pages/WorldCup';
import { Container } from './styles/components';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('dark', darkMode);
  }, [darkMode]);

  return (
    <div>
      <Navbar darkMode={darkMode} toggleDark={() => setDarkMode(!darkMode)} />
      <Container>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/attractions" element={<Attractions />} />
          <Route path="/guides" element={<LocalGuides />} />
          <Route path="/nearby" element={<NearbyCities />} />
          <Route path="/food" element={<FoodCulture />} />
          <Route path="/tips" element={<Tips />} />
          <Route path="/itinerary" element={<Itinerary />} />
          <Route path="/essentials" element={<Essentials />} />
          <Route path="/nightlife" element={<Nightlife />} />
          <Route path="/monetization" element={<Monetization />} />
          <Route path="/worldcup" element={<WorldCup />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
