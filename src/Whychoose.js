import React from 'react';
import './Whychoose.css';

const WhyChoose = () => {
  const features = [
    {
      icon: '📅', // Replace with an actual icon or image
      title: 'Easy Booking',
      description: 'Turpis accumsan. Proin id ligula suspendisse. Aliquet fringilla, aperent eu dignissim.',
    },
    {
      icon: '💰', // Replace with an actual icon or image
      title: 'Value for Money',
      description: 'Turpis accumsan. Proin id ligula suspendisse. Aliquet fringilla, aperent eu dignissim.'
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
      description: 'Turpis accumsan. Proin id ligula suspendisse. Aliquet fringilla, aperent eu dignissim.'
    },
    {
      icon: '📞', // Replace with an actual icon or image
      title: '24 x 7 Support',
      description: 'Turpis accumsan. Proin id ligula suspendisse. Aliquet fringilla, aperent eu dignissim.'
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
