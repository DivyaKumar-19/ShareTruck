import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import './BookingList.css';
import PrimarySearch from './cnav';

const BookingList = () => {
  const navigate = useNavigate();

  const handleBookNow = () => {
    navigate('/document-verification');
  };

  return (
    <div>
      <PrimarySearch />
      <main className="booking-list">
        <h1>TODAY'S TRIP</h1>
        {/* Booking Card 1 */}
        <section className="booking-card">
          <div className="booking-details">
            <div className="time-location">
              <span className="time">23:15</span>
            <br></br>
              <span className="time">03:15 +1</span>
            </div>
            <div className="route-button">
              Mumbai
              <span className="arrow">→</span>
              Pune
            </div>
            <div className="ratings">
              <br />
              <button onClick={handleBookNow}>Book now</button>
            </div>
          </div>
          <div className="driver-details">
            <FontAwesomeIcon icon={faTruck} className="truck-icon" />
            <div className="driver-info">
             
              <span className="rating">⭐ ⭐ ⭐ ⭐ 4.5</span>
             
            </div>
            <div className="price">₹580.00</div>
          </div>
        </section>

        {/* Booking Card 2 */}
        <section className="booking-card">
          <div className="booking-details">
            <div className="time-location">
              <span className="time">10:00</span>
             <br></br>
              <span className="time">15:00 +1</span>
            </div>
            <div className="route-button">
              Delhi
              <span className="arrow">→</span>
              Agra
            </div>
            <div className="ratings">
              <br />
              <button onClick={handleBookNow}>Book now</button>
            </div>
          </div>
          <div className="driver-details">
            <FontAwesomeIcon icon={faTruck} className="truck-icon" />
            <div className="driver-info">
            
              <span className="rating">⭐ ⭐ ⭐ ⭐ 4.0</span>
              
            </div>
            <div className="price">₹720.00</div>
          </div>
        </section>

        {/* Booking Card 3 */}
        <section className="booking-card">
          <div className="booking-details">
            <div className="time-location">
              <span className="time">14:00</span>
              <br></br>
              <span className="time">17:00</span>
            </div>
            <div className="route-button">
              Bangalore
              <span className="arrow">→</span>
              Mysore
            </div>
            <div className="ratings">
              <br />
              <button onClick={handleBookNow}>Book now</button>
            </div>
          </div>
          <div className="driver-details">
            <FontAwesomeIcon icon={faTruck} className="truck-icon" />
            <div className="driver-info">
              
              <span className="rating">⭐ ⭐ ⭐ ⭐ 4.2</span>
             
            </div>
            <div className="price">₹650.00</div>
          </div>
        </section>

        {/* Booking Card 4 */}
        <section className="booking-card">
          <div className="booking-details">
            <div className="time-location">
              <span className="time">08:30</span>
             <br></br>
              <span className="time">14:30</span>
            </div>
            <div className="route-button">
              Chennai
              <span className="arrow">→</span>
              Coimbatore
            </div>
            <div className="ratings">
              <br />
              <button onClick={handleBookNow}>Book now</button>
            </div>
          </div>
          <div className="driver-details">
            <FontAwesomeIcon icon={faTruck} className="truck-icon" />
            <div className="driver-info">
              
              <span className="rating">⭐ ⭐ ⭐ ⭐ 4.7</span>
              
            </div>
            <div className="price">₹850.00</div>
          </div>
        </section>

      </main>
    </div>
  );
};

export default BookingList;
