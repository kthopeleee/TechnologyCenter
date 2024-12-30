// Initiative.js

import React from "react";
import { useParams } from "react-router-dom";
import initiatives from "../../assets/data/initiatives.json";
import "./Initiative.css";

const Initiative = () => {
  const { id } = useParams();
  const initiative = initiatives.find((item) => item.id === id);

  if (!initiative) {
    return <div className="initiative-page">Initiative not found!</div>;
  }

  const {
    title,
    startTime,
    endTime,
    content,
    demoURLs,
    heroURL,
    centerDirector,
    team
  } = initiative;

  return (
    <div className="initiative-page">
      <div className="initiative-content">
        <h1 className="initiative-title">{title}</h1>
        {startTime && endTime && (
          <p className="initiative-time">{startTime} - {endTime}</p>
        )}
        <p className="initiative-description">{content}</p>

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

        <p className="initiative-director">Center Director: {centerDirector}</p>
        <p className="initiative-team">Team: {team.join(", ")}</p>
      </div>
      {heroURL && (
        <div className="initiative-image">
          <img
            src={heroURL.replace('./assets', './assets/images')}
            alt={`${title} visual`}
          />
        </div>
      )}
    </div>
  );
};

export default Initiative;