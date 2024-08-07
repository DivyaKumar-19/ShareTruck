// import React from 'react';
import './LandingPage.css';

import Contact from './Contact';
import MissionSection from './MissionSection';
import TravelApp from './TravelApp';
import Primary from './dnav';
import AutoRoad from './AutoRoad';
import OfferRide from './OfferRide';
import Brand from './Brand';
import Features from './Features';
import Footer from './Footer';
import Ride from './Ride';
import React, { useRef } from 'react';
const LandingPage = () => {
  // const featuresRef = useRef(null);
  return (
    <div>
      <Primary/>
      <main className="landing-page">
        {/* <section className="hero-section">
          <div className="hero-content">
            <h1>Welcome to SHARE TRUCK</h1>
            <p>Share your goods, save money, and Transport.</p>
            <button className="cta-button">Get Started</button>

        <section className="search-section">
          <div className="search-container">
            <div className="search-input">
              <label htmlFor="from">Leave From</label>
              <input type="text" id="from" placeholder="Departure location" />
            </div>
            <div className="search-input">
              <label htmlFor="to">Going To</label>
              <input type="text" id="to" placeholder="Destination" />
            </div>
            <div className="search-input">
              <label htmlFor="date">Select Date</label>
              <input type="date" id="date" />
            </div>
            <button className="search-button">Search</button>
          </div>
        </section>
           </div>
        </section> */}
      
        {/* <section className="safety-section">
          <div className="safety-container">
          <div className="safety-image-container">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt9IhPJFFATdj1bZLiK-I9unIskIL3WFU1jQ&s" alt="Safety" className="safety-image" />
          </div>
          <div className="safety-content">
          <h2>Help Us Keep You Safe from Scams</h2>
          <p>Your safety is our top priority. We strive to make BlaBlaCar a safe and trustworthy platform for everyone. Always use BlaBlaCar's secure payment methods, check profiles and reviews of drivers and passengers, and never share personal information with strangers. If something seems suspicious, report it immediately.</p>
          <button className="cta-button">Learn More</button>
          </div>
          </div>
          </section> */}
          {/* <MissionSection/>   */}
        {/* <OfferRide/> */}
        {/* <section className="safe-section">
          <div className="safe-container">
          <div className="safe-image-container">
          <img src="https://www.shutterstock.com/image-photo/outside-logistics-distributions-warehouse-diverse-600nw-2042952425.jpg" alt="Safety" className="safety-image" />
          </div>
          <div className="safe-content">
          <h2>Where is my Truck?</h2>
          <p> Eager to know the status of your shipment? Our advanced tracking system allows you to monitor the real-time location of your truck. Simply enter your tracking number to get instant updates on the whereabouts of your goods. With our reliable tracking service, you can stay informed and ensure that your shipment is on schedule. Experience peace of mind with SHARE TRUCK, where transparency and efficiency are our top priorities.</p>
          <button className="ct-button">Offer Ride</button>
          </div>
          </div>
          </section> */}
        {/* <section className="popular-routes-section">
  <div className="popular-routes-container">
  <div className='para'>
  <h2>POPULAR TRAVEL ROUTE</h2>
  </div>
  <div className="popular-routes-columns">
  <div className="popular-routes-column">
  <button className="route-button">
  New York 
  <span className="arrow">→</span>
  Washington
  </button>
  <button className="route-button">
  Los Angeles 
  <span className="arrow">→</span>
  San Francisco
  </button>
  <button className="route-button">
  Chicago 
  <span className="arrow">→</span>
  Detroit
  </button>
  </div>
  <div className="popular-routes-column">
  <button className="route-button">
  Houston 
  <span className="arrow">→</span>
  Dallas
  </button>
  <button className="route-button">
  Miami 
  <span className="arrow">→</span>
  Orlando
  </button>
  <button className="route-button">
  San Diego   
  <span className="arrow">→</span>
  Phoenix
  </button>
  </div>
  </div>
  </div>
  </section> */}

        
        {/* <section className="popular-routes-section">
          <div className="popular-routes-container">
          <div className='para'>
          
          <p>
          <h2>POPULAR TRAVEL ROUTE </h2>
          </p>
          </div>
          <div className="popular-routes-column">
          <button className="route-button">
          New York 
          <span className="arrow">→</span>
          Washington D.C
          </button>
          <button className="route-button">
          Los Angeles 
          <span className="arrow">→</span>
          San Fransico
          </button>
          <button className="route-button">
          Chicago 
          <span className="arrow">→</span>
          Detroit
          </button>
          </div>
          <div className="popular-routes-column">
          <button className="route-button">
          Houston 
          <span className="arrow">→</span>
          Dallas
          </button>
          <button className="route-button">
          Miami 
          <span className="arrow">→</span>
          Orlando
          </button>
          <button className="route-button">
          SanDiego   
          <span className="arrow">→</span>
          Phoenix
          </button>
          </div>
          </div>
          </section> */}
        {/* <footer className="footer">
      <div className="footer-container">
      <div className="footer-section">
      <h4>About SHARE TRUCK</h4>
      <p>Reliable transportation solutions with real-time tracking and dedicated support.</p>
      </div>
      <div className="footer-section">
      <h4>Quick Links</h4>
      <ul>
      <li><a href="#about">About Us</a></li>
      <li><a href="#contact">Contact Us</a></li>
      <li><a href="#faq">FAQ</a></li>
      <li><a href="#terms">Terms of Service</a></li>
      <li><a href="#privacy">Privacy Policy</a></li>
      </ul>
      </div>
      <div className="footer-section">
      <h4>Contact Us</h4>
      <p>Email: support@blablacar.com</p>
      <p>Phone: +123 456 7890</p>
      </div>
      <div className="footer-section">
      <h4>Newsletter</h4>
      <form className="newsletter-form">
      <input type="email" placeholder="Enter your email" />
      <button type="submit">Subscribe</button>
      </form>
      </div>
      </div>
      <div className="footer-bottom">
      <div className="footer-social">
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
      </div>
      
      </div>
      </footer> */}
        <AutoRoad/>
      <Brand/>
        <Ride/>
        <Features />
        {/* <Primary featuresRef={featuresRef} /> 
      <div ref={featuresRef}>
      </div> */}
    <Footer/>
      </main>
      
    </div>
  );
};

export default LandingPage;

