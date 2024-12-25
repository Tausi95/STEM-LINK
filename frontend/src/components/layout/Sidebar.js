import React from 'react';
import { FaYoutube, FaInstagram, FaTwitter, FaLinkedin, FaWhatsapp, FaGithub, Falinkedin,  } from 'react-icons/fa';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
        <FaYoutube className="icon youtube" />
      </a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <FaInstagram className="icon instagram" />
      </a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        <FaTwitter className="icon twitter" />
      </a>
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
        <FaLinkedin className="icon linkedin" />
      </a>
      <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer">
        <FaWhatsapp className="icon whatsapp" />
      </a>
      <a href="https://github.com" target="_blank" rel="noopener noreferrer">
        <FaGithub className="icon github" />
      </a>
    </div>
  );
};

export default Sidebar;
