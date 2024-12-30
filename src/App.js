// App.js

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
        {/* This route shows the slideshow of initiatives */}
        <Route path="/initiatives" element={<InitiativesFirstPage />} />

        {/* This route shows the single-initiative page */}
        <Route path="/initiatives/:id" element={<Initiative />} />
      </Routes>
    </Router>
  );
}

export default App;