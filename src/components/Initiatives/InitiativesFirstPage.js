import React from 'react';
import Footer from './Footer/Footer'; // Adjust path based on your folder structure
import './InitiativesFirstPage.css';

const InitiativesFirstPage = () => {
  return (
    <div className="initiatives-page">
      <div className="header">
        <h1>Initiatives</h1>
        <p>
          Technology Policy Center leads an initiative every semester focusing 
          on technology on campus.
        </p>
      </div>
      <Footer /> {/* Footer component extracted and added here */}
    </div>
  );
};

export default InitiativesFirstPage;