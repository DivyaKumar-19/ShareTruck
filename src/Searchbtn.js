import React from 'react';
import './Searchbtn.css';
import PrimarySearch from './cnav';
import Primary from './dnav';

const Searchbtn = () => {
  return (
    <div> 
      <PrimarySearch/>
      <div className="search-tour1">
        <input type="text" placeholder="Select your Departure" />
        <input type="text" placeholder="Select your Destination" />
        <input type="date" placeholder="Departure Date" />
        <button className="search-btn">Update</button>
      </div>
    </div>
  );
};

export default Searchbtn;
