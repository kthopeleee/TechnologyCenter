// src/components/Initiatives/InitiativeSlides.js

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import initiativesData from "../../assets/data/initiatives.json";
import "./InitiativeSlides.css";

const InitiativeSlides = () => {
  return (
    <Swiper
      direction="vertical"
      slidesPerView={1}
      mousewheel={true}
      spaceBetween={0}
      loop={false}
    >
      {/* Slide 1: "Top" (intro) */}
      <SwiperSlide>
        <div className="initiative-slide">
          <div className="slide-content">
            <h1 className="initiative-title">Initiatives</h1>
            <p className="initiative-description">
              Technology Policy Center leads an initiative every semester
              focusing on technology on campus.
            </p>
          </div>
        </div>
      </SwiperSlide>

      {/* Slide 2, 3, 4: for each item in JSON (Surveillance / Analytics / QR) */}
      {initiativesData.map((initiative) => (
        <SwiperSlide key={initiative.id}>
          <div className="initiative-slide">
            <div className="slide-content">
              <h1 className="initiative-title">{initiative.title}</h1>
              <p className="initiative-time">
                {initiative.startTime} - {initiative.endTime}
              </p>
              <p className="initiative-description">{initiative.content}</p>

              {/* Demo links */}
              {initiative.demoURLs && initiative.demoURLs.length > 0 && (
                <div className="initiative-links">
                  {initiative.demoURLs.map((link, idx) => (
                    <a
                      key={idx}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="initiative-link"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              )}

              {/* Director + Team */}
              <p className="initiative-director">
                Center Director: {initiative.centerDirector}
              </p>
              <p className="initiative-team">
                Team: {initiative.team.join(", ")}
              </p>
            </div>

            {/* Hero image */}
            {initiative.heroURL && (
              <div className="slide-image">
                <img
                  src={initiative.heroURL}
                  alt={`${initiative.title} visual`}
                />
              </div>
            )}
          </div>
        </SwiperSlide>
      ))}

      {/* Slide 5: "Previous Initiatives" */}
      <SwiperSlide>
        <div className="initiative-slide">
          <div className="slide-content">
            <h1 className="initiative-title">Previous Initiatives</h1>
            <p className="initiative-description">
              Here are past projects that the Technology Policy Center
              has worked on over different semesters.
            </p>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default InitiativeSlides;