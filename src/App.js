import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom'; // Use HashRouter for GitHub Pages compatibility
import Header from './components/Header/Header'; // Assuming a separate Header component
import HeroSection from './components/HeroSection/HeroSection'; // HeroSection file
import AboutSection from './components/AboutSection/AboutSection'; // AboutSection file
import InitiativesFirstPage from './components/Initiatives/InitiativesFirstPage'; // Initiatives main page
import Initiative from './components/Initiatives/Initiative'; // Individual Initiative pages

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <AboutSection />
            </>
          }
        />
        {/* Initiatives Page */}
        <Route path="/initiatives" element={<InitiativesFirstPage />} />
        {/* Individual Initiative Pages */}
        <Route path="/initiatives/:id" element={<Initiative />} />
      </Routes>
    </Router>
  );
}

export default App;