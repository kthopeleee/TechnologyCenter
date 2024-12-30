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
        <li onClick={() => navigateToPage("top")}>Top</li>
        <li onClick={() => navigateToPage("columbia-surveillance")}>
          Columbia Surveillance
        </li>
        <li onClick={() => navigateToPage("columbia-analytics")}>
          Columbia Analytics
        </li>
        <li onClick={() => navigateToPage("qr-code-risk")}>QR Code Risk</li>
        <li onClick={() => navigateToPage("previous-initiatives")}>
          Previous Initiatives
        </li>
      </ul>
    </div>
  );
};

export default InitHeader;