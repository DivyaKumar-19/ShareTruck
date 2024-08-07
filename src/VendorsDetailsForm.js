import React, { useState } from 'react';
import './VendorsDetailsForm.css';
import { Link } from 'react-router-dom';
import Primary from './dnav';

const VendorsDetailsForm = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div>  
      <Primary/>
    
    <div className="signup-container">
      <div className="info-section">
        <h1>Opportunity is everywhere</h1>
        <p>Make the most of your time on the road on the platform with the largest network of active riders.</p>
        <div className="driver-image">
          <img src="truck3.jpg" alt="Driver" /> 
        </div>
      </div>
      <div className="form-section">
        <h2>Become a driver</h2>
        <div className="radio-buttons">
          <label>
            <input type="radio" name="car_option" value="have_car" /> I have a truck
          </label>
          <label>
            <input type="radio" name="car_option" value="need_car" /> I need a truck
          </label>
        </div>
        <form className="form">
          <input type="text" className="input" placeholder="First name" required />
          <input type="text" className="input" placeholder="Last name" required />
          <input type="email" className="input" placeholder="Email" required />
          <input type="password" className="input" placeholder="Password" required />
          {/* <div className="input-group">
            <input
              type={passwordVisible ? "text" : "password"}
              className="input"
              placeholder="Password"
              required
            />
            <button
              type="button"
              className="toggle-password"
              onClick={togglePasswordVisibility}
            >
              {passwordVisible ? "Hide" : "Show"}
            </button>
          </div> */}
          <input type="tel" className="input" placeholder="Phone number" required />
          <input type="text" className="input" placeholder="City you'll drive in" required />
          <input type="text" className="input" placeholder="Invite code (optional)" />
          <p className="terms">
            By proceeding, I agree to Share truck's <a href="/terms">Terms of Use</a> and acknowledge that I have read the <a href="/privacy">Privacy Policy</a>.
          </p>
          <Link to="/">
          <button type="submit" className="submit-button">SUBMIT</button>
          </Link>
        </form>
      </div>
    </div>
    </div>
  );
};

export default VendorsDetailsForm;
