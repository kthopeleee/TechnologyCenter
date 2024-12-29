// src/components/AboutSection.js
import React from 'react';
import './AboutSection.css';
import LOGO from '../assets/LOGO.png';

const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="about-content">
        {/* Left side text */}
        <div className="about-text">
          <h2>Who we are</h2>
          <p>
            We are the technology center who do cool things and do research. 
            Our goal is to do something around technology on campus and make policy.
          </p>
          <p>We are part of the Columbia Policy Institute.</p>
          <p>Our most recent review we published...</p>
        </div>

        {/* Right side: CPI logo + Paper box */}
        <div className="about-logos">
          <div className="cpi-logo-2">
            <img src={LOGO} alt="Columbia Policy Institute" />
          </div>
          <div className="paper-box">
            Paper published
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;