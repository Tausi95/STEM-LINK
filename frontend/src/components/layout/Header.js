import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';
import './Sidebar.js';
import '../../assets/Images/logo.JPG';
import '../../styles/Header.css';

const Header = () => {
  const { isLoggedIn, user, setIsLoggedIn, setUser } = useAuth();
  const Navigate = useNavigate();
  
  const handleSignOut = (e) => {
    e.preventDefault();
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('user');
    setIsLoggedIn(false);
    setUser(null);
    Navigate('/login');
  }

  return (
    <header className="header-container">
      <div className="logo">
        <Link to="/" className="logo-link">
          <img src="/logo.JPG" className="logo-img" alt="STEM-LINK" />
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
          <li><Link to="/network">Network</Link></li>
          <li><Link to="/mentorship">Mentorship</Link></li>
          <li><Link to="/events">Events</Link></li>
          {isLoggedIn ? (
            <li className="dropdown">
              <span className="dropdown-toggle">{ user?.username }</span>
              <ul className="dropdown-menu">
                <li><Link to="/profile">Profile</Link></li>
                <li><Link to="/change-password">Change Password</Link></li>
                <li><Link to="#" onClick={handleSignOut}>Sign Out</Link></li>
              </ul>
            </li>
          ) : (
            <>
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/signup">Sign Up</Link></li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
