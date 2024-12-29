// src/components/AboutSection.js
import React from 'react';
import './AboutSection.css';

// Use placeholders for the images
import cpiLogo from '../../assets/LOGO.png';  // or your actual CPI logo
import orangeImg from '../../assets/orange.png';  // placeholder for paper published

const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        {/* Left side: Title + paragraphs */}
        <div className="about-text">
          <h2>Who we are</h2>
          <p>
            We are the technology center who do cool things and do research. 
            Our goal is to do something around technology on campus and make policy.
          </p>
          <p>
            We are part of the Columbia Policy Institute. 
            Our most recent review we published...
          </p>
        </div>

        {/* Right side: Two images (or placeholders) */}
        <div className="about-images">
          {/* CPI logo, linked to the CPI website */}
          <a 
            href="https://www.columbiapolicyinstitute.org/" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <img 
              src={cpiLogo} 
              alt="Columbia Policy Institute" 
              className="cpi-logo"
            />
          </a>

          {/* Paper published placeholder (orange.png) */}
          <div className="paper-box">
            <img 
              src={orangeImg} 
              alt="Paper published placeholder" 
              className="placeholder-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;