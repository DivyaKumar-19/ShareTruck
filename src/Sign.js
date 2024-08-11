import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Sign.css';
import PrimarySearch from './cnav';


const Sign = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [service, setService] = useState('');
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
        username,
        email,
        password,
        userRole: service,
      };

      const response = await fetch('http://localhost:8080/api/logins', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText);
      }

      setSuccess('Sign-up successful');
      setError('');

      if (service === 'customer') {
        navigate('/clanding');
      } else if (service === 'driver') {
        navigate('/');
      } else if (service === 'admin') {
        navigate('/admin');
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
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
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
                  <label>
                    <input
                      type="radio"
                      value="admin"
                      checked={service === 'admin'}
                      onChange={(e) => setService(e.target.value)}
                    />
                    Admin
                  </label>
                </div>
              </div>
              {error && <div className="error">{error}</div>}
              {success && <div className="success">{success}</div>}
              <button type="submit">Sign Up</button>
              <div className="signup-link">
                Already registered? <Link to="/loginpage">Login</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sign;
