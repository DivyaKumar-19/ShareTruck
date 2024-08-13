import React from 'react';
import './Features.css';

const featuresData = [
  {
    icon: '🚚',
    title: 'Real-Time Tracking',
    description: 'Track your shipment in real-time from pick-up to delivery with our advanced GPS system.'
  },

  {
    icon: '🔒',
    title: 'Secure Payment',
    description: 'Enjoy peace of mind with our secure and reliable payment options.'
  },

  {
    icon: '📞',
    title: '24/7 Customer Support',
    description: 'Our dedicated support team is available 24/7 to assist you with any inquiries.'
  },
  {
    icon: '⚡',
    title: 'Fast & Efficient Service',
    description: 'Experience fast and efficient service to ensure your goods are delivered on time.'
  },
  {
    icon: '📈',
    title: 'Performance Analytics',
    description: 'Monitor and analyze the performance of your shipments with our detailed analytics.'
  },
  {
    icon: '🌍',
    title: 'Nationwide Coverage',
    description: 'We provide transportation services across the country, ensuring wide coverage.'
  }
];

const Features = () => {
  return (
    <div className="features-container">
      <div className="features-row">
        {featuresData.slice(0, 3).map((feature, index) => (
          <div className="feature-card" key={index}>
            <div className="feature-icon">{feature.icon}</div>
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-description">{feature.description}</p>
          </div>
        ))}
      </div>
      <div className="features-row">
        {featuresData.slice(3).map((feature, index) => (
          <div className="feature-card" key={index}>
            <div className="feature-icon">{feature.icon}</div>
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-description">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Features;
