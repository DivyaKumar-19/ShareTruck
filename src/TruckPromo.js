import React from 'react';
import './TruckPromo.css';
import Primary from './dnav';

const TruckPromo = () => {
  return (
    <div>

    <Primary/>
    <div className="promo-container">
      <div className="text-overlay">
        <div className="text-item">
          <h1>1</h1>
          <p>When it comes to our products and services, contributing to your success is our top priority.</p>
        </div>
        <div className="text-item">
          <h1>2</h1>
          <p>From inventor of the diesel engine to trailblazer for the transport world of tomorrow.</p>
        </div>
        <div className="text-item">
          <h1>3</h1>
          <p>Designed to be functional and suitable for everyday use as well as extremely user-friendly.</p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default TruckPromo;
