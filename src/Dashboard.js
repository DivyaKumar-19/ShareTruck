import React, { useState } from 'react';
import { Line, Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import './Dashboard.css';

// Register the required components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  const userData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
      {
        label: 'Users',
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(54, 162, 235, 0.4)',
        hoverBorderColor: 'rgba(54, 162, 235, 1)',
        data: [65, 59, 80, 81, 56, 55, 40],
      },
    ],
  };

  const incomeData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
      {
        label: 'Income',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(75, 192, 192, 0.4)',
        hoverBorderColor: 'rgba(75, 192, 192, 1)',
        data: [65, 59, 80, 81, 56, 55, 40],
      },
    ],
  };

  const trafficData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
      {
        label: 'Visits',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
      },
      {
        label: 'Service Views',
        data: [85, 69, 90, 91, 76, 75, 60],
        fill: false,
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
      },
    ],
  };

  return (
    <div className="dashboard">
      <aside className={`sidebar ${sidebarVisible ? 'visible' : ''}`}>
        <div className="logo">HOUSEHoldCare</div>
        <nav>
          <ul>
            <li>Dashboard</li>
            <li>Users</li>
            <li>Settings</li>
          </ul>
        </nav>
      </aside>
      <main className={`main-content ${sidebarVisible ? 'shifted' : ''}`}>
        <header className="header">
          <div className="hamburger" onClick={toggleSidebar}>
            &#9776;
          </div>
        </header>
        <section className="stats-charts">
          <div className="stats">
            <div className="stat-item">
              <p className="stat-value">26K</p>
              <p className="stat-label">Users</p>
            </div>
            <div className="stat-item">
              <p className="stat-value">$6,200</p>
              <p className="stat-label">Income</p>
            </div>
            <div className="stat-item">
              <p className="stat-value">2.49%</p>
              <p className="stat-label">Conversion Rate</p>
            </div>
            <div className="stat-item">
              <p className="stat-value">44K</p>
              <p className="stat-label">Sessions</p>
            </div>
          </div>
          <div className="charts">
            <div className="chart traffic">
              <h3>Traffic</h3>
              <Line data={trafficData} />
            </div>
            <div className="chart income">
              <h3>Income</h3>
              <Bar data={incomeData} />
            </div>
          </div>
        </section>
        <section className="social-stats">
          <div className="social-item facebook">
            <p className="social-label">Facebook</p>
            <p className="social-value">89k</p>
            <p className="social-description">Followers</p>
          </div>
          <div className="social-item twitter">
            <p className="social-label">Twitter</p>
            <p className="social-value">973k</p>
            <p className="social-description">Followers</p>
          </div>
          <div className="social-item linkedin">
            <p className="social-label">LinkedIn</p>
            <p className="social-value">500+</p>
            <p className="social-description">Connections</p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
