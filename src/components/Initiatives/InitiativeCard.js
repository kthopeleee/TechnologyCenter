import React from "react";
import "./InitiativeCard.css";

const InitiativeCard = ({ title, startTime, endTime, content, demoURLs, heroURL, centerDirector, team }) => {
  return (
    <div className="initiative-card">
      {/* Title and Time */}
      <h2 className="initiative-title">{title}</h2>
      <p className="initiative-time">
        {startTime} - {endTime}
      </p>

      {/* Content */}
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

      {/* Center Director and Team */}
      <p className="initiative-director">Center Director: {centerDirector}</p>
      <p className="initiative-team">Team: {team.join(", ")}</p>

      {/* Hero Image */}
      {heroURL && (
        <div className="initiative-image">
          <img src={heroURL} alt={`${title} visual`} />
        </div>
      )}
    </div>
  );
};

export default InitiativeCard;