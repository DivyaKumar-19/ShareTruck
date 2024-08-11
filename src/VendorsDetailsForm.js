// import React, { useState } from 'react';
// import './VendorsDetailsForm.css';
// import { Link } from 'react-router-dom';
// import Primary from './dnav';

// const VendorsDetailsForm = () => {
//   const [passwordVisible, setPasswordVisible] = useState(false);

//   const togglePasswordVisibility = () => {
//     setPasswordVisible(!passwordVisible);
//   };

//   return (
//     <div>  
//       <Primary/>
    
//     <div className="signup-container1">
//       <div className="info-section">
//         <h1>Opportunity is everywhere</h1>
//         <p>Make the most of your time on the road on the platform with the largest network of active riders.</p>
//         <div className="driver-image">
//           <img src="truck3.jpg" alt="Driver" /> 
//         </div>
//       </div>
//       <div className="form-section">
//         <h2>Become a driver</h2>
        
//         <form className="form">
//           <input type="text" className="input" placeholder="Name" required />
//           <input type="email" className="input" placeholder="Email" required />
//           <input type="password" className="input" placeholder="Password" required />
//           <input type="date" className="input" placeholder="Date-of-birth" required />
         
//           <input type="tel" className="input" placeholder="Phone number" required />
//           <input type="text" className="input" placeholder="License number" required />
//           <input type="number" className="input" placeholder="Experience" required />
          
//           <p className="terms">
//             By proceeding, I agree to Share truck's <a href="/terms">Terms of Use</a> and acknowledge that I have read the <a href="/privacy">Privacy Policy</a>.
//           </p>
//           <Link to="/">
//           <button type="submit" className="submit-button">SUBMIT</button>
//           </Link>
//         </form>
//       </div>
//     </div>
//     </div>
//   );
// };

// export default VendorsDetailsForm;


// import React, { useState } from 'react';
// import './VendorsDetailsForm.css';
// import { Link } from 'react-router-dom';
// import Primary from './dnav';

// const VendorsDetailsForm = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: '',
//     dateOfBirth: '',
//     phoneNumber: '',
//     licenseNumber: '',
//     experience: '',
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch('http://localhost:8080/api/drivers/register', {  // Updated URL with localhost
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });

//       if (response.ok) {
//         console.log('Driver registered successfully');
//       } else {
//         console.log('Failed to register driver');
//       }
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

//   return (
//     <div>
//       <Primary />
//       <div className="signup-container1">
//         <div className="info-section">
//           <h1>Opportunity is everywhere</h1>
//           <p>Make the most of your time on the road on the platform with the largest network of active riders.</p>
//           <div className="driver-image">
//             <img src="truck3.jpg" alt="Driver" />
//           </div>
//         </div>
//         <div className="form-section">
//           <h2>Become a driver</h2>
//           <form className="form" onSubmit={handleSubmit}>
//             <input type="text" className="input" name="name" placeholder="Name" required onChange={handleChange} />
//             <input type="email" className="input" name="email" placeholder="Email" required onChange={handleChange} />
//             <input type="password" className="input" name="password" placeholder="Password" required onChange={handleChange} />
//             <input type="date" className="input" name="dateOfBirth" placeholder="Date-of-birth" required onChange={handleChange} />
//             <input type="tel" className="input" name="phoneNumber" placeholder="Phone number" required onChange={handleChange} />
//             <input type="text" className="input" name="licenseNumber" placeholder="License number" required onChange={handleChange} />
//             <input type="number" className="input" name="experience" placeholder="Experience" required onChange={handleChange} />
//             <p className="terms">
//               By proceeding, I agree to Share truck's <a href="/terms">Terms of Use</a> and acknowledge that I have read the <a href="/privacy">Privacy Policy</a>.
//             </p>
            
//             <button type="submit" className="submit-button">SUBMIT</button>
            
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VendorsDetailsForm;


import React, { useState } from 'react';
import './VendorsDetailsForm.css';
import { useNavigate } from 'react-router-dom';
import Primary from './dnav';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const VendorsDetailsForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    dateOfBirth: '',
    phoneNumber: '',
    licenseNumber: '',
    experience: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8080/api/drivers/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success('Registration successful! Redirecting to homepage...', {
          position: 'top-center',  // Ensure position is correctly used
          autoClose: 3000,
        });
        setTimeout(() => {
          navigate("/");  // Redirect to homepage after the toast message
        }, 3000);  // Wait for 3 seconds before redirecting
      } else {
        toast.error('Failed to register driver. Please try again.', {
          position: 'top-center',  // Ensure position is correctly used
          autoClose: 3000,
        });
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('An error occurred. Please try again.', {
        position: 'top-center',  // Ensure position is correctly used
        autoClose: 3000,
      });
    }
  };

  return (
    <div>
      <Primary />
      <div className="signup-container1">
        <div className="info-section">
          <h1>Opportunity is everywhere</h1>
          <p>Make the most of your time on the road on the platform with the largest network of active riders.</p>
          <div className="driver-image">
            <img src="truck3.jpg" alt="Driver" />
          </div>
        </div>
        <div className="form-section">
          <h2>Become a driver</h2>
          <form className="form" onSubmit={handleSubmit}>
            <input type="text" className="input" name="name" placeholder="Name" required onChange={handleChange} />
            <input type="email" className="input" name="email" placeholder="Email" required onChange={handleChange} />
            <input type="password" className="input" name="password" placeholder="Password" required onChange={handleChange} />
            <input type="date" className="input" name="dateOfBirth" placeholder="Date-of-birth" required onChange={handleChange} />
            <input type="tel" className="input" name="phoneNumber" placeholder="Phone number" required onChange={handleChange} />
            <input type="text" className="input" name="licenseNumber" placeholder="License number" required onChange={handleChange} />
            <input type="number" className="input" name="experience" placeholder="Experience" required onChange={handleChange} />
            <p className="terms">
              By proceeding, I agree to Share truck's <a href="/terms">Terms of Use</a> and acknowledge that I have read the <a href="/privacy">Privacy Policy</a>.
            </p>
            <button type="submit" className="submit-button">SUBMIT</button>
          </form>
        </div>
      </div>
      <ToastContainer /> {/* Render toast notifications */}
    </div>
  );
};

export default VendorsDetailsForm;
