import React, { useState } from 'react';
import './DocumentVerificationForm.css';

const DocumentVerificationForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    address: '',
    documentType: '',
    documentNumber: '',
    weight: '',
    additionalComments: '',
    documentFile: null,
  });

  const [activeTab, setActiveTab] = useState('personal');

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    Object.keys(formData).forEach((key) => {
      formDataToSend.append(key, formData[key]);
    });

    try {
      const response = await fetch('http://localhost:8080/api/document-verification/submit', {
        method: 'POST',
        body: formDataToSend,
      });

      if (response.ok) {
        console.log('Form data submitted successfully');
      } else {
        console.error('Error submitting form data');
      }
    } catch (error) {
      console.error('Error submitting form data:', error);
    }
  };

  return (
    <form className="document-verification-form" onSubmit={handleSubmit}>
      <h2>Fill this Form</h2>
      <div className="tabs">
        <button
          type="button"
          className={activeTab === 'personal' ? 'active' : ''}
          onClick={() => setActiveTab('personal')}
        >
          Personal Details
        </button>
        <button
          type="button"
          className={activeTab === 'goods' ? 'active' : ''}
          onClick={() => setActiveTab('goods')}
        >
          Goods Details
        </button>
      </div>

      {activeTab === 'personal' && (
        <div>
          <label htmlFor="firstName">First Name</label>
          <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} />

          <label htmlFor="lastName">Last Name</label>
          <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />

          <label htmlFor="phoneNumber">Phone Number</label>
          <input type="tel" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />

          <label htmlFor="address">Address</label>
          <input type="text" id="address" name="address" value={formData.address} onChange={handleChange} />
        </div>
      )}

      {activeTab === 'goods' && (
        <div>
          <label htmlFor="documentType">Goods Type</label>
          <select id="documentType" name="documentType" value={formData.documentType} onChange={handleChange}>
            <option value="" disabled>Please Select</option>
            <option value="electronics">Electronics</option>
            <option value="household">Household Items</option>
            <option value="machinery">Machinery</option>
          </select>

          <label htmlFor="documentNumber">Quantity</label>
          <input type="number" id="documentNumber" name="documentNumber" value={formData.documentNumber} onChange={handleChange} />

          <label htmlFor="weight">Weight (kg)</label>
          <input type="number" id="weight" name="weight" value={formData.weight} onChange={handleChange} min="0" max="1000" />

          <label htmlFor="documentFile">Upload Document</label>
          <input type="file" id="documentFile" name="documentFile" onChange={handleFileChange} />

          <label htmlFor="additionalComments">Additional Comments</label>
          <textarea id="additionalComments" name="additionalComments" value={formData.additionalComments} onChange={handleChange} rows="3"></textarea>
        </div>
      )}

      <button type="submit">Submit</button>
    </form>
  );
};

export default DocumentVerificationForm;




// import React, { useState } from 'react';
// import './DocumentVerificationForm.css';
// import { useNavigate } from 'react-router-dom';

// const DocumentVerificationForm = () => {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     phoneNumber: '',
//     documentType: '',
//     documentNumber: '',
//     additionalComments: '',
//     documentFile: null,
//   });

//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleFileChange = (e) => {
//     setFormData({
//       ...formData,
//       documentFile: e.target.files[0],
//     });
//   };

//   const handleNext = (e) => {
//     e.preventDefault();
//     // Optionally validate the form data here
//     navigate('/next-page', { state: { formData } }); // Pass form data to the next page
//   };

//   return (
//     <form className="document-verification-form" onSubmit={handleNext}>
//       <h2>Fill this Form</h2>
//       <label htmlFor="firstName">Full Name</label>
//       <div className="name-inputs">
//         <input 
//           type="text" 
//           id="firstName" 
//           name="firstName" 
//           placeholder="First Name"
//           value={formData.firstName} 
//           onChange={handleChange} 
//         />
//         <input 
//           type="text" 
//           id="lastName" 
//           name="lastName" 
//           placeholder="Last Name"
//           value={formData.lastName} 
//           onChange={handleChange} 
//         />
//       </div>
//       <label htmlFor="email">Email</label>
//       <input 
//         type="email" 
//           id="email" 
//           name="email" 
//           placeholder="example@example.com"
//           value={formData.email} 
//           onChange={handleChange} 
//         />
//         <label htmlFor="phoneNumber">Phone Number</label>
//         <input 
//           type="tel" 
//           id="phoneNumber" 
//           name="phoneNumber" 
//           placeholder="(000) 000-0000"
//           value={formData.phoneNumber} 
//           onChange={handleChange} 
//         />
//         <button type="submit">Next</button>
//     </form>
//   );
// };

// export default DocumentVerificationForm;


