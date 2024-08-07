import React from 'react';
import './AutoRoad.css';

const AutoRoad = () => {
  return (
    <div className="auto-road">
      <div className="main-content">
        <div className="text-content">
          <h1>Now It's easy for you to book transport</h1>
          {/* <p>
            Whether you need to move goods across the city or to another state, our platform connects you with reliable transport services. Experience a hassle-free booking process with real-time tracking and secure payments.
          </p> */}
          <button>Easy steps for booking transport</button>
        </div>
        {/* <div className="form-container">
          <h2>Plan your transport</h2>
          <form>
            <label>PICK-UP LOCATION</label>
            <input type="text" placeholder="City, Warehouse, etc." />
            <label>DROP-OFF LOCATION</label>
            <input type="text" placeholder="City, Warehouse, etc." />
            <label>PICK-UP DATE</label>
            <input type="date" />
            <label>DROP-OFF DATE</label>
            <input type="date" />
            <label>PICK-UP TIME</label>
            <input type="time" />
            <button type="submit">POST</button>
          </form>
         </div> */}
      </div>
    </div>
  );
};

export default AutoRoad;
