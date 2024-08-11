import React from 'react';
import './Brand.css';

const Brand = () => {
  return (
    <div className="brand-experiences">
      <h1>We partner with brave clients to build brand experiences people love.</h1>
      <div className="cards">
        <div className="card">
          <div className="card-header">01</div>
          <h2>Our Mission</h2>
          <p>
          During your journey, our goal is to ensure a seamless and hassle-free experience. Our services are designed to provide comfort and reliability, ensuring that you can travel without any concerns.
          </p>
        </div>
        <div className="card">
          <div className="card-header">02</div>
          <h2>How We Work</h2>
          <p>
          Our goal is to deliver exceptional service without any inconvenience. Excepteur sint occaecat cupidatat non proident, our team is committed to maintaining the highest standards in the industry, so you can trust us with your transportation needs.
          </p>
        </div>
        <div className="card">
          <div className="card-header">03</div>
          <h2>What We Do</h2>
          <p>
          We take pride in offering reliable transportation services, ensuring every journey is efficient and stress-free. We are dedicated to delivering outstanding service, making your transportation needs our top priority.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Brand;
