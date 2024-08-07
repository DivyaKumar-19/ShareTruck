import React, { useState } from 'react';
import './DocumentVerificationForm.css';

const DocumentVerificationForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    documentType: '',
    documentNumber: '',
    additionalComments: '',
    documentFile: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      documentFile: e.target.files[0],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log('Form data submitted: ', formData);
  };

  return (
    <form className="document-verification-form" onSubmit={handleSubmit}>
      <h2>Fill this Form</h2>
      <label htmlFor="firstName">Full Name</label>
      <div className="name-inputs">
        <input 
          type="text" 
          id="firstName" 
          name="firstName" 
          placeholder="First Name"
          value={formData.firstName} 
          onChange={handleChange} 
        />
        <input 
          type="text" 
          id="lastName" 
          name="lastName" 
          placeholder="Last Name"
          value={formData.lastName} 
          onChange={handleChange} 
        />
      </div>
      <label htmlFor="email">Email</label>
      <input 
        type="email" 
        id="email" 
        name="email" 
        placeholder="example@example.com"
        value={formData.email} 
        onChange={handleChange} 
      />
      <label htmlFor="phoneNumber">Phone Number</label>
      <input 
        type="tel" 
        id="phoneNumber" 
        name="phoneNumber" 
        placeholder="(000) 000-0000"
        value={formData.phoneNumber} 
        onChange={handleChange} 
      />
      <label htmlFor="documentType">Goods Type</label>
      <select 
        id="documentType" 
        name="documentType"
        value={formData.documentType} 
        onChange={handleChange}
      >
        <option value="" disabled>Please Select</option>
        <option value="passport">Electronics</option>
        <option value="id">Household Items</option>
        <option value="license">Machinery</option>
      </select>
      <label htmlFor="documentNumber">Address</label>
      <input 
        type="text" 
        id="documentNumber" 
        name="documentNumber"
        value={formData.documentNumber} 
        onChange={handleChange} 
      />
      <label htmlFor="documentFile">Upload Document</label>
      <input 
        type="file" 
        id="documentFile" 
        name="documentFile"
        onChange={handleFileChange}
      />
      <label htmlFor="additionalComments">Additional Comments</label>
      <textarea 
        id="additionalComments" 
        name="additionalComments"
        value={formData.additionalComments} 
        onChange={handleChange}
        rows="3"
      ></textarea>
      <button type="submit">Submit</button>
    </form>
  );
};

export default DocumentVerificationForm;
