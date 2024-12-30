import React from "react";
import "./InitHeader.css";

const InitHeader = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="init-header">
      <ul>
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

export default InitHeader;