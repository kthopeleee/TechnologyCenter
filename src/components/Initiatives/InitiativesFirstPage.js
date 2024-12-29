import React from 'react';
import Footer from './Footer/Footer';
import './InitiativesFirstPage.css';

const InitiativesFirstPage = () => {
  console.log("InitiativesFirstPage rendered");
  return (
    <div className="initiatives-page">
      <div className="header">
        <h1>Initiatives</h1>
        <p>
          Technology Policy Center leads an initiative every semester focusing on technology on campus.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default InitiativesFirstPage;