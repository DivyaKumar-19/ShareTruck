// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import './ServiceManagementPage.css';  // Create this CSS file for styling

// const ServiceManagementPage = () => {
//   const [vendors, setVendors] = useState([]);

//   useEffect(() => {
//     const fetchVendors = async () => {
//       try {
//         const response = await fetch('http://localhost:8080/api/drivers');
//         if (response.ok) {
//           const data = await response.json();
//           setVendors(data);
//         } else {
//           console.error('Failed to fetch vendors');
//         }
//       } catch (error) {
//         console.error('Error:', error);
//       }
//     };

//     fetchVendors();
//   }, []);

//   const handleApprove = async (id) => {
//     try {
//       const response = await fetch(`http://localhost:8080/api/drivers/approve/${id}`, {
//         method: 'POST',
//       });

//       if (response.ok) {
//         setVendors(vendors.filter(vendor => vendor.id !== id));
//       } else {
//         console.error('Failed to approve vendor');
//       }
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

//   const handleReject = async (id) => {
//     try {
//       const response = await fetch(`http://localhost:8080/api/drivers/reject/${id}`, {
//         method: 'POST',
//       });

//       if (response.ok) {
//         setVendors(vendors.filter(vendor => vendor.id !== id));
//       } else {
//         console.error('Failed to reject vendor');
//       }
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

//   return (
//     <div className="service-management-page">
//       <h1>Service Management</h1>
//       <Link to="/vendors/register" className="add-vendor-link">Add New Driver</Link>
//       <div className="vendors-list">
//         {vendors.length > 0 ? (
//           <table>
//             <thead>
//               <tr>
//                 <th>Name</th>
//                 <th>Email</th>
//                 <th>Date of Birth</th>
//                 <th>Phone Number</th>
//                 <th>License Number</th>
//                 <th>Experience</th>
//                 <th>Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {vendors.map(vendor => (
//                 <tr key={vendor.id}>
//                   <td>{vendor.name}</td>
//                   <td>{vendor.email}</td>
//                   <td>{vendor.dateOfBirth}</td>
//                   <td>{vendor.phoneNumber}</td>
//                   <td>{vendor.licenseNumber}</td>
//                   <td>{vendor.experience}</td>
//                   <td>
//                     <button onClick={() => handleApprove(vendor.id)}>Approve</button>
//                     <button onClick={() => handleReject(vendor.id)}>Reject</button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         ) : (
//           <p>No Driver requests available.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ServiceManagementPage;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ServiceManagementPage.css'; // Ensure this CSS file exists and styles the page
import PrimarySearchAppBar from './nav'; // Import the navigation bar

const ServiceManagementPage = () => {
  const [drivers, setDrivers] = useState([]);
  const [newDriver, setNewDriver] = useState({
    name: '',
    email: '',
    dateOfBirth: '',
    phoneNumber: '',
    licenseNumber: '',
    experience: '',
  });
  const [selectedDriver, setSelectedDriver] = useState(null); // State to manage the driver being updated
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [showForm, setShowForm] = useState(false); // State to manage form visibility
  const [showUpdateForm, setShowUpdateForm] = useState(false); // State to manage update form visibility

  useEffect(() => {
    axios.get('http://localhost:8080/api/drivers')
      .then(response => {
        setDrivers(response.data);
      })
      .catch(error => {
        if (error.response) {
          console.error('Error fetching drivers:', error.response.data);
          setError('Error: ' + (error.response.data.message || 'There was an error fetching the drivers.'));
        } else if (error.request) {
          console.error('No response received:', error.request);
          setError('No response from the server. Please try again later.');
        } else {
          console.error('Error setting up request:', error.message);
          setError('Request error: ' + error.message);
        }
      });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewDriver(prevState => ({ ...prevState, [name]: value }));
  };

  const addDriver = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8080/api/drivers/register', newDriver)
      .then(response => {
        setDrivers([...drivers, response.data]);
        setNewDriver({
          name: '',
          email: '',
          dateOfBirth: '',
          phoneNumber: '',
          licenseNumber: '',
          experience: '',
        });
        setError(null);
        setSuccess('Driver added successfully.');
      })
      .catch(error => {
        if (error.response) {
          console.error('Error adding driver:', error.response.data);
          setError('Error: ' + (error.response.data.message || 'There was an error adding the driver.'));
        } else if (error.request) {
          console.error('No response received:', error.request);
          setError('No response from the server. Please try again later.');
        } else {
          console.error('Error setting up request:', error.message);
          setError('Request error: ' + error.message);
        }
        setSuccess(null);
      });
  };

  const deleteDriver = (id) => {
    axios.delete(`http://localhost:8080/api/drivers/${id}`)
      .then(response => {
        setDrivers(drivers.filter(driver => driver.id !== id));
        setError(null);
        setSuccess('Driver deleted successfully.');
      })
      .catch(error => {
        if (error.response) {
          console.error('Error deleting driver:', error.response.data);
          setError('Error: ' + (error.response.data.message || 'There was an error deleting the driver.'));
        } else if (error.request) {
          console.error('No response received:', error.request);
          setError('No response from the server. Please try again later.');
        } else {
          console.error('Error setting up request:', error.message);
          setError('Request error: ' + error.message);
        }
        setSuccess(null);
      });
  };

  const handleUpdateChange = (e) => {
    const { name, value } = e.target;
    setSelectedDriver(prevState => ({ ...prevState, [name]: value }));
  };

  const updateDriver = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:8080/api/drivers/${selectedDriver.id}`, selectedDriver)
      .then(response => {
        setDrivers(drivers.map(driver => driver.id === selectedDriver.id ? response.data : driver));
        setSelectedDriver(null);
        setShowUpdateForm(false);
        setError(null);
        setSuccess('Driver updated successfully.');
      })
      .catch(error => {
        if (error.response) {
          console.error('Error updating driver:', error.response.data);
          setError('Error: ' + (error.response.data.message || 'There was an error updating the driver.'));
        } else if (error.request) {
          console.error('No response received:', error.request);
          setError('No response from the server. Please try again later.');
        } else {
          console.error('Error setting up request:', error.message);
          setError('Request error: ' + error.message);
        }
        setSuccess(null);
      });
  };

  const handleEdit = (driver) => {
    setSelectedDriver(driver);
    setShowUpdateForm(true);
  };

  return (
    <div className="service-management-page">
      <PrimarySearchAppBar />
      <h1>Driver Management</h1>
      {error && <p className="error-message">{error}</p>}
      {success && <p className="success-message">{success}</p>}
      <button onClick={() => setShowForm(prev => !prev)} className="add-button">
        {showForm ? 'Cancel' : 'Add Driver'}
      </button>

      {showForm && (
        <div className="form-container">
          <form onSubmit={addDriver} className="add-driver-form">
            <span onClick={() => setShowForm(false)} className="close-icon">
              <i className="fas fa-times"></i>
            </span>
            <h2>Add New Driver</h2>
            <label>
              Name:
              <input type="text" name="name" value={newDriver.name} onChange={handleChange} required />
            </label>
            <label>
              Email:
              <input type="email" name="email" value={newDriver.email} onChange={handleChange} required />
            </label>
            <label>
              Date of Birth:
              <input type="date" name="dateOfBirth" value={newDriver.dateOfBirth} onChange={handleChange} required />
            </label>
            <label>
              Phone Number:
              <input type="text" name="phoneNumber" value={newDriver.phoneNumber} onChange={handleChange} required />
            </label>
            <label>
              License Number:
              <input type="text" name="licenseNumber" value={newDriver.licenseNumber} onChange={handleChange} required />
            </label>
            <label>
              Experience:
              <input type="number" name="experience" value={newDriver.experience} onChange={handleChange} required />
            </label>
            <button type="submit" className="add-button">Add Driver</button>
          </form>
        </div>
      )}

      {showUpdateForm && selectedDriver && (
        <div className="form-container">
          <form onSubmit={updateDriver} className="update-driver-form">
            <span onClick={() => setShowUpdateForm(false)} className="close-icon">
              <i className="fas fa-times"></i>
            </span>
            <h2>Update Driver</h2>
            <label>
              Name:
              <input type="text" name="name" value={selectedDriver.name} onChange={handleUpdateChange} required />
            </label>
            <label>
              Email:
              <input type="email" name="email" value={selectedDriver.email} onChange={handleUpdateChange} required />
            </label>
            <label>
              Date of Birth:
              <input type="date" name="dateOfBirth" value={selectedDriver.dateOfBirth} onChange={handleUpdateChange} required />
            </label>
            <label>
              Phone Number:
              <input type="text" name="phoneNumber" value={selectedDriver.phoneNumber} onChange={handleUpdateChange} required />
            </label>
            <label>
              License Number:
              <input type="text" name="licenseNumber" value={selectedDriver.licenseNumber} onChange={handleUpdateChange} required />
            </label>
            <label>
              Experience:
              <input type="number" name="experience" value={selectedDriver.experience} onChange={handleUpdateChange} required />
            </label>
            <button type="submit" className="update-button">Update Driver</button>
          </form>
        </div>
      )}

      <table className="drivers-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Date of Birth</th>
            <th>Phone Number</th>
            <th>License Number</th>
            <th>Experience</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {drivers.map(driver => (
            <tr key={driver.id}>
              <td>{driver.name}</td>
              <td>{driver.email}</td>
              <td>{driver.dateOfBirth}</td>
              <td>{driver.phoneNumber}</td>
              <td>{driver.licenseNumber}</td>
              <td>{driver.experience}</td>
              <td>
                <button onClick={() => handleEdit(driver)} className="edit-button">Edit</button>
                <button onClick={() => deleteDriver(driver.id)} className="delete-button">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ServiceManagementPage;


