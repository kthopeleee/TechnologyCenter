// InitiativeSlides.js (Swiper 9+ example)
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel } from "swiper/modules";

import "swiper/swiper-bundle.css";
import initiativesData from "../../assets/data/initiatives.json";
import "./InitiativeSlides.css";

const InitiativeSlides = () => {
  return (
    <Swiper
      modules={[Mousewheel]}
      direction="vertical"
      mousewheel
      slidesPerView={1}
      spaceBetween={0}
      loop={false}
    >
      {/* Slide 1: Intro */}
      <SwiperSlide>
        <div className="initiative-slide">
          <div className="slide-content">
            <h1 className="initiative-title">Initiatives</h1>
            <p className="initiative-description">
              Technology Policy Center leads an initiative every semester...
            </p>
          </div>
        </div>
      </SwiperSlide>

      {/* Slides for your JSON data */}
      {initiativesData.map((initiative) => (
        <SwiperSlide key={initiative.id}>
          <div className="initiative-slide">
            <div className="slide-content">
              <h1 className="initiative-title">{initiative.title}</h1>
              <p className="initiative-time">
                {initiative.startTime} - {initiative.endTime}
              </p>
              <p className="initiative-description">{initiative.content}</p>
              {/* ... etc ... */}
            </div>

            {initiative.heroURL && (
              <div className="slide-image">
                <img src={initiative.heroURL} alt={initiative.title} />
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
              Past projects...
            </p>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default InitiativeSlides;