import React from 'react';
import './NotificationPage.css';

const notifications = [
  { id: 1, message: 'Your order has been shipped.' },
  { id: 2, message: 'You have a new message from support.' },
  { id: 3, message: 'Your password was changed successfully.' },
];

const NotificationPage = () => {
  return (
    <div className="notification-container">
      <h1>Notifications</h1>
      <ul className="notification-list">
        {notifications.map(notification => (
          <li key={notification.id} className="notification-item">
            {notification.message}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NotificationPage;
