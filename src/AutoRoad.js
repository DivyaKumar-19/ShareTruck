// import React from 'react';
// import './AutoRoad.css';

// const AutoRoad = () => {
//   return (
//     <div className="auto-road">
//       <div className="main-content">
//         <div className="text-content">
//           <h1>Now It's easy for you to book transport</h1>
          
//           <button>Easy steps for booking transport</button>
//         </div>
       
//       </div>
//     </div>
//   );
// };

// export default AutoRoad;


import React from 'react';
import './AutoRoad.css';
import Features from './Features';

const AutoRoad = () => {
  const scrollToFeatures = () => {
    const element = document.getElementById('features-section');
    element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="auto-road">
      <div className="main-content">
        <div className="text-contents">
        <h1>Your Goods, Our Journey – Together, We Deliver with Trust and Efficiency</h1>
          <button onClick={scrollToFeatures}>Easy steps for booking transport</button>
        </div>
      </div>
      
      {/* Features section */}
      {/* <div id="features-section" className="features-section">
        <Features />
      </div> */}
    </div>
  );
};

export default AutoRoad;




