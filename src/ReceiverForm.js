import React from 'react';
import './ReceiverForm.css';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const ReceiverForm = ({ closeModal }) => {
    return (
        <div className="profile-container">
            <div className="profile-header">
                <IconButton className="close-button" onClick={closeModal}>
                    <CloseIcon />
                </IconButton>
                <h2>Profile</h2>
            </div>
            <div className="profile-content">
                <div className="profile-icon">
                    <span>👤</span>
                </div>
                <div className="profile-info">
                    <p><strong>Customer name:</strong> Prabha</p>
                    <p><strong>Customer Address:</strong> 123 Main Street, Apt 4B, Springfield, IL 62704</p>
                    <p><strong>Phone:</strong> 6383193421</p>
                    <p><strong>Receiver name:</strong> Thrisha</p>
                    <p><strong>Receiver Address:</strong> 456 Elm Street, Suite 2, Springfield, IL 62705</p>
                    <p><strong>Location:</strong> Bangalore</p>
                </div>
            </div>
        </div>
    );
};

export default ReceiverForm;
