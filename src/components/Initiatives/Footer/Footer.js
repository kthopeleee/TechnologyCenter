import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom'; // For navigation links

const Footer = () => {
  return (
    <footer className="footer">
      <nav className="footer-nav">
        <Link to="/initiatives" className="footer-link">Initiatives</Link>
        <Link to="/about" className="footer-link">About</Link>
        <Link to="/contact" className="footer-link">Contact</Link>
        <Link to="/TechnologyCenter" className="footer-link">Home</Link>
      </nav>
    </footer>
  );
};

export default Footer;