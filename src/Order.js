import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, IconButton, Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import './Order.css';
import PrimarySearch from './cnav';
import Footer from './Footer';
import FeedbackForm from './Community'; // Assuming FeedbackForm is the form component

const Order = () => {
  const [open, setOpen] = useState(false); // State to control modal open/close

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <PrimarySearch/>
      <div className="order-page">
        <div className="order-container">
          <h2>My Rides</h2>
          
          <div className="order-card">
            <div className="order-track">
              <button className="track-button" onClick={handleOpen}>FEEDBACK</button> {/* Open modal */}
            </div>
            <div className="order-item">
              <img src="https://uxwing.com/wp-content/themes/uxwing/download/logistics-shipping-delivery/truck-delivered-icon.png" alt="Netting Mykonos Tunic Dress" />
              <div className="item-details">
                <h4>Electronics</h4>
                <p>By: Milly Thomas</p>
                <p>Weight: 10kg</p>
                <p>Rs. 12050</p>
              </div>
              <div className="item-status">
                <p className="status">Status <span className="in-transit">In - Transit</span></p>
                <p>Delivery Expected by: <strong>20 August 2024</strong></p>
              </div>
            </div>
            <div className="order-track">
              <button className="track-button" onClick={handleOpen}>FEEDBACK</button> {/* Open modal */}
            </div>
            <div className="order-item">
              <img src="https://uxwing.com/wp-content/themes/uxwing/download/logistics-shipping-delivery/truck-delivered-icon.png" alt="Embroidered Sequin Mini Dress" />
              <div className="item-details">
                <h4>Furnitures</h4>
                <p>By: Milly Thomas</p>
                <p>Weight:50kg</p>
                <p>Rs. 10760</p>
              </div>
              <div className="item-status">
                <p className="status">Status <span className="in-transit">Delivered</span></p>
                <p>Delivery Expected by: <strong>04 June 2024</strong></p>
              </div>
            </div>
            <div className="order-track">
              <button className="track-button" onClick={handleOpen}>FEEDBACK</button> {/* Open modal */}
            </div>
            <div className="order-item">
              <img src="https://uxwing.com/wp-content/themes/uxwing/download/logistics-shipping-delivery/truck-delivered-icon.png" alt="Embroidered Sequin Mini Dress" />
              <div className="item-details">
                <h4>Furnitures</h4>
                <p>By: Milly Thomas</p>
                <p>Weight:40kg</p>
                <p>Rs. 10760</p>
              </div>
              <div className="item-status">
                <p className="status">Status <span className="in-transit">Delivered</span></p>
                <p>Delivery Expected by: <strong>24 March 2023</strong></p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>

      {/* Feedback Form Modal */}
      <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
        <DialogTitle>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span>Send Us Your Feedback!</span>
            <IconButton edge="end" color="inherit" onClick={handleClose} aria-label="close">
              <CloseIcon />
            </IconButton>
          </div>
        </DialogTitle>
        <DialogContent>
          <FeedbackForm />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Order;
