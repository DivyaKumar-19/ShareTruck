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
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className="card">
          <div className="card-header">02</div>
          <h2>How We Work</h2>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className="card">
          <div className="card-header">03</div>
          <h2>What We Do</h2>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Brand;
