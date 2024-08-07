import React, { useState } from 'react';
import Modal from 'react-modal';
import './Trucksearch.css';
import Searchbtn from './Searchbtn';
import DocumentVerificationForm from './DocumentVerificationForm';
import Footer from './Footer';

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
      <Searchbtn />
      <div className="bus-search-container">
        <div className="content">
          <div className="filters">
            <h3>FILTERS</h3>
            <div className="filter-section">
              <h4>Departure Location</h4>
              <p></p>
            </div>
            <div className="filter-section">
              <h4>Destination Location</h4>
            </div>
            <div className="filter-section">
              <h4>Departure Date</h4>
            </div>
            <div className="filter-section">
              <h4>Departure Time</h4>
              <button>6PM-12AM</button>
            </div>
          </div>
          <div className="results">
            <div className="result-cards">
              <div className="result-card">
                <div className="result-info">
                  <h4>Tata Motors</h4>
                  <p>21:30 - 05:30 (8h 0m)</p>
                  <p>₹ 550</p>
                  <p>TRUCK Number : MH12 AB 1234</p>
                </div>
                <button className="select-seat-btn" onClick={openModal}>Book now</button>
              </div>
              <div className="result-card">
                <div className="result-info">
                  <h4>Ashok Leyland</h4>
                  <p>21:30 - 03:50 (6h 20m)</p>
                  <p>₹ 700</p>
                  <p>TRUCK Number : KA05 CD 6789</p>
                </div>
                <button className="select-seat-btn" onClick={openModal}>Book now</button>
              </div>
              <div className="result-card">
                <div className="result-info">
                  <h4>Mahindra</h4>
                  <p>21:30 - 03:50 (6h 20m)</p>
                  <p>₹ 700</p>
                  <p>TRUCK Number : TN10 EF 9876</p>
                </div>
                <button className="select-seat-btn" onClick={openModal}>Book now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Document Verification Form"
        className="modal"
        overlayClassName="overlay"
      >
        <button onClick={closeModal} className="close-modal-btn">Close</button>
        <DocumentVerificationForm />
      </Modal>
      <br></br>
      <Footer/>
    </div>
  );
};

export default Trucksearch;
