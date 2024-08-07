import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div className="contact-page">
            <div className="contact-header">
                <h1>Contact Us</h1>
            </div>
            <div className="contact-container">
                <div className="contact-cards">
                    <div className="contact-card">
                        <i className="fas fa-map-marker-alt"></i>
                        <h3>OUR MAIN OFFICE</h3>
                        <p>Global Transport Solutions
                            1234 Freight Avenue
                            Transport City, TC 56789
                            India</p>
                    </div>
                    <div className="contact-card">
                        <i className="fas fa-phone"></i>
                        <h3>PHONE NUMBER</h3>
                        <p>123-456-7890<br />800-123-4567 (Toll Free)</p>
                    </div>
                    <div className="contact-card">
                        <i className="fas fa-fax"></i>
                        <h3>FAX</h3>
                        <p>1-800-234-5678</p>
                    </div>
                    <div className="contact-card">
                        <i className="fas fa-envelope"></i>
                        <h3>EMAIL</h3>
                        <p>support@sharetruck.com</p>
                    </div>
                </div>
                <div className="contact-form-section">
                    <div className="contact-info">
                        <h2>Get in touch</h2>
                        <p className="sustainability">
                            We are transporting your goods safe manner.
                        </p>
                        <p>
                            Have any questions or feedback? Feel free to reach out to us. We value your input and strive to continuously improve our services to better meet your needs. Let's work together to create happier community.
                        </p>
                    </div>
                    <div className="contact-form">
                        <form>
                            <div className="form-group">
                                <label>Email</label>
                                <input type="email" placeholder="Enter a valid email address" />
                            </div>
                            <div className="form-group">
                                <label>Name</label>
                                <input type="text" placeholder="Enter your Name" />
                            </div>
                            <div className="form-group">
                                <label>Message</label>
                                <textarea placeholder="Enter your message"></textarea>
                            </div>
                            <button type="submit">SUBMIT</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;