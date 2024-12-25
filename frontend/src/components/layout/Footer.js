import React from 'react';
import { FaTwitter, FaFacebook, FaInstagram, FaWhatsapp, FaDiscord } from 'react-icons/fa';
import '../../styles/Footer.css'; // Ensure proper path to the CSS file

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-row">
        {/* Features Section */}
        <div className="footer-column">
          <h3>Features</h3>
          <ul>
            <li>Mentorship</li>
            <li>Events</li>
            <li>Network</li>
            <li>Resources</li>
            <li>Assignments</li>
          </ul>
        </div>

        {/* About Us Section */}
        <div className="footer-column">
          <h3>About Us</h3>
          <ul>
            <li>STEMLINK</li>
            <li>Contact</li>
            <li>Partners</li>
            <li>Blog</li>
          </ul>
        </div>

        {/* Legal Section */}
        <div className="footer-column">
          <h3>Legal</h3>
          <ul>
            <li>Privacy Policy</li>
            <li>Terms of Use</li>
            <li>Impact</li>
          </ul>
        </div>

        {/* Social Links Section */}
        <div className="footer-column social-links">
          <h3>Follow Us</h3>
          <ul>
            <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /> Twitter</a></li>
            <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /> Facebook</a></li>
            <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /> Instagram</a></li>
            <li><a href="https://wa.me" target="_blank" rel="noopener noreferrer"><FaWhatsapp /> WhatsApp</a></li>
            <li><a href="https://discord.com" target="_blank" rel="noopener noreferrer"><FaDiscord /> Discord</a></li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom Row */}
      <div className="footer-bottom">
        <p>&copy; 2024 STEMLINK. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;

