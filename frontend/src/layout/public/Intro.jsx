// src/components/Intro.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/css/Intro.css';

const Intro = () => {
  return (
    <section className="intro">
      <div className="cover-image">
        {/* Add your cover image here */}
      </div>
      <h1>STEM-LINK</h1>
      <p>Your gateway to STEM professional networking and opportunities.</p>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/features">Features</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>
      <button><Link to="/app">Visit the Application</Link></button>
    </section>
  );
};

export default Intro;
