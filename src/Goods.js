import React, { useState } from 'react';
import './Goods.css';

const Goods = () => {
  const [contact, setContact] = useState({
    name: '',
    phone: '',
    area: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    email: '',
    birthday: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact({ ...contact, [name]: value });
  };

  return (
    <div className="contact-form">
      <div className="form-group">
        <p><h3>DETAILS</h3></p>
        <label>Name</label>
        <input type="text" name="name" value={contact.name} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label>Phone</label>
        <input type="text" name="phone" value={contact.phone} onChange={handleChange} />
        {/* <select name="area" value={contact.area} onChange={handleChange}>
          <option value="">Area</option>
          <option value="123">123</option>
          <option value="456">456</option>
          <option value="789">789</option>
        </select> */}
      </div>
      <div className="form-group">
        <label>Address</label>
        <input type="text" name="address" value={contact.address} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label>City</label>
        <input type="text" name="city" value={contact.city} onChange={handleChange} />
      </div>
      <div className="form-group">
        {/* <label>State</label> */}
        {/* <select name="state" value={contact.state} onChange={handleChange}>
          <option value="">State</option>
          <option value="CA">California</option>
          <option value="TX">Texas</option>
          <option value="NY">New York</option>
        </select> */}
        <label>Zip</label>
        <input type="text" name="zip" value={contact.zip} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label>Email</label>
        <input type="email" name="email" value={contact.email} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label>Birthday</label>
        <input type="date" name="birthday" value={contact.birthday} onChange={handleChange} />
      </div>
      <button>Submit</button>
    </div>
  );
};

export default Goods;
