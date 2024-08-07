import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Receiver.css';

const Receiver = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    description: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Navigate to Final page
    navigate('/final');
  };

  return (
    <div className="vendors-detail-form-container">
      <div className="vendors-detail-form">
        <div className="image-container">
          <img
            src="https://cdn-icons-png.flaticon.com/256/6009/6009026.png"
            alt="Receiver"
            className="vendor-image"
          />
        </div>
        <div className="form-container">
          <h2>Receiver Details</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone:</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="address">Address:</label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
              />
            </div>
            
            <button type="submit" className="btn-submit">Book now</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Receiver;
