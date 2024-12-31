import React from 'react';
import { Link } from 'react-router-dom'; // Import Link component from react-router-dom
import './Sidebar.js';
import '../../assets/Images/logo.JPG';
import '../../styles/Header.css';

const Header = () => {
  return (
    <header className="header-container">
      <div className="logo">
        {/* Make the logo clickable using the Link component */}
        <Link to="/" className="logo-link">
          <img src="/logo.JPG" className="logo-img" alt=" STEM-LINK" />
        </Link>
      </div>

      <div className="search-bar">
        <input type="text" placeholder="Search..." className="search-input" />
      </div>

      <nav className="navbar">
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/features">Features</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/profile">Profile</Link></li> {/* Fixed */}
          <li><Link to="/network">Network</Link></li>
          <li><Link to="/mentorship">Mentorship</Link></li>
          <li><Link to="/events">Events</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/signup">Sign Up</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
