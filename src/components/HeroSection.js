import React, { useEffect, useState } from 'react';
import './HeroSection.css';
import blueBackground from '../assets/blue.png';
import building1 from '../assets/building1.jpg';
import building2 from '../assets/building2.jpg';
import orange from '../assets/orange.png'; // example third image

const HeroSection = () => {
  // Array of images to rotate
  const rotatingItems = [building1, building2, orange];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Rotate images every 2.5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % rotatingItems.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [rotatingItems.length]);

  const currentSrc = rotatingItems[currentIndex];

  return (
    <section className="hero-section">
      <div className="circle-wrapper">
        {/* The large rotating circle */}
        <img 
          src={currentSrc} 
          alt="Rotating" 
          className="hero-circle" 
        />
        
        {/* The overlaid text with a blue background image */}
        <div 
          className="text-overlay"
          style={{ backgroundImage: `url(${blueBackground})` }}
        >
          <h1>Technology Center</h1>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;