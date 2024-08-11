import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import './OfferRide.css';
import Primary from './dnav';
import { FormContext } from './FormContext';

const OfferRide = () => {
  const { formData, setFormData } = useContext(FormContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('http://localhost:8080/api/rides/offer', { 
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      navigate('/driverride');
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  };

  return (
    <div>
      <Primary />
      <div className="auto-roads">
        <div className="main-contents">
          <div className="form-containers">
            <h2>Offer a Ride and Expand Your Reach</h2>
            <form onSubmit={handleSubmit}>
              <label>PICK-UP LOCATION</label>
              <input
                type="text"
                placeholder="City, Airport, Station, etc"
                value={formData.pickupLocation}
                onChange={(e) => setFormData({ ...formData, pickupLocation: e.target.value })}
              />
              <label>DROP-OFF LOCATION</label>
              <input
                type="text"
                placeholder="City, Airport, Station, etc"
                value={formData.dropoffLocation}
                onChange={(e) => setFormData({ ...formData, dropoffLocation: e.target.value })}
              />
              <label>PICK-UP DATE</label>
              <input
                type="date"
                value={formData.pickupDate}
                onChange={(e) => setFormData({ ...formData, pickupDate: e.target.value })}
              />
              <label>DROP-OFF DATE</label>
              <input
                type="date"
                value={formData.dropoffDate}
                onChange={(e) => setFormData({ ...formData, dropoffDate: e.target.value })}
              />
              <label>PICK-UP TIME</label>
              <input
                type="time"
                value={formData.pickupTime}
                onChange={(e) => setFormData({ ...formData, pickupTime: e.target.value })}
              />
              <button type="submit">POST</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferRide;


// import React, { useContext } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import './AutoRoad.css';
// import Primary from './dnav';
// import { FormContext } from './FormContext';

// const AutoRoad = () => {
//   const { formData, setFormData } = useContext(FormContext);
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const response = await fetch('http://localhost:8080/api/rides/add', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(formData),
//     });

//     if (response.ok) {
//       navigate('/driverride');
//     } else {
//       console.error('Failed to submit the form');
//     }
//   };

//   return (
//     <div>
//       <Primary />
//       <div className="auto-road">
//         <div className="main-content">
//           <div className="form-container">
//             <h2>Offer a Ride and Expand Your Reach</h2>
//             <form onSubmit={handleSubmit}>
//               <label>PICK-UP LOCATION</label>
//               <input
//                 type="text"
//                 placeholder="City, Airport, Station, etc"
//                 value={formData.pickupLocation}
//                 onChange={(e) => setFormData({ ...formData, pickupLocation: e.target.value })}
//               />
//               <label>DROP-OFF LOCATION</label>
//               <input
//                 type="text"
//                 placeholder="City, Airport, Station, etc"
//                 value={formData.dropoffLocation}
//                 onChange={(e) => setFormData({ ...formData, dropoffLocation: e.target.value })}
//               />
//               <label>PICK-UP DATE</label>
//               <input
//                 type="date"
//                 value={formData.pickupDate}
//                 onChange={(e) => setFormData({ ...formData, pickupDate: e.target.value })}
//               />
//               <label>DROP-OFF DATE</label>
//               <input
//                 type="date"
//                 value={formData.dropoffDate}
//                 onChange={(e) => setFormData({ ...formData, dropoffDate: e.target.value })}
//               />
//               <label>PICK-UP TIME</label>
//               <input
//                 type="time"
//                 value={formData.pickupTime}
//                 onChange={(e) => setFormData({ ...formData, pickupTime: e.target.value })}
//               />
//               <button type="submit">POST</button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AutoRoad;

