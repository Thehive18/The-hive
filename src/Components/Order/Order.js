import React from 'react';
import './Order.scss';

const CallToAction = () => {
  return (
    <div className="call-to-action">
      <div className="cta-content">
        <h1 className="cta-title">Call to Action</h1>
        <p className="cta-description">
          From expert reviews to in-depth guides, we help you start making smarter tech decisions. Start exploring today
        </p>
      
      </div>
      <button className="cta-button">DISCOVER MORE</button>
    </div>
  );
};

export default CallToAction;