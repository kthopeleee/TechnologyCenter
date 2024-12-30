import React from "react";
import initiativesData from "../../data/initiatives.json";
import InitiativeCard from "./InitiativeCard";

const InitiativesList = () => {
  return (
    <div className="initiatives-list">
      {initiativesData.map((initiative, index) => (
        <InitiativeCard
          key={index}
          title={initiative.title}
          time={initiative.time}
          content={initiative.content}
          hasOwnPage={initiative.hasOwnPage}
          demoURLs={initiative.demoURLs}
          heroURL={initiative.heroURL}
        />
      ))}
    </div>
  );
};

export default InitiativesList;