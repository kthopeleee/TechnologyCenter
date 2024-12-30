// src/components/Initiatives/InitiativesFirstPage.js

import React from "react";
import InitHeader from "./InitHeader/InitHeader";
import InitiativeSlides from "./InitiativeSlides"; // Custom Swiper-based slides
import "./InitiativesFirstPage.css";

const InitiativesFirstPage = () => {
  return (
    <div className="initiatives-first-page">
      {/* 
        We do not show all the content in plain HTML here;
        Instead, we let InitiativeSlides handle each "slide."
        The "InitHeader" is the fixed nav at bottom-left.
      */}
      <InitHeader />
      <InitiativeSlides />
    </div>
  );
};

export default InitiativesFirstPage;