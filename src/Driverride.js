import React, { useState } from 'react';
import { Modal, Box, IconButton } from '@mui/material';
import Primary from './dnav';
import Footer from './Footer';
import ReceiverForm from './ReceiverForm';
import './Driverride.css';

const Driverride = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div>
      <Primary />
      <div className="bus-sear-container">
        <div className="content1">
          <div className="results1">
            <div className="result1-cards">
              <div className="result1-card">
                <div className="result1-info">
                  <h4>Tata Motors</h4>
                  <div className="route-info">
                    <i className="fas fa-truck"></i>
                    <p>21:30 - 05:30 (8h 0m)</p>
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <p>From: Mumbai</p>
                  <p>To: Delhi</p>
                  <p>Truck Number: MH12 AB 1234</p>
                  <p>Cost: ₹ 550</p>
                </div>
                <button className="new-book-btn" onClick={openModal}>
                  <i className="fas fa-truck moving-truck"></i> View Details
                </button>
              </div>
              <div className="result1-card">
                <div className="result1-info">
                  <h4>Ashok Leyland</h4>
                  <div className="route-info">
                    <i className="fas fa-truck"></i>
                    <p>21:30 - 03:50 (6h 20m)</p>
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <p>From: Bangalore</p>
                  <p>To: Hyderabad</p>
                  <p>Truck Number: KA05 CD 6789</p>
                  <p>Cost: ₹ 700</p>
                </div>
                <button className="new-book-btn" onClick={openModal}>
                  <i className="fas fa-truck moving-truck"></i> View Details
                </button>
              </div>
              <div className="result1-card">
                <div className="result1-info">
                  <h4>Mahindra</h4>
                  <div className="route-info">
                    <i className="fas fa-truck"></i>
                    <p>21:30 - 03:50 (6h 20m)</p>
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <p>From: Chennai</p>
                  <p>To: Kolkata</p>
                  <p>Truck Number: TN10 EF 9876</p>
                  <p>Cost: ₹ 700</p>
                </div>
                <button className="new-book-btn" onClick={openModal}>
                  <i className="fas fa-truck moving-truck"></i> View Details
                </button>
              </div>
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
