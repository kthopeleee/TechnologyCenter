import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom'; // Using HashRouter for GitHub Pages
import Header from './components/Header/Header'; // Main Header
import HeroSection from './components/HeroSection/HeroSection';
import AboutSection from './components/AboutSection/AboutSection';
import InitiativesFirstPage from './components/Initiatives/InitiativesFirstPage'; // Initiatives landing page
import Initiative from './components/Initiatives/Initiative'; // Individual Initiative pages
import InitHeader from './components/Initiatives/InitHeader/InitHeader'; // Initiative-specific header

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
        
        {/* Initiatives First Page */}
        <Route
          path="/initiatives"
          element={
            <>
              <InitHeader /> {/* Display InitHeader here */}
              <InitiativesFirstPage />
            </>
          }
        />

        {/* Individual Initiative Pages */}
        <Route
          path="/initiatives/:id"
          element={
            <>
              <InitHeader /> {/* Display InitHeader here as well */}
              <Initiative />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;