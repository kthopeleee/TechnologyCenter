// src/components/Header.js
import React from 'react';
import './Header.css';
import LOGO from '../assets/LOGO.png';

const Header = () => {
  return (
    <header className="header-container">
      {/* Left logo → homepage */}
      <a href="/" className="logo-link">
        <img src={LOGO} alt="Columbia Policy Institute" />
      </a>

      {/* Right nav links */}
      <nav className="nav-links">
        <a href="/initiatives" className="nav-item">Initiatives</a>
        <a 
          href="https://www.columbiapolicyinstitute.org/contact-us" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="nav-item"
        >
          Contact Us
        </a>
        <a 
          href="https://www.columbiapolicyinstitute.org/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="nav-item"
        >
          CPI Website
        </a>
      </nav>
    </header>
  );
};

export default Header;