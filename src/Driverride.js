// import React, { useContext, useState } from 'react';
// import { Modal, Box, IconButton } from '@mui/material';
// import Primary from './dnav';
// import Footer from './Footer';
// import ReceiverForm from './ReceiverForm';
// import './Driverride.css';
// import { FormContext } from './FormContext';

// const Driverride = () => {
//   const { formData } = useContext(FormContext);
//   const [modalIsOpen, setModalIsOpen] = useState(false);

//   const openModal = () => {
//     setModalIsOpen(true);
//   };

//   const closeModal = () => {
//     setModalIsOpen(false);
//   };

//   return (
//     <div>
//       <Primary />
//       <div className="bus-sear-container">
//         <div className="content1">
//           <div className="results1">
//             <div className="result1-cards">
//               <div className="result1-card">
//                 <div className="result1-info">
//                   <h4>Your Trip Details</h4>
//                   <div className="route-info">
//                     <i className="fas fa-truck"></i>
//                     <p>{formData.pickupTime} (Estimated Time)</p>
//                     <i className="fas fa-map-marker-alt"></i>
//                   </div>
//                   <p>From: {formData.pickupLocation}</p>
//                   <p>To: {formData.dropoffLocation}</p>
//                   <p>Pick-up Date: {formData.pickupDate}</p>
//                   <p>Drop-off Date: {formData.dropoffDate}</p>
//                   <p>Truck Number: MH12 AB 1234</p>
//                   <p>Cost: ₹ 550</p>
//                 </div>
//                 <button className="new-book-btn" onClick={openModal}>
//                   <i className="fas fa-truck moving-truck"></i> View Details
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <Footer />
//       <Modal
//         open={modalIsOpen}
//         onClose={closeModal}
//         aria-labelledby="modal-modal-title"
//         aria-describedby="modal-modal-description"
//         closeAfterTransition
//         BackdropProps={{
//           style: { backgroundColor: 'rgba(0, 0, 0, 0.5)' },
//         }}
//       >
//         <Box
//           sx={{
//             position: 'absolute',
//             top: '50%',
//             left: '50%',
//             transform: 'translate(-50%, -50%)',
//             width: 400,
//             bgcolor: 'background.paper',
//             boxShadow: 24,
//             p: 4,
//             borderRadius: 2,
//           }}
//         >
//           <ReceiverForm closeModal={closeModal} />
//         </Box>
//       </Modal>
//     </div>
//   );
// };

// export default Driverride;


import React, { useContext, useState } from 'react';
import { Modal, Box } from '@mui/material';
import Primary from './dnav';
import Footer from './Footer';
import ReceiverForm from './ReceiverForm';
import './Driverride.css';
import { FormContext } from './FormContext';

const Driverride = () => {
  const { formData } = useContext(FormContext);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const staticData = [
    {
      id: 1,

      from: 'Mumbai',
      to: 'Delhi',
      time: '21:30 - 05:30 (8h 0m)',
      truckNumber: 'MH12 AB 1234',
      cost: '₹ 550',
    },
    {
      id: 2,
      
      from: 'Bangalore',
      to: 'Hyderabad',
      time: '21:30 - 03:50 (6h 20m)',
      truckNumber: 'KA05 CD 6789',
      cost: '₹ 700',
    },
    {
      id: 3,
      
      from: 'Chennai',
      to: 'Kolkata',
      Pickupdate:'2024-01-18',
      DropoffDate:'2024-01-30',
      time: '21:30 - 03:50 (6h 20m)',
      truckNumber: 'TN10 EF 9876',
      cost: '₹ 700',
    },
  ];

  return (
    <div>
      <Primary />
      <div className="bus-sear-container">
        <div className="content1">
          {/* <img src='truck2.jpg'></img> */}
          <div className="results1">
            <div className="result1-cards">
              {/* User Input Data */}
              {formData.pickupLocation && (
                <div className="result1-card">
                  <div className="result1-info">
                    <h4>Your Trip Details</h4>
                    <div className="route-info">
                      <i className="fas fa-truck"></i>
                      <p>{formData.pickupTime} (Estimated Time)</p>
                      <i className="fas fa-map-marker-alt"></i>
                    </div>
                    <p>From: {formData.pickupLocation}</p>
                    <p>To: {formData.dropoffLocation}</p>
                    <p>Pick-up Date: {formData.pickupDate}</p>
                    <p>Drop-off Date: {formData.dropoffDate}</p>
                    <p>Truck Number: TBD</p>
                    <p>Cost: TBD</p>
                  </div>
                  <button className="new-book-btn" onClick={openModal}>
                    <i className="fas fa-truck moving-truck"></i> View Details
                  </button>
                </div>
              )}
              {/* Static Data */}
              {staticData.map((ride) => (
                <div key={ride.id} className="result1-card">
                  <div className="result1-info">
                    <h4>{ride.company}</h4>
                    <div className="route-info">
                      <i className="fas fa-truck"></i>
                      <p>{ride.time}</p>
                      <i className="fas fa-map-marker-alt"></i>
                    </div>
                    <p>From: {ride.from}</p>
                    <p>To: {ride.to}</p>
                    <p>Truck Number: {ride.truckNumber}</p>
                    <p>Cost: {ride.cost}</p>
                  </div>
                  <button className="new-book-btn" onClick={openModal}>
                    <i className="fas fa-truck moving-truck"></i> View Details
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <Modal
        open={modalIsOpen}
        onClose={closeModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        closeAfterTransition
        BackdropProps={{
          style: { backgroundColor: 'rgba(0, 0, 0, 0.5)' },
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
            borderRadius: 2,
          }}
        >
          <ReceiverForm closeModal={closeModal} />
        </Box>
      </Modal>
    </div>
  );
};

export default Driverride;

