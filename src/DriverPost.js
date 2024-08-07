import React, { useState } from 'react';
import Modal from 'react-modal';
import './DriverPost.css';

import DocumentVerificationForm from './DocumentVerificationForm';
import Footer from './Footer';
import Primary from './dnav';

Modal.setAppElement('#root'); // To avoid screen reader issues

const Trucksearch = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div>
      <Primary/>
      <p><h2>My Rides</h2></p>
      <div className="bus-search-container1">
        <div className="content1">
         
          <div className="results1">
            <div className="result-cards1">
              <div className="result-card1">
                <div className="result-info1">
                  <h4>Tata Motors</h4>
                  <p>21:30 - 05:30 (8h 0m)</p>
                  <p>₹ 550</p>
                  <p>TRUCK Number :</p>
                </div>
                <button className="select-seat-btn1" onClick={openModal}>Book now</button>
              </div>
              <div className="result-card1">
                <div className="result-info1">
                  <h4>Ashok Leyland</h4>
                  <p>21:30 - 03:50 (6h 20m)</p>
                  <p>₹ 700</p>
                  <p>TRUCK Number</p>
                </div>
                <button className="select-seat-btn1" onClick={openModal}>Book now</button>
              </div>
              <div className="result-card1">
                <div className="result-info1">
                  <h4>Mahindra</h4>
                  <p>21:30 - 03:50 (6h 20m)</p>
                  <p>₹ 700</p>
                  <p>TRUCK Number</p>
                </div>
                <button className="select-seat-btn1" onClick={openModal}>Book now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Document Verification Form1"
        className="modal1"
        overlayClassName="overlay1"
      >
        <button onClick={closeModal} className="close-modal-btn1">Close</button>
        <DocumentVerificationForm />
      </Modal>
      <br></br>
      <Footer/>
    </div>
  );
};

export default Trucksearch;
