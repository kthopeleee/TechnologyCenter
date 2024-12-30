import React from "react";
import "./InitiativeCard.css";

const InitiativeCard = ({ title, time, content, hasOwnPage, demoURLs, heroURL }) => {
  return (
    <div className="initiative-card">
      {/* Title Section */}
      <h2 className="initiative-title">{title}</h2>

      {/* Time Section */}
      <p className="initiative-time">{time}</p>

      {/* Content Section */}
      <p className="initiative-content">{content}</p>

      {/* Demo Links */}
      <div className="initiative-links">
        {demoURLs.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="initiative-link"
          >
            {link.label}
          </a>
        ))}
      </div>

      {/* Image Section */}
      <div className="initiative-image">
        <img src={heroURL} alt={`${title} visual`} />
      </div>
    </div>
  );
};

export default InitiativeCard;