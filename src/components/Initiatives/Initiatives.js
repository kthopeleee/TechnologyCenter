import React from "react";
import initiativesData from "../../data/initiatives.json";
import InitiativeCard from "./InitiativeCard";
import "./Initiatives.css";

const Initiatives = () => {
  return (
    <div className="initiatives-page">
      <div id="top" className="initiative-section">
        <h1>Welcome to Initiatives</h1>
      </div>

      {initiativesData.map((initiative) => (
        <div id={initiative.id} className="initiative-section" key={initiative.id}>
          <InitiativeCard {...initiative} />
        </div>
      ))}

      <div id="previous-initiatives" className="initiative-section">
        <h2>Previous Initiatives</h2>
        {/* Render cards for previous initiatives here */}
      </div>
    </div>
  );
};

export default Initiatives;