import React from 'react';
import './HomePage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faTruck, faDollarSign } from '@fortawesome/free-solid-svg-icons';

const HomePage = () => {
  return (
    <div className="homepagediv">
      <header className="featuresdiv">
        <div className="features-box1">
          <FontAwesomeIcon icon={faCheckCircle} className="icon" />
          <h3>GREAT SELECTION</h3>
          <p>Lorem ipsum is simply dummy text of the printing and typesetting.</p>
        </div>
        <div className="feature-box1">
          <FontAwesomeIcon icon={faTruck} className="icon" />
          <h3>HIGH QUALITY</h3>
          <p>Lorem ipsum is simply dummy text of the printing and typesetting.</p>
        </div>
        <div className="feature-box1">
          <FontAwesomeIcon icon={faDollarSign} className="icon" />
          <h3>LOWEST PRICES</h3>
          <p>Lorem ipsum is simply dummy text of the printing and typesetting.</p>
        </div>
      </header>

      <section className="main-contentdiv">
        <img src="https://media.istockphoto.com/id/1850894851/photo/white-trucks-driving-on-the-highway-winding-through-forested-landscape-in-autumn-colors-at.webp?b=1&s=170667a&w=0&k=20&c=78cnFyjMueDYmTCY3sFIYlxpCH7yIfb0lWoW5C7ac3o=" alt="Transportation" className="main-image" />
        <div className="main-textdiv">
          <h2>MAKE TRANSPORTATION EASY WAY</h2>
          <p>
            There are many variations of passages of Lorem Ipsum available, 
            but the majority have suffered alteration in some form, by injected 
            humour, or randomised words which don't look even slightly believable.
          </p>
          <button className="learn-more-btn">LEARN MORE</button>
        </div>
      </section>

      <section className="stats">
        <div className="stat-box1">
          <h2>25</h2>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <div className="stat-box1">
          <h2>30+</h2>
          <p>FACILITIES IN U.S.</p>
        </div>
        <div className="stat-box1">
          <h2>1 BILLION</h2>
          <p>MILES DRIVEN PER YEAR</p>
        </div>
      </section>

      <section className="blog">
        <h2>BLOG</h2>
        <div className="blog-cards">
          <div className="blog-card">
            <img src="https://static.vecteezy.com/system/resources/thumbnails/027/843/401/small_2x/a-cargo-truck-with-a-container-is-seen-driving-across-a-bridge-while-a-semi-truck-with-a-cargo-trailer-follows-closely-behind-photo.jpg" alt="Blog 1" />
            <p>LOREM IPSUM IS SIMPLY DUMMY TEXT</p>
          </div>
          <div className="blog-card">
            <img src="https://www.ttnews.com/sites/default/files/styles/article_full_width_image/public/2023-06/Freightliner-Cascadia-1200.jpg" alt="Blog 2" />
            <p>LOREM IPSUM IS SIMPLY DUMMY TEXT</p>
          </div>
          <div className="blog-card">
            <img src="truck7.jpeg" alt="Blog 3" />
            <p>LOREM IPSUM IS SIMPLY DUMMY TEXT</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
