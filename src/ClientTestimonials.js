


// import React from 'react';
// import './ClientTestimonials.css';

// const testimonials = [
//   {
//     name: 'STELLA LARSON',
//     text: 'Sample text. Click to select the text box. Click again or double click to start editing the text.',
//     imgSrc: 'https://www.pngitem.com/pimgs/m/255-2558030_icon-customers-drawing-customer-icon-png-transparent-png.png', 
//     bgColor: '#6aa4fc'
    
//   },
//   {
//     name: 'NICK JHONSON',
//     text: 'Sample text. Click to select the text box. Click again or double click to start editing the text.',
//     imgSrc: 'https://via.placeholder.com/150',
//     bgColor: '#5bd5b5'
//   },
//   {
//     name: 'GLEN DAVIES',
//     text: 'Sample text. Click to select the text box. Click again or double click to start editing the text.',
//     imgSrc: 'https://via.placeholder.com/150', 
//     bgColor: '#ff6584'
//   },
//   {
//     name: 'STELLA LARSON',
//     text: 'Sample text. Click to select the text box. Click again or double click to start editing the text.',
//     imgSrc: 'https://www.pngitem.com/pimgs/m/255-2558030_icon-customers-drawing-customer-icon-png-transparent-png.png', 
//     bgColor: '#6aa4fc'
//   },
//   {
//     name: 'NICK JHONSON',
//     text: 'Sample text. Click to select the text box. Click again or double click to start editing the text.',
//     imgSrc: 'https://via.placeholder.com/150',
//     bgColor: '#5bd5b5'
//   },
//   {
//     name: 'GLEN DAVIES',
//     text: 'Sample text. Click to select the text box. Click again or double click to start editing the text.',
//     imgSrc: 'https://via.placeholder.com/150', 
//     bgColor: '#ff6584'
//   },
//   {
//     name: 'NICK JHONSON',
//     text: 'Sample text. Click to select the text box. Click again or double click to start editing the text.',
//     imgSrc: 'https://via.placeholder.com/150',
//     bgColor: '#5bd5b5'
//   },
//   {
//     name: 'Add shortcut', 
//     imgSrc: 'https://img.myloview.com/stickers/add-button-icon-isolated-on-background-plus-symbol-modern-simple-vector-icon-for-website-design-mobile-app-ui-vector-illustration-700-251169670.jpg' 
//   },
// ];

// const ClientTestimonials = () => {
//   return (
//     <div className="testimonials-container">
//       <h1>Our clients love the we build <strong>stores experience</strong></h1>
//       <div className="testimonials-grid">
//         {testimonials.map((testimonial, index) => (
//           <div key={index} className="testimonial-card" style={{ backgroundColor: testimonial.bgColor }}>
//             <button className="testimonial-button">
//               <img src={testimonial.imgSrc} alt={testimonial.name} className="testimonial-image" />
//             </button>
//             <h2>{testimonial.name}</h2>
//             <p>{testimonial.text}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ClientTestimonials;



import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ClientTestimonials.css';

const testimonials = [
  {
    name: 'STELLA LARSON',
    text: '‘The service was exceptional!Outstanding service and support',
    imgSrc: 'https://cdn-icons-png.flaticon.com/512/9385/9385289.png', 
    bgColor: '#6aa4fc'
  },
  {
    name: 'NICK JHONSON',
    text: '‘Your website is very user-friendly and easy to navigate',
    imgSrc: 'https://cdn-icons-png.flaticon.com/512/9385/9385289.png',
    bgColor: '#5bd5b5'
  },
  {
    name: 'GLEN DAVIES',
    text: '‘The transportation service was reliable and on schedule',
    imgSrc: 'https://cdn-icons-png.flaticon.com/512/9385/9385289.png', 
    bgColor: '#ff6584'
  },
  {
    name: 'JENIFER',
    text: 'Navigating through the site was a breeze, and I found what I needed in no time',
    imgSrc: 'https://cdn-icons-png.flaticon.com/512/9385/9385289.png', 
    bgColor: '#6aa4fc'
  },
  {
    name: 'WILLIAM',
    text: 'The site is well-organized, making it easy to find what I’m looking for without hassle.',
    imgSrc: 'https://cdn-icons-png.flaticon.com/512/9385/9385289.png',
    bgColor: '#5bd5b5'
  },
  {
    name: 'SARAH DAVID',
    text: 'The website’s security features give me confidence that my information is safe',
    imgSrc: 'https://cdn-icons-png.flaticon.com/512/9385/9385289.png', 
    bgColor: '#ff6584'
  },
  {
    name: 'CASLEY',
    text: 'I had a smooth experience using the website, and the load times were fast',
    imgSrc: 'https://cdn-icons-png.flaticon.com/512/9385/9385289.png',
    bgColor: '#5bd5b5'
  },
  {
    name: 'Add Customer', 
    imgSrc: 'https://img.myloview.com/stickers/add-button-icon-isolated-on-background-plus-symbol-modern-simple-vector-icon-for-website-design-mobile-app-ui-vector-illustration-700-251169670.jpg' 
  },
];

const ClientTestimonials = () => {
  const navigate = useNavigate();

  const handleImageClick = (name) => {
    if (name === 'Add Customer') {
      navigate('/vendorsdetailsform');
    }
  };

  return (
    <div className="testimonials-container">
      <h1>Our Valued <strong>CUSTOMERS</strong></h1>
      <div className="testimonials-grid">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card" style={{ backgroundColor: testimonial.bgColor }}>
            <button className="testimonial-button" onClick={() => handleImageClick(testimonial.name)}>
              <img src={testimonial.imgSrc} alt={testimonial.name} className="testimonial-image" />
            </button>
            <h2>{testimonial.name}</h2>
            <p>{testimonial.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientTestimonials;
