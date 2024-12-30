// src/components/Initiatives/InitHeader/InitHeader.js

import React from "react";
import { useNavigate } from "react-router-dom";
import "./InitHeader.css";

const InitHeader = () => {
  const navigate = useNavigate();

  const navigateToPage = (id) => {
    navigate(`/initiatives/${id}`);
  };

  return (
    <div className="init-header">
      <ul>
        {/* "Top" goes to the multi-slide view */}
        <li onClick={() => navigate("/initiatives")}>Top</li>

        {/* Single-initiative routes */}
        <li onClick={() => navigateToPage("columbia-surveillance")}>
          Columbia Surveillance
        </li>
        <li onClick={() => navigateToPage("columbia-analytics")}>
          Columbia Analytics
        </li>
        <li onClick={() => navigateToPage("qr-code-risk")}>QR Code Risk</li>

        {/* Possibly a single route or separate page for previous-initiatives */}
        <li onClick={() => navigateToPage("previous-initiatives")}>
          Previous Initiatives
        </li>
      </ul>
    </div>
  );
};

export default InitHeader;