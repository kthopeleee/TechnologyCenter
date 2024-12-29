import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom'; // Change BrowserRouter to HashRouter
import Header from './components/Header/Header';
import HeroSection from './components/HeroSection/HeroSection';
import AboutSection from './components/AboutSection/AboutSection';
import InitiativesFirstPage from './components/Initiatives/InitiativesFirstPage';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        {/* Single page combining HeroSection and AboutSection */}
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <AboutSection />
            </>
          }
        />
        {/* Initiatives page */}
        <Route path="/initiatives" element={<InitiativesFirstPage />} />
      </Routes>
    </Router>
  );
}

export default App;