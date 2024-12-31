// src/components/Initiatives/Projects/Analytica/AnalyticsTopPage.js

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // to navigate to /columbia-analytics/:id
import graphConfig from "../../../../assets/data/graphConfig.json"; 
import "./AnalyticsTopPage.css";

const AnalyticsTopPage = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // If your graphConfig.json is in src/assets/data, we can import it directly
    // If it's in public/analytica, you'd do a fetch instead.
    setItems(graphConfig);
  }, []);

  return (
    <div className="analytics-top-container">
      {/* Optional gray rectangle or background image */}
      <div className="analytics-header-bg" />
      <h1 className="analytics-heading">Columbia Analytica</h1>

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