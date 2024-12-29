// src/components/HeroSection.js
import React, { useEffect, useState } from 'react';
import './HeroSection.css';
import building1 from '../assets/building1.jpg';
import building2 from '../assets/building2.jpg';
import building3 from '../assets/building3.jpg';
import blue from '../assets/blue.png'; // The blue background rectangle

const HeroSection = () => {
  const images = [building1, building2, building3];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Change the displayed image every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="hero-section">
      <div className="hero-container">
        {/* Overlapping text block with a "blue.png" background */}
        <div 
          className="hero-text-box" 
          style={{ backgroundImage: `url(${blue})` }}
        >
          <h1>Technology Center</h1>
        </div>

        {/* The large circle on the right */}
        <div className="hero-circle">
          <img 
            src={images[currentIndex]} 
            alt="Building" 
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;