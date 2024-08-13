import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './UserManagement.css';
import PrimarySearchAppBar from './nav';

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({ username: '', email: '', password: '', userRole: '' });
  const [editUser, setEditUser] = useState(null); // State to manage the user being edited
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [showForm, setShowForm] = useState(false); // State to manage form visibility
  const [showEditForm, setShowEditForm] = useState(false); // State to manage update form visibility

  useEffect(() => {
    axios.get('http://localhost:8080/api/logins')
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the users!', error);
        setError('There was an error fetching the users.');
      });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (editUser) {
      setEditUser(prevState => ({ ...prevState, [name]: value }));
    } else {
      setNewUser(prevState => ({ ...prevState, [name]: value }));
    }
  };

  const addUser = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8080/api/logins', newUser)
      .then(response => {
        setUsers([...users, response.data]);
        setNewUser({ username: '', email: '', password: '', userRole: '' });
        setError(null);
        setSuccess('User added successfully.');
      })
      .catch(error => {
        console.error('There was an error adding the user!', error);
        setError('There was an error adding the user.');
        setSuccess(null);
      });
  };

  const deleteUser = (id) => {
    axios.delete(`http://localhost:8080/api/logins/${id}`)
      .then(response => {
        setUsers(users.filter(user => user.id !== id));
        setError(null);
        setSuccess('User deleted successfully.');
      })
      .catch(error => {
        console.error('There was an error deleting the user!', error);
        setError('There was an error deleting the user.');
        setSuccess(null);
      });
  };

  const startEditUser = (user) => {
    setEditUser(user);
    setShowEditForm(true);
    setShowForm(false); // Hide the add user form if it's visible
  };

  const updateUser = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:8080/api/logins/${editUser.id}`, editUser)
      .then(response => {
        setUsers(users.map(user => (user.id === editUser.id ? response.data : user)));
        setEditUser(null);
        setShowEditForm(false);
        setSuccess('User updated successfully.');
        setError(null);
      })
      .catch(error => {
        console.error('There was an error updating the user!', error);
        setError('There was an error updating the user.');
        setSuccess(null);
      });
  };

  return (
    <div className="user-manage">
      <PrimarySearchAppBar/>
      <h1>User Management</h1>
      {error && <p className="error-message">{error}</p>}
      {success && <p className="success-message">{success}</p>}
      <button onClick={() => setShowForm(prev => !prev)} className="add-button">
        {showForm ? 'Cancel' : 'Add User'}
      </button>
      
      {showForm && (
        <div className="form-container">
          <form onSubmit={addUser} className="add-user-form">
            <span onClick={() => setShowForm(false)} className="close-icon">
              <i className="fas fa-times"></i>
            </span>
            <h2>Add New User</h2>
            <label>
              Username:
              <input type="text" name="username" value={newUser.username} onChange={handleChange} required />
            </label>
            <label>
              Email:
              <input type="email" name="email" value={newUser.email} onChange={handleChange} required />
            </label>
            <label>
              Password:
              <input type="password" name="password" value={newUser.password} onChange={handleChange} required />
            </label>
            <label>
              Role:
              <input type="text" name="userRole" value={newUser.userRole} onChange={handleChange} required />
            </label>
            <button type="submit" className="add-button">Add User</button>
          </form>
        </div>
      )}

      {showEditForm && editUser && (
        <div className="form-container">
          <form onSubmit={updateUser} className="add-user-form">
            <span onClick={() => setShowEditForm(false)} className="close-icon">
              <i className="fas fa-times"></i>
            </span>
            <h2>Edit User</h2>
            <label>
              Username:
              <input type="text" name="username" value={editUser.username} onChange={handleChange} required />
            </label>
            <label>
              Email:
              <input type="email" name="email" value={editUser.email} onChange={handleChange} required />
            </label>
            <label>
              Password:
              <input type="password" name="password" value={editUser.password} onChange={handleChange} required />
            </label>
            <label>
              Role:
              <input type="text" name="userRole" value={editUser.userRole} onChange={handleChange} required />
            </label>
            <button type="submit" className="add-button">Update User</button>
          </form>
        </div>
      )}

      <table className="user-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Username</th>
            <th>Email</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.userRole}</td>
              <td>
                <button onClick={() => startEditUser(user)} className="edit-button">Edit</button>
                <button onClick={() => deleteUser(user.id)} className="delete-button">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserManagement;

