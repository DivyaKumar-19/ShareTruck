import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Sign.css'; // Import the CSS file
import PrimarySearch from './cnav';

const Sign = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [service, setService] = useState('');
  const [aadhaar, setAadhaar] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (!service) {
      setError('Please select a service');
      return;
    }

    try {
      const requestBody = {
        name,
        email,
        password,
        userRole: service,
      };

      if (service === 'customer') {
        requestBody.aadhaar = aadhaar;
      }

      const response = await fetch('http://localhost:8080/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });

      if (!response.ok) {
        throw new Error('Failed to sign up');
      }

      setSuccess('Sign-up successful');
      setError('');

      // Redirect based on the selected service
      if (service === 'customer') {
        navigate('/clanding');
      } else if (service === 'driver') {
        navigate('/dnav');
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <PrimarySearch />
      <div className="signup-page">
        <div className="signup-container">
          <div className="signup-image">
            <img src="login.jpg" alt="Sign Up" />
          </div>
          <div className="signup-form">
            <h2>Sign Up for SHARE TRUCK</h2>
            <form onSubmit={handleSignUp}>
              <div>
                <label>Name:</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div>
                <label>Email:</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div>
                <label>Password:</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div>
                <label>Confirm Password:</label>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </div>
              <div>
                <label>Service:</label>
                <div className="radio-group">
                  <label>
                    <input
                      type="radio"
                      value="customer"
                      checked={service === 'customer'}
                      onChange={(e) => setService(e.target.value)}
                    />
                    Customer
                  </label>
                  <label>
                    <input
                      type="radio"
                      value="driver"
                      checked={service === 'driver'}
                      onChange={(e) => setService(e.target.value)}
                    />
                    Driver
                  </label>
                </div>
              </div>
              {service === 'customer' && (
                <div>
                  <label>Aadhaar No:</label>
                  <input
                    type="text"
                    value={aadhaar}
                    onChange={(e) => setAadhaar(e.target.value)}
                    required
                  />
                </div>
              )}
              {error && <div className="error">{error}</div>}
              {success && <div className="success">{success}</div>}
              <button type="submit">Sign Up</button>
            </form>
            <div className="signup-link">
              Already registered? <Link to="/loginpage">Login</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sign;
