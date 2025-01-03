import React from 'react';
import './Header.css';
import LOGO from '../../assets/LOGO.png';

const Header = () => {
  return (
    <header className="header-container">
      {/* Logo Section */}
      <a href="/TechnologyCenter/#/" className="logo-link">
        <img src={LOGO} alt="Columbia Policy Institute" />
      </a>

      {/* Navigation Links */}
      <nav className="nav-links">
        {/* Internal Navigation Links */}
        <a href="/TechnologyCenter/#/initiatives" className="nav-item">
          Initiatives
        </a>
        {/* External Links */}
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