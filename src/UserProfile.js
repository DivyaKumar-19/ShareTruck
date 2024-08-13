// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './UserProfile.css';

// const UserProfile = () => {
//   const [profileData, setProfileData] = useState({
//     firstName: 'John',
//     lastName: 'Doe',
//     phoneNumber: '123-456-7890',
//     email: 'john.doe@example.com',
//     city: 'New York',
//     state: 'NY',
//     postcode: '10001',
//     country: 'USA',
//     profileImage: '', 
//   });

//   const [isEditing, setIsEditing] = useState(true); 
//   const navigate = useNavigate(); 

//   const handleChange = (e) => {
//     setProfileData({
//       ...profileData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleImageUpload = (e) => {
//     const file = e.target.files[0];
//     const reader = new FileReader();

//     reader.onloadend = () => {
//       setProfileData({
//         ...profileData,
//         profileImage: reader.result,
//       });
//     };

//     if (file) {
//       reader.readAsDataURL(file);
//     }
//   };

//   const handleSubmit = () => {
//     setIsEditing(false); 
//   };

//   const handleEditClick = () => {
//     setIsEditing(true); 
//   };

//   const handleClose = () => {
//     navigate('/'); 
//   };

//   return (
//     <div className="profile-page1">
//       <div className="profile-container1">
//         <div className="left-section1">
//           <div className="profile-image-container1">
//             <img
//               src={profileData.profileImage || 'https://via.placeholder.com/150'}
//               alt="Profile"
//               className="profile-image1"
//             />
           
//           </div>
//         </div>
//         <div className="right-section1">
//           <div className="form-header1">
//             <h2>Profile Information</h2>
//             {!isEditing && (
//               <button className="edit-btn1" onClick={handleEditClick}>
//                 Edit
//               </button>
//             )}
//             <button className="close-btn" onClick={handleClose}>
//               &times;
//             </button>
//           </div>
//           <div className="form-container1">
//             <div className="form-row1">
//               <div className="form-group1">
//                 <label>First Name</label>
//                 {isEditing ? (
//                   <input
//                     type="text"
//                     name="firstName"
//                     placeholder="John"
//                     value={profileData.firstName}
//                     onChange={handleChange}
//                     className="input1"
//                   />
//                 ) : (
//                   <p>{profileData.firstName}</p>
//                 )}
//               </div>
//               <div className="form-group1">
//                 <label>Last Name</label>
//                 {isEditing ? (
//                   <input
//                     type="text"
//                     name="lastName"
//                     placeholder="Doe"
//                     value={profileData.lastName}
//                     onChange={handleChange}
//                     className="input1"
//                   />
//                 ) : (
//                   <p>{profileData.lastName}</p>
//                 )}
//               </div>
//             </div>
//             <div className="form-row1">
//               <div className="form-group1">
//                 <label>Phone Number</label>
//                 {isEditing ? (
//                   <input
//                     type="text"
//                     name="phoneNumber"
//                     placeholder="123-456-7890"
//                     value={profileData.phoneNumber}
//                     onChange={handleChange}
//                     className="input1"
//                   />
//                 ) : (
//                   <p>{profileData.phoneNumber}</p>
//                 )}
//               </div>
//               <div className="form-group1">
//                 <label>Email address</label>
//                 <p>{profileData.email}</p> 
//               </div>
//             </div>
//             <div className="form-row1">
//               <div className="form-group1">
//                 <label>City</label>
//                 {isEditing ? (
//                   <input
//                     type="text"
//                     name="city"
//                     placeholder="City"
//                     value={profileData.city}
//                     onChange={handleChange}
//                     className="input1"
//                   />
//                 ) : (
//                   <p>{profileData.city}</p>
//                 )}
//               </div>
//               <div className="form-group1">
//                 <label>State/County</label>
//                 {isEditing ? (
//                   <input
//                     type="text"
//                     name="state"
//                     placeholder="State/County"
//                     value={profileData.state}
//                     onChange={handleChange}
//                     className="input1"
//                   />
//                 ) : (
//                   <p>{profileData.state}</p>
//                 )}
//               </div>
//             </div>
//             <div className="form-row1">
//               <div className="form-group1">
//                 <label>Postcode</label>
//                 {isEditing ? (
//                   <input
//                     type="text"
//                     name="postcode"
//                     placeholder="Postcode"
//                     value={profileData.postcode}
//                     onChange={handleChange}
//                     className="input1"
//                   />
//                 ) : (
//                   <p>{profileData.postcode}</p>
//                 )}
//               </div>
//               <div className="form-group1">
//                 <label>Country</label>
//                 {isEditing ? (
//                   <input
//                     type="text"
//                     name="country"
//                     placeholder="Country"
//                     value={profileData.country}
//                     onChange={handleChange}
//                     className="input1"
//                   />
//                 ) : (
//                   <p>{profileData.country}</p>
//                 )}
//               </div>
//             </div>
//             {isEditing && (
//               <button className="profile-btn1" onClick={handleSubmit}>
//                 Save Profile
//               </button>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UserProfile;

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios'; // Import axios for HTTP requests
// import './UserProfile.css';

// const UserProfile = () => {
//   const [profileData, setProfileData] = useState({
//     firstName: '',
//     lastName: '',
//     phoneNumber: '',
//     email: '',
//     city: '',
//     state: '',
//     postcode: '',
//     country: '',
//     profileImage: '',
//   });

//   const [isEditing, setIsEditing] = useState(true);
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setProfileData({
//       ...profileData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleImageUpload = (e) => {
//     const file = e.target.files[0];
//     const reader = new FileReader();

//     reader.onloadend = () => {
//       setProfileData({
//         ...profileData,
//         profileImage: reader.result,
//       });
//     };

//     if (file) {
//       reader.readAsDataURL(file);
//     }
//   };

//   const handleSubmit = async () => {
//     try {
//       const response = await axios.post('http://localhost:8080/api/profile/post', profileData);
//       console.log('Profile saved:', response.data);
//       setIsEditing(false);
//     } catch (error) {
//       console.error('Error saving profile:', error);
//     }
//   };

//   const handleEditClick = () => {
//     setIsEditing(true);
//   };

//   const handleClose = () => {
//     navigate('/');
//   };

//   return (
//     <div className="profile-page1">
//       <div className="profile-container1">
//         <div className="left-section1">
//           <div className="profile-image-container1">
//             <img
//               src={profileData.profileImage || 'https://via.placeholder.com/150'}
//               alt="Profile"
//               className="profile-image1"
//             />
//             {/* {isEditing && (
//               <input type="file" onChange={handleImageUpload} className="image-upload-input" />
//             )} */}
//           </div>
//         </div>
//         <div className="right-section1">
//           <div className="form-header1">
//             <h2>Profile Information</h2>
//             {!isEditing && (
//               <button className="edit-btn1" onClick={handleEditClick}>
//                 Edit
//               </button>
//             )}
//             <button className="close-btn" onClick={handleClose}>
//               &times;
//             </button>
//           </div>
//           <div className="form-container1">
//             <div className="form-row1">
//               <div className="form-group1">
//                 <label>Name</label>
//                 {isEditing ? (
//                   <input
//                     type="text"
//                     name="firstName"
//                     placeholder="John"
//                     value={profileData.firstName}
//                     onChange={handleChange}
//                     className="input1"
//                   />
//                 ) : (
//                   <p>{profileData.firstName}</p>
//                 )}
//               </div>
              
             
//             </div>
//             <div className="form-row1">
//               <div className="form-group1">
//                 <label>Phone Number</label>
//                 {isEditing ? (
//                   <input
//                     type="text"
//                     name="phoneNumber"
//                     placeholder="123-456-7890"
//                     value={profileData.phoneNumber}
//                     onChange={handleChange}
//                     className="input1"
//                   />
//                 ) : (
//                   <p>{profileData.phoneNumber}</p>
//                 )}
//               </div>
//               <div className="form-group1">
//                 <label>Email</label>
//                 {isEditing ? (
//                   <input
//                     type="text"
//                     name="email"
//                     placeholder="Email"
//                     value={profileData.phoneNumber}
//                     onChange={handleChange}
//                     className="input1"
//                   />
//                 ) : (
//                   <p>{profileData.phoneNumber}</p>
//                 )}
//               </div>
              
//             </div>
//             <div className="form-row1">
//               <div className="form-group1">
//                 <label>City</label>
//                 {isEditing ? (
//                   <input
//                     type="text"
//                     name="city"
//                     placeholder="City"
//                     value={profileData.city}
//                     onChange={handleChange}
//                     className="input1"
//                   />
//                 ) : (
//                   <p>{profileData.city}</p>
//                 )}
//               </div>
//               <div className="form-group1">
//                 <label>State/County</label>
//                 {isEditing ? (
//                   <input
//                     type="text"
//                     name="state"
//                     placeholder="State/County"
//                     value={profileData.state}
//                     onChange={handleChange}
//                     className="input1"
//                   />
//                 ) : (
//                   <p>{profileData.state}</p>
//                 )}
//               </div>
//             </div>
//             <div className="form-row1">
//               <div className="form-group1">
//                 <label>Postcode</label>
//                 {isEditing ? (
//                   <input
//                     type="text"
//                     name="postcode"
//                     placeholder="Postcode"
//                     value={profileData.postcode}
//                     onChange={handleChange}
//                     className="input1"
//                   />
//                 ) : (
//                   <p>{profileData.postcode}</p>
//                 )}
//               </div>
//               <div className="form-group1">
//                 <label>Country</label>
//                 {isEditing ? (
//                   <input
//                     type="text"
//                     name="country"
//                     placeholder="Country"
//                     value={profileData.country}
//                     onChange={handleChange}
//                     className="input1"
//                   />
//                 ) : (
//                   <p>{profileData.country}</p>
//                 )}
//               </div>
//             </div>
//             {isEditing && (
//               <button className="profile-btn1" onClick={handleSubmit}>
//                 Save Profile
//               </button>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UserProfile;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './UserProfile.css';

const UserProfile = ({ email }) => {
  const [profileData, setProfileData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: email, 
    city: '',
    state: '',
    postcode: '',
    country: '',
    profileImage: '',
  });

  const [isEditing, setIsEditing] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch existing profile data for the logged-in user if necessary
    // and pre-fill the form, except for the email which is already set.
    const fetchProfileData = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/profile?email=${email}`);
        setProfileData(response.data);
      } catch (error) {
        console.error('Error fetching profile data:', error);
      }
    };

    fetchProfileData();
  }, [email]);

  const handleChange = (e) => {
    setProfileData({
      ...profileData,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setProfileData({
        ...profileData,
        profileImage: reader.result,
      });
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.put('http://localhost:8080/api/profile', profileData);
      console.log('Profile updated:', response.data);
      setIsEditing(false);
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleClose = () => {
    navigate('/'); // Navigate to the desired route, e.g., home page
  };

  return (
    <div className="profile-page1">
      <div className="profile-container1">
        <div className="left-section1">
          <div className="profile-image-container1">
            <img
              src={profileData.profileImage || 'https://via.placeholder.com/150'}
              alt="Profile"
              className="profile-image1"
            />
          </div>
        </div>
        <div className="right-section1">
          <div className="form-header1">
            <h2>Profile Information</h2>
            {!isEditing && (
              <button className="edit-btn1" onClick={handleEditClick}>
                Edit
              </button>
            )}
            <button className="close-btn" onClick={handleClose}>
              &times;
            </button>
          </div>
          <div className="form-container1">
            <div className="form-row1">
              <div className="form-group1">
                <label>First Name</label>
                {isEditing ? (
                  <input
                    type="text"
                    name="firstName"
                    placeholder="John"
                    value={profileData.firstName}
                    onChange={handleChange}
                    className="input1"
                  />
                ) : (
                  <p>{profileData.firstName}</p>
                )}
              </div>
              <div className="form-group1">
                <label>Last Name</label>
                {isEditing ? (
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Doe"
                    value={profileData.lastName}
                    onChange={handleChange}
                    className="input1"
                  />
                ) : (
                  <p>{profileData.lastName}</p>
                )}
              </div>
              <div className="form-group1">
                <label>Email</label>
                {isEditing ? (
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Email"
                    value={profileData.email}
                    onChange={handleChange}
                    className="input1"
                  />
                ) : (
                  <p>{profileData.lastName}</p>
                )}
              </div>
            </div>
            <div className="form-row1">
              <div className="form-group1">
                <label>Phone Number</label>
                {isEditing ? (
                  <input
                    type="text"
                    name="phoneNumber"
                    placeholder="123-456-7890"
                    value={profileData.phoneNumber}
                    onChange={handleChange}
                    className="input1"
                  />
                ) : (
                  <p>{profileData.phoneNumber}</p>
                )}
              </div>
              
            </div>
            <div className="form-row1">
              <div className="form-group1">
                <label>City</label>
                {isEditing ? (
                  <input
                    type="text"
                    name="city"
                    placeholder="City"
                    value={profileData.city}
                    onChange={handleChange}
                    className="input1"
                  />
                ) : (
                  <p>{profileData.city}</p>
                )}
              </div>
              <div className="form-group1">
                <label>State/County</label>
                {isEditing ? (
                  <input
                    type="text"
                    name="state"
                    placeholder="State/County"
                    value={profileData.state}
                    onChange={handleChange}
                    className="input1"
                  />
                ) : (
                  <p>{profileData.state}</p>
                )}
              </div>
            </div>
            <div className="form-row1">
              <div className="form-group1">
                <label>Postcode</label>
                {isEditing ? (
                  <input
                    type="text"
                    name="postcode"
                    placeholder="Postcode"
                    value={profileData.postcode}
                    onChange={handleChange}
                    className="input1"
                  />
                ) : (
                  <p>{profileData.postcode}</p>
                )}
              </div>
              <div className="form-group1">
                <label>Country</label>
                {isEditing ? (
                  <input
                    type="text"
                    name="country"
                    placeholder="Country"
                    value={profileData.country}
                    onChange={handleChange}
                    className="input1"
                  />
                ) : (
                  <p>{profileData.country}</p>
                )}
              </div>
            </div>
            {isEditing && (
              <button className="profile-btn1" onClick={handleSubmit}>
                Save Profile
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
