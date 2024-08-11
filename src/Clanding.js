// import React from 'react';
// import './Clanding.css';
// import PrimarySearch from './cnav';
// import WhyChoose from './Whychoose';
// import Footer from './Footer';
// import About from './About';
// import Contact from './Contact';
// import { Link } from 'react-router-dom';

// const Clanding = () => {
//   return (
//     <div> 
//       <PrimarySearch/>
//     <div className="container">
//       <div className="background">
//         <h1 className="title">WELCOME</h1>
//         <h2 className="subtitle">Magnificent Paris</h2>
//         <p className="description">Recognizable, lovely, passionate and forever yours...</p>
//         <div className="button-group">
          
//         </div>
//       </div>
//       <div className="search-tours">
//         <input type="text" placeholder="Select your Departure" />
//         <input type="text" placeholder="Select your Destination" />
//         <input type="date" placeholder="Departure Date" />
       
//         <Link to="/trucksearch">
//         <button className="search-btn">Search</button>
//         </Link>
//       </div>
//     </div>
//     <WhyChoose/>
//     <About/>
//      <Contact/>
//     <Footer/>
//     </div>
//   );
// };

// export default Clanding;



import React, { useEffect, useState } from 'react';
import './Clanding.css';
import PrimarySearch from './cnav';
import WhyChoose from './Whychoose';
import Footer from './Footer';
import About from './About';
import Contact from './Contact';
import { useNavigate } from 'react-router-dom';

const Clanding = () => {
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const name = localStorage.getItem('userName');
    setUserName(name);
  }, []);
  const [departure, setDeparture] = useState('');
  const [destination, setDestination] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate('/trucksearch', {
      state: {
        departure,
        destination,
        departureDate,
      },
    });
  };

  return (
    <div>
      <PrimarySearch />
      <div className="container">
        <div className="background">
          <h1 className="title">WELCOME {userName}!</h1>
          {/* <h2 className="subtitle">Magnificent Paris</h2> */}
          <p className="description">Recognizable, lovely, passionate and forever yours...</p>
        </div>
        <div className="search-tours">
          <input
            type="text"
            placeholder="Select your Departure"
            value={departure}
            onChange={(e) => setDeparture(e.target.value)}
          />
          <input
            type="text"
            placeholder="Select your Destination"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
          />
          <input
            type="date"
            placeholder="Departure Date"
            value={departureDate}
            onChange={(e) => setDepartureDate(e.target.value)}
          />
          <button className="search-btn" onClick={handleSearch}>
            Search
          </button>
        </div>
      </div>
      <WhyChoose />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Clanding;



