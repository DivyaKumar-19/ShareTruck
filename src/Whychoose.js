import React from 'react';
import './Whychoose.css';

const WhyChoose = () => {
  const features = [
    {
      icon: '📅', // Replace with an actual icon or image
      title: 'Easy Booking',
      description: 'Our transport services ensure that your cargo is handled with the utmost care and delivered on time. We understand the importance of reliability in logistics and strive to provide seamless solutions for all your transportation needs..',
    },
    {
      icon: '💰', // Replace with an actual icon or image
      title: 'Value for Money',
      description: 'We are committed to delivering exceptional value with every service we provide. Our transport solutions are designed to offer the highest quality while remaining cost-effective, ensuring you get the most out of your investment.'
    },
    // {
    //   icon: '❤️', // Replace with an actual icon or image
    //   title: 'Passionate Travel',
    //   description: 'Turpis accumsan. Proin id ligula suspendisse. Aliquet fringilla, aperent eu dignissim.'
    // },
    // {
    //   icon: '🌍', // Replace with an actual icon or image
    //   title: 'Awesome Places',
    //   description: 'Turpis accumsan. Proin id ligula suspendisse. Aliquet fringilla, aperent eu dignissim.'
    // },
    {
      icon: '✈️', // Replace with an actual icon or image
      title: 'Diverse Destinations',
      description: 'Our services are designed to offer seamless and efficient transport solutions tailored to your needs. We prioritize reliability and punctuality to ensure your goods are delivered safely and on time. With a focus on high standards and customer satisfaction.'
    },
    {
      icon: '📞', // Replace with an actual icon or image
      title: '24 x 7 Support',
      description: 'We offer top-tier transportation solutions designed for efficiency. Our dedicated team ensures that every shipment is handled with care and delivered on schedule. By leveraging logistics and a commitment to customer satisfaction.'
    },
  ];

  return (
    <div className="why-choose-us">
      <h2 className="heading">Why Choose Us?</h2>
      
      <div className="features">
        {features.map((feature, index) => (
          <div className="feature" key={index}>
            <div className="icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChoose;
