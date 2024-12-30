import React from "react";
import InitiativesList from "./InitiativesList";
import "./PreviousInitiatives.css";

const PreviousInitiatives = () => {
  return (
    <div className="previous-initiatives-page">
      <h1>Previous Initiatives</h1>
      <InitiativesList />
    </div>
  );
};

export default PreviousInitiatives;