import React from 'react';
import './Clanding.css';
import PrimarySearch from './cnav';
import WhyChoose from './Whychoose';
import Footer from './Footer';
import About from './About';
import Contact from './Contact';

const Clanding = () => {
  return (
    <div> 
      <PrimarySearch/>
    <div className="container">
      <div className="background">
        <h1 className="title">FRANCE</h1>
        <h2 className="subtitle">Magnificent Paris</h2>
        <p className="description">Recognizable, lovely, passionate and forever yours...</p>
        <div className="button-group">
          
          {/* <button className="book-btn">Book your trip</button> */}
        </div>
      </div>
      <div className="search-tours">
        <input type="text" placeholder="Select your Departure" />
        <input type="text" placeholder="Select your Destination" />
        <input type="date" placeholder="Departure Date" />
        {/* <input type="number" placeholder="Price From" />
        <input type="number" placeholder="Price To" /> */}
        <button className="search-btn">Search</button>
      </div>
    </div>
    <WhyChoose/>
    <About/>
     <Contact/>
    <Footer/>
    </div>
  );
};

export default Clanding;
