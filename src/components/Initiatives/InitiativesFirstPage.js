import React from "react";
import InitHeader from "./InitHeader/InitHeader"; // Ensure path is correct
import "./InitiativesFirstPage.css";

const InitiativesFirstPage = () => {
  return (
    <div className="initiatives-first-page">
      <div id="top" className="initiative-section">
        <h1 className="initiatives-title">Initiatives</h1>
        <p className="initiatives-description">
          Technology Policy Center leads an initiative every semester focusing
          on technology on campus.
        </p>
      </div>
      <InitHeader />
    </div>
  );
};

export default InitiativesFirstPage;