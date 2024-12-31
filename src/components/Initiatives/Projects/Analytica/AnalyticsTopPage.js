// src/components/Initiatives/Projects/Analytica/AnalyticsTopPage.js

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // to navigate to /columbia-analytics/:id
import graphConfig from "../../../../assets/data/graphConfig.json"; 
import "./AnalyticsTopPage.css";

const AnalyticsTopPage = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Load graphConfig data
    setItems(graphConfig);
  }, []);

  return (
    <div className="analytics-top-container">
      {/* Optional gray rectangle or background image */}
      <div className="analytics-header-bg" />
      
      {/* Link the heading */}
      <h1 className="analytics-heading">
        <Link to="/initiatives/columbia-analytics">
          Columbia Analytica
        </Link>
      </h1>

      {/* List of items with links to /initiatives/columbia-analytics/:id */}
      <div className="analytics-list-container">
        {items.map((item) => (
          <Link
            key={item.id}
            className="analytics-item"
            to={`/initiatives/columbia-analytics/${item.id}`}
          >
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AnalyticsTopPage;