import React from "react";
import { Link } from "react-router-dom";
import InitHeader from "./InitHeader/InitHeader";
import initiatives from "../../assets/data/initiatives.json";
import "./InitiativesFirstPage.css";

const InitiativesFirstPage = () => {
  return (
    <div className="initiatives-first-page">
      <div id="top">
        <h1 className="initiatives-title">Initiatives</h1>
        <p className="initiatives-description">
          Technology Policy Center leads initiatives every semester focusing on
          technology on campus.
        </p>
      </div>
      <InitHeader />
      <div className="initiatives-list">
        {initiatives.map((initiative) => (
          <div key={initiative.id} className="initiative-card">
            <h2>{initiative.title}</h2>
            <p>{initiative.content}</p>
            {initiative.hasOwnPage && (
              <Link to={`/initiatives/${initiative.id}`} className="initiative-link">
                View Details
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default InitiativesFirstPage;