// src/Booking.js

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import './BookingList.css';

const Booking = () => {
  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate('/driver');
  };

  const handleBookNow = () => {
    navigate('/clienttestimonials');
  };

  return (
    <main className="booking-list">
      <h1>TODAY'S TRIP</h1>
      <section className="booking-card">
        <div className="booking-details">
          <div className="time-location">
            <span className="time">23:15</span>
            <span className="duration">4h00</span>
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
            <span className="driver-name">Chand</span>
            <span className="rating">⭐ ⭐ ⭐ ⭐ 4.5</span>
            <span>Instant Booking</span>
          </div>
          <div className="price">₹580.00</div>
        </div>
      </section>

      <section className="booking-card">
        <div className="booking-details">
          <div className="time-location">
            <span className="time">23:20</span>
            <span className="duration">3h30</span>
            <span className="time">02:50 +1</span>
          </div>
          <div className="route-button">
            Bangalore
            <span className="arrow">→</span>
            Chennai
          </div>
          <div className="ratings">
            <br />
            <button onClick={handleBookNow}>Book now</button>
          </div>
        </div>
        <div className="driver-details">
          <FontAwesomeIcon icon={faTruck} className="truck-icon" />
          <div className="driver-info">
            <span className="driver-name">Mahendra</span>
            <span className="rating">⭐ ⭐ ⭐ 3.8</span>
            <span>Instant Booking</span>
          </div>
          <div className="price">₹460.00</div>
        </div>
      </section>

      <section className="booking-card">
        <div className="booking-details">
          <div className="time-location">
            <span className="time">23:15</span>
            <span className="duration">4h00</span>
            <span className="time">03:15 +1</span>
          </div>
          <div className="route-button">
            Delhi
            <span className="arrow">→</span>
            Jaipur
          </div>
          <div className="ratings">
            <br />
            <button onClick={handleBookNow}>Book now</button>
          </div>
        </div>
        <div className="driver-details">
          <FontAwesomeIcon icon={faTruck} className="truck-icon" />
          <div className="driver-info">
            <span className="driver-name">Chand</span>
            <span className="rating">⭐ ⭐ ⭐ ⭐ 4.5</span>
            <span>Instant Booking</span>
          </div>
          <div className="price">₹580.00</div>
        </div>
      </section>

      <section className="booking-card">
        <div className="booking-details">
          <div className="time-location">
            <span className="time">23:15</span>
            <span className="duration">4h00</span>
            <span className="time">03:15 +1</span>
          </div>
          <div className="route-button">
            Hyderabad
            <span className="arrow">→</span>
            Delhi
          </div>
          <div className="ratings">
            <br />
            <button onClick={handleBookNow}>Book now</button>
          </div>
        </div>
        <div className="driver-details">
          <FontAwesomeIcon icon={faTruck} className="truck-icon" />
          <div className="driver-info">
            <span className="driver-name">Chand</span>
            <span className="rating">⭐ ⭐ ⭐ ⭐ 4.5</span>
            <span>Instant Booking</span>
          </div>
          <div className="price">₹580.00</div>
        </div>
      </section>

      {/* Repeat the above section for other bookings */}
    </main>
  );
};

export default Booking;
