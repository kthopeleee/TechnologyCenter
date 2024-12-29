import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import HeroSection from './components/HeroSection/HeroSection';
import AboutSection from './components/AboutSection/AboutSection';
import InitiativesFirstPage from './components/Initiatives/InitiativesFirstPage';

function App() {
  console.log("App rendered with basename /TechnologyCenter");
  return (
    <Router basename="/TechnologyCenter">
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
      </Routes>
    </Router>
  );
}

export default App;