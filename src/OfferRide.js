import React from 'react';
import { Link } from 'react-router-dom';
import './AutoRoad.css';
import Primary from './dnav';

const AutoRoad = () => {
  return (
    <div> 
      <Primary/> 
    <div className="auto-road">
      {/* <header className="auto-road-header">
        <div className="logo">AUTOROAD</div>
        <nav>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Pricing</li>
            <li>Our Car</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header> */}
      <div className="main-content">
        {/* <div className="text-content">
          <h1>Now It's easy for you to rent a car</h1>
          <p>
            A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts.
          </p>
          <button>Easy steps for renting a car</button>
        </div> */}
        <div className="form-container">
          <h2>Make your trip</h2>
          <form>
            <label>PICK-UP LOCATION</label>
            <input type="text" placeholder="City, Airport, Station, etc" />
            <label>DROP-OFF LOCATION</label>
            <input type="text" placeholder="City, Airport, Station, etc" />
            <label>PICK-UP DATE</label>
            <input type="date" />
            <label>DROP-OFF DATE</label>
            <input type="date" />
            <label>PICK-UP TIME</label>
            <input type="time" />
            <Link to="/driverride">
            <button type="submit">POST</button>
            </Link>
          </form>
        </div>
      </div>
    </div>
    </div>
  );
};

export default AutoRoad;
