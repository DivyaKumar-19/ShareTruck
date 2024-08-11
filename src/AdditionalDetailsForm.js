import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './DocumentVerificationForm.css';

const AdditionalDetailsForm = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [formData, setFormData] = useState(location.state.formData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Final Form Data:', formData);
    navigate('/final-page'); // Navigate to a final page or submit the data
  };

  return (
    <form className="document-verification-form" onSubmit={handleSubmit}>
      <h2>Additional Details</h2>
      <label htmlFor="documentType">Goods Type</label>
      <select 
        id="documentType" 
        name="documentType"
        value={formData.documentType} 
        onChange={handleChange}
      >
        <option value="" disabled>Please Select</option>
        <option value="electronics">Electronics</option>
        <option value="household">Household Items</option>
        <option value="machinery">Machinery</option>
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
        onChange={(e) => setFormData({
          ...formData,
          documentFile: e.target.files[0],
        })}
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

export default AdditionalDetailsForm;
