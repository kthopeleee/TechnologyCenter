import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import HeroSection from './components/HeroSection/HeroSection';
import AboutSection from './components/AboutSection/AboutSection';
import InitiativesFirstPage from './components/Initiatives/InitiativesFirstPage';
import Initiative from './components/Initiatives/Initiative';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <AboutSection />
            </>
          }
        />
        <Route path="/initiatives" element={<InitiativesFirstPage />} />
        <Route path="/initiatives/:id" element={<Initiative />} />
      </Routes>
    </Router>
  );
}

export default App;