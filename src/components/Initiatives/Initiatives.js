import React from "react";
import { useParams } from "react-router-dom";
import initiatives from "../../data/initiatives.json"; // Load initiatives JSON
import "./Initiative.css";

const Initiative = () => {
  const { id } = useParams(); // Get the initiative ID from the URL
  const initiative = initiatives.find((item) => item.id === id);

  if (!initiative) {
    return <div>Initiative not found!</div>;
  }

  const { title, startTime, endTime, content, demoURLs, heroURL, centerDirector, team } = initiative;

  return (
    <div className="initiative-page">
      <div className="initiative-content">
        <h1>{title}</h1>
        <p className="initiative-time">
          {startTime} - {endTime}
        </p>
        <p>{content}</p>
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
      <div className="initiative-image">
        <img src={heroURL} alt={`${title} visual`} />
      </div>
    </div>
  );
};

export default Initiative;