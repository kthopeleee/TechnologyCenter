// src/components/HeroSection.js
import React, { useEffect, useState } from "react";
import "./HeroSection.css";

// Example rotating images
import screenshot1 from "../assets/screenshot1.png";
import screenshot2 from "../assets/screenshot2.png";

const HeroSection = () => {
  const images = [screenshot1, screenshot2];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Rotate background image every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section
      className="hero-section"
      style={{
        backgroundImage: `url(${images[currentIndex]})`,
      }}
    >
      <div className="dark-rectangle">
        <h1 className="technology-center">Technology Center</h1>
      </div>
    </section>
  );
};

export default HeroSection;