import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './BookingManagementPage.css'; // Ensure this CSS file exists and styles the page
import PrimarySearchAppBar from './nav'; // Import the navigation bar

const BookingManagementPage = () => {
  const [bookings, setBookings] = useState([]);
  const [newBooking, setNewBooking] = useState({
    customerName: '',
    pickupLocation: '',
    dropoffLocation: '',
    pickupDate: '',
    dropoffDate: '',
    weight: '',
  });
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [showForm, setShowForm] = useState(false); // State to manage form visibility

  useEffect(() => {
    axios.get('http://localhost:8080/api/bookings')
      .then(response => {
        setBookings(response.data);
      })
      .catch(error => {
        setError('There was an error fetching the bookings.');
        console.error(error);
      });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewBooking(prevState => ({ ...prevState, [name]: value }));
  };

  const addBooking = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8080/api/bookings', newBooking)
      .then(response => {
        setBookings([...bookings, response.data]);
        setNewBooking({
          customerName: '',
          pickupLocation: '',
          dropoffLocation: '',
          pickupDate: '',
          dropoffDate: '',
          weight: '',
        });
        setError(null);
        setSuccess('Booking added successfully.');
      })
      .catch(error => {
        setError('There was an error adding the booking.');
        console.error(error);
      });
  };

  const deleteBooking = (id) => {
    axios.delete(`http://localhost:8080/api/bookings/${id}`)
      .then(() => {
        setBookings(bookings.filter(booking => booking.id !== id));
        setError(null);
        setSuccess('Booking deleted successfully.');
      })
      .catch(error => {
        setError('There was an error deleting the booking.');
        console.error(error);
      });
  };

  return (
    <div className="booking-management-page">
      <PrimarySearchAppBar />
      <h1>Booking Management</h1>
      {error && <p className="error-message">{error}</p>}
      {success && <p className="success-message">{success}</p>}
      <button onClick={() => setShowForm(prev => !prev)} className="add-button">
        {showForm ? 'Cancel' : 'Add Booking'}
      </button>

      {showForm && (
        <div className="form-container">
          <form onSubmit={addBooking} className="add-booking-form">
            <span onClick={() => setShowForm(false)} className="close-icon">
              <i className="fas fa-times"></i>
            </span>
            <h2>Add New Booking</h2>
            <label>
              Customer Name:
              <input type="text" name="customerName" value={newBooking.customerName} onChange={handleChange} required />
            </label>
            <label>
              Pickup Location:
              <input type="text" name="pickupLocation" value={newBooking.pickupLocation} onChange={handleChange} required />
            </label>
            <label>
              Dropoff Location:
              <input type="text" name="dropoffLocation" value={newBooking.dropoffLocation} onChange={handleChange} required />
            </label>
            <label>
              Pickup Date:
              <input type="date" name="pickupDate" value={newBooking.pickupDate} onChange={handleChange} required />
            </label>
            <label>
              Dropoff Date:
              <input type="date" name="dropoffDate" value={newBooking.dropoffDate} onChange={handleChange} required />
            </label>
            <label>
              Weight (kg):
              <input type="number" name="weight" value={newBooking.weight} onChange={handleChange} required />
            </label>
            <button type="submit" className="add-button">Add Booking</button>
          </form>
        </div>
      )}

      <table className="bookings-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Customer Name</th>
            <th>Pickup Location</th>
            <th>Dropoff Location</th>
            <th>Pickup Date</th>
            <th>Dropoff Date</th>
            <th>Weight (kg)</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map(booking => (
            <tr key={booking.id}>
              <td>{booking.id}</td>
              <td>{booking.customerName}</td>
              <td>{booking.pickupLocation}</td>
              <td>{booking.dropoffLocation}</td>
              <td>{booking.pickupDate}</td>
              <td>{booking.dropoffDate}</td>
              <td>{booking.weight}</td>
              <td>
                <button onClick={() => deleteBooking(booking.id)} className="delete-button">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookingManagementPage;
