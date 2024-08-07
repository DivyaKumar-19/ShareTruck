import React from 'react';
import './IconGrid.css';

const icons = [
  { name: 'Sri Krishna', imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpd4mJRIUwqgE8D_Z2znANEbtiz4GhI4M8NQ&s' },
  { name: 'GITHUB', imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpd4mJRIUwqgE8D_Z2znANEbtiz4GhI4M8NQ&s' },
  { name: 'Amypo', imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpd4mJRIUwqgE8D_Z2znANEbtiz4GhI4M8NQ&s' },
  { name: 'Spotify', imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpd4mJRIUwqgE8D_Z2znANEbtiz4GhI4M8NQ&s' },
  { name: 'Whatsapp', imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpd4mJRIUwqgE8D_Z2znANEbtiz4GhI4M8NQ&s' },
  { name: 'Chat GPT', imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpd4mJRIUwqgE8D_Z2znANEbtiz4GhI4M8NQ&s' },
  { name: 'LinkedIn', imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpd4mJRIUwqgE8D_Z2znANEbtiz4GhI4M8NQ&s' },
  { name: 'Add shortcut', imgSrc: 'https://img.myloview.com/stickers/add-button-icon-isolated-on-background-plus-symbol-modern-simple-vector-icon-for-website-design-mobile-app-ui-vector-illustration-700-251169670.jpg' },
];

const IconGrid = () => {
  return (
    <div className="icon-container">
      <div className="icon-grid">
        {icons.map((icon, index) => (
          <button key={index} className="icon-button">
            <img src={icon.imgSrc} alt={icon.name} className="icon-image" />
            <p className="icon-label">{icon.name}</p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default IconGrid;
