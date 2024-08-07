import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Driver.css';

const Driver = () => {
  const navigate = useNavigate();

  const handlePreviousClick = () => {
    navigate('/booking-list');
  };

  return (
    <div>
      <main className="landing-page">
        <section className="safety1-section">
          <div className="safety1-container">
            <div className="safety1-image-container">
              <img src="https://res.cloudinary.com/dki9kzqm4/image/fetch/c_scale,q_30,w_300,f_auto/https://www.trucksbuses.com/uploads/9587_ed2d9f9e524c44c2b1482f1cecb84beaMahindra-Blazo-55-Truck.jpg" alt="Safety" className="safety-image" />
            </div>
            <div className="safety1-content">
              <h2>TRUCK DETAILS</h2>
              <div className="truck-details-form">
                <div className="form-row">
                  <label><strong>Company Name:</strong></label>
                  <span>Mahindra</span>
                </div>
                <div className="form-row">
                  <label><strong>Truck Number:</strong></label>
                  <span>Blazo 55</span>
                </div>
                <div className="form-row">
                  <label><strong>Further Details:</strong></label>
                  <span>The Mahindra Blazo 55 is known for its robust build and reliability, making it a popular choice for heavy-duty transportation. It features advanced safety mechanisms and fuel efficiency, ensuring a secure and cost-effective journey.</span>
                </div>
                <div className="form-row">
                  <label><strong>Carrying Capacity:</strong></label>
                  <span>The Mahindra Blazo 55 can carry up to 55 tons of cargo, making it ideal for transporting large and heavy loads efficiently.</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="safe1-section">
          <div className="safe1-container">
            <div className="safe1-image-container">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOuxrvcNMfGLh73uKP1QqYpKoCB0JLXiBMvA&s" alt="Safety" className="safety-image" />
            </div>
            <div className="safe1-content">
              <h2>DRIVER DETAILS</h2>
              <div className="truck-details-form">
                <div className="form-row">
                  <label><strong>Name:</strong></label>
                  <span>JOHN</span>
                </div>
                <div className="form-row">
                  <label><strong>Number:</strong></label>
                  <span>7690817263</span>
                </div>
                <div className="form-row">
                  <label><strong>Email:</strong></label>
                  <span>johnjohn@1980</span>
                </div>
                <div className="form-row">
                  <label><strong>Experience:</strong></label>
                  <span>12 years.</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <button className="previous-button" onClick={handlePreviousClick}>Previous</button>
      </main>
    </div>
  );
};

export default Driver;
