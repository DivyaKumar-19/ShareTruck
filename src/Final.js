import React from 'react';
import './Final.css';


const Final = () => {
    return (
        <div className="final-container">
            <div className="final-content">
                <img 
                  src="https://storage.googleapis.com/desktop-client-assets/images/success.png" 
                  alt="Success"
                  className="final-image"
                />
                <h1>Booking Confirmed!</h1>
                <p>Your booking has been successfully submitted.</p>
            </div>
        </div>
    );
};

export default Final;
