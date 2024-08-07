// import React, { useState } from 'react';
// import './Sign.css'; // Import the CSS file
// import PrimarySearch from './cnav';
// import { Link } from 'react-router-dom'; // Import Link from react-router-dom

// const LoginPage = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [service, setService] = useState('');
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');

//   const handleSignUp = (e) => {
//     e.preventDefault();

//     if (password !== confirmPassword) {
//       setError('Passwords do not match');
//       return;
//     }

//     if (!service) {
//       setError('Please select a service');
//       return;
//     }

//     // Placeholder for actual sign-up logic
//     if (name && email && password) {
//       setSuccess('Sign-up successful');
//       setError('');
//     } else {
//       setError('Please fill in all fields');
//     }
//   };

//   return (
//     <div>
//       <PrimarySearch />
//       <div className="signup-page">
//         <div className="signup-container">
//           <div className="signup-image">
//             <img src="login.jpg" alt="Sign Up" />
//           </div>
//           <div className="signup-form">
//             <h2>Login into SHARE TRUCK</h2>
//             <form onSubmit={handleSignUp}>
//               <div>
//                 <label>Name:</label>
//                 <input
//                   type="text"
//                   value={name}
//                   onChange={(e) => setName(e.target.value)}
//                   required
//                 />
//               </div>
//               <div>
//                 <label>Email:</label>
//                 <input
//                   type="email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   required
//                 />
//               </div>
//               <div>
//                 <label>Password:</label>
//                 <input
//                   type="password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   required
//                 />
//               </div>

//               {error && <div className="error">{error}</div>}
//               {success && <div className="success">{success}</div>}
//             </form>
//             <div className="signup-link">
//               Not yet registered? <Link to="/sign">Sign Up</Link>
//             </div>
//               <button type="submit">Login</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;


import React, { useState } from 'react';
import './LoginPage.css'; 
import Primary from './dnav';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  const [activeTab, setActiveTab] = useState('login');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [service, setService] = useState('');
  const [aadhaar, setAadhaar] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Login - Username:', username);
    console.log('Login - Password:', password);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    console.log('Register - Username:', username);
    console.log('Register - Email:', email);
    console.log('Register - Password:', password);
    console.log('Register - Confirm Password:', confirmPassword);
    console.log('Register - Service:', service);
    console.log('Register - Aadhaar:', aadhaar);
  };

  return (
    <div>  
      <Primary />
      <div className='page'> 
      <div className="auth-container1">
        <div className="auth-card1">
          <div className="icon1">
            <img src="https://static.thenounproject.com/png/2366460-200.png" alt="User Icon" />
          </div>
          <div className="tabs1">
            <div
              className={`tab ${activeTab === 'register' ? 'active' : ''}`}
              onClick={() => setActiveTab('register')}
            >
              Register
            </div>
            <div
              className={`tab ${activeTab === 'login' ? 'active' : ''}`}
              onClick={() => setActiveTab('login')}
            >
              Login
            </div>
          </div>
          {activeTab === 'login' && (
            <form className="auth-form1" onSubmit={handleLogin}>
              <div className="input-group1">
                <input
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
              <div className="input-group1">
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="signup-link">
                Not yet registered? <Link to="/sign">Sign Up</Link>
              </div>
              <button type="submit">Login</button>
            </form>
          )}
          {activeTab === 'register' && (
            <form className="auth-form1" onSubmit={handleRegister}>
              <div className="input-group1">
                <input
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
              <div className="input-group1">
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="input-group1">
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="input-group1">
                <input
                  type="password"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </div>
              <div>
                <label>Service:</label>
                <div className="radio-group">
                  <label>
                    <input
                      type="radio"
                      value="customer"
                      checked={service === 'customer'}
                      onChange={(e) => setService(e.target.value)}
                    />
                    Customer
                  </label>
                  <label>
                    <input
                      type="radio"
                      value="admin"
                      checked={service === 'admin'}
                      onChange={(e) => setService(e.target.value)}
                    />
                    Admin
                  </label>
                  <label>
                    <input
                      type="radio"
                      value="driver"
                      checked={service === 'driver'}
                      onChange={(e) => setService(e.target.value)}
                    />
                    Driver
                  </label>
                </div>
              </div>
              {service === 'driver' && (
                <div className="input-group1">
                  <label>License No:</label>
                  <input
                    type="text"
                    value={aadhaar}
                    onChange={(e) => setAadhaar(e.target.value)}
                    required
                  />
                </div>
              )}
              {error && <div className="error">{error}</div>}
              {success && <div className="success">{success}</div>}
              <div className="signup-link">
                Already have an account? <Link to="/loginpage">Login</Link>
              </div>
              <button type="submit">Register</button>
            </form>
          )}
        </div>
      </div>
    </div>
    </div>
  );
};

export default LoginPage;

