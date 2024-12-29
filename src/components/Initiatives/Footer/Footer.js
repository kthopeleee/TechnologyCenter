import React from "react";
import "./Footer.css";

const Footer = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="footer">
      <ul className="footer-list">
        <li onClick={() => scrollToSection("top")}>Top</li>
        <li onClick={() => scrollToSection("columbia-surveillance")}>
          Columbia Surveillance
        </li>
        <li onClick={() => scrollToSection("columbia-analytics")}>
          Columbia Analytics
        </li>
        <li onClick={() => scrollToSection("qr-code-risk")}>QR Code Risk</li>
        <li onClick={() => scrollToSection("previous-initiatives")}>
          Previous Initiatives
        </li>
      </ul>
    </div>
  );
};

export default Footer;