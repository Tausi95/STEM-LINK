import React from 'react';
import { Link } from 'react-router-dom';
import '../layout/Sidebar.js';
import '../../styles/Home.css';

function Home() {
  return (
    <div className="home-container">
      <header className="hero-section">
        <div className="header-left">
          {/* Social Media Links */}
          <div className="social-links">
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">X (Twitter)</a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </div>

        <div className="header-right">
          {/* Logo with Link */}
          <Link to="/" className="logo-link">
            <img src="./logo.png" alt="STEM-LINK" className="logo-img" />
            <span>STEM-LINK</span>
          </Link>
        </div>

        <h1>Welcome to STEM-LINK</h1>
        <p>Your gateway to connecting with STEM professionals, educators, and students.</p>

        {/* Search Bar */}
        <form className="search-form">
          <input 
            type="text" 
            placeholder="Search for mentors, events, or topics..." 
            className="search-input"
          />
          <button type="submit" className="search-button">Search</button>
        </form>
      </header>

      <section className="cta-section">
        <h2>Explore STEM-LINK</h2>
        <div className="cta-buttons">
          <button className="cta-btn" onClick={() => window.location.href = "/mentorship"}>Find a Mentor</button>
          <button className="cta-btn" onClick={() => window.location.href = "/events"}>Discover Events</button>
          <button className="cta-btn" onClick={() => window.location.href = "/network"}>Join the Network</button>
        </div>
      </section>

      <section className="highlights-section">
        <h2>Platform Highlights</h2>
        <div className="highlights">
          <div className="highlight">
            <h3>Mentorship Opportunities</h3>
            <p>Connect with experienced STEM professionals to guide your career journey.</p>
          </div>
          <div className="highlight">
            <h3>Networking</h3>
            <p>Build your professional network and collaborate with peers in your field.</p>
          </div>
          <div className="highlight">
            <h3>STEM Events & Webinars</h3>
            <p>Attend live webinars, conferences, and workshops to stay ahead in STEM.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
