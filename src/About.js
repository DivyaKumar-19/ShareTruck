import React from 'react';
import './About.css'; // Import the CSS for styling
import MissionSection from './MissionSection';



const About = () => {
  return (
    <div>
    <div className="about-section">
      <div className="about-text">
        
        <h1 className="welcome-text">Welcome to SHARE TRUCK</h1>
        <p className="about-content">
        At SHARE TRUCK, we pride ourselves on being one of the leading transportation companies in the industry. With a rich history of excellence and a commitment to innovation, we have established ourselves as a trusted partner for businesses and individuals seeking reliable and efficient transportation solutions.
        </p>
        <div className="stats-box">
          <div className="stat-item">
            <img src='person.jpg' alt="Choose Product" className="stat-icon" />
            <p className="stat-title">DRIVER</p>
            <p>Our skilled and dedicated drivers ensure safe and efficient transportation of your goods.</p>
          </div>
          <div className="stat-item">
            <img src='truck.avif' alt="Make Payment" className="stat-icon" />
            <p className="stat-title">Make Payment</p>
            <p>Experience a seamless and secure payment process.</p>
          </div>
          <div className="stat-item">
            <img src='location.jpg' alt="Fast Delivery" className="stat-icon" />
            <p className="stat-title">LOCATION</p>
            <p>Our advanced tracking system provides real-time updates for complete peace of mind..</p>
          </div>
        </div>
      </div>
      <div className="image-section">
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4z33Upejuhd3J6eDV1VmPaeIllQGtsFT-zF1T2D6-O_iOD4XwNj6WFs69QWUDOnuYsIU&usqp=CAU' alt="Supermarket 1" className="supermarket-image image-1" />
        <img src='truck2.jpg' alt="Supermarket 2" className="supermarket-image image-2" />
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8GFEAaFVKVyAQERZTsmRG1f8pa7YHpk2srA&s' alt="Supermarket 3" className="supermarket-image image-3" />
        <img src='https://img.freepik.com/premium-vector/cargo-boxed-packages-delivery-concepts_662093-294.jpg' alt="Supermarket 4" className="supermarket-image image-4" />
      </div>
      </div>
      {/* <MissionSection/> */}
      
    </div>
  );
};

export default About;