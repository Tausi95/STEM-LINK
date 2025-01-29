import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/Home.css';

function Home() {
  return (
    <div className="bg-white text-gray-800 font-sans">
      <header className="hero-section bg-gradient-to-r from-purple-600 to-blue-500 text-white py-16 px-8 text-center">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          {/* Social Media Links */}
          <div className="social-links space-x-4 text-sm md:text-lg">
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">Instagram</a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">Facebook</a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">X (Twitter)</a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">LinkedIn</a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">GitHub</a>
          </div>

          {/* Logo with Link */}
          <div className="logo-link flex items-center space-x-2">
            <Link to="/" className="flex items-center text-white hover:text-gray-200">
              <img src="./logo.png" alt="STEM-LINK" className="logo-img h-10 w-10 rounded-full" />
              <span className="font-semibold text-xl">STEM-LINK</span>
            </Link>
          </div>
        </div>

        <h1 className="text-4xl md:text-5xl font-extrabold mt-8">Welcome to STEM-LINK</h1>
        <p className="mt-4 text-lg md:text-xl">Your gateway to connecting with STEM professionals, educators, and students.</p>

        {/* Search Bar */}
        <form className="mt-8 flex justify-center space-x-4">
          <input 
            type="text" 
            placeholder="Search for mentors, events, or topics..." 
            className="w-3/4 sm:w-1/2 p-3 rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <button type="submit" className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
            Search
          </button>
        </form>
      </header>

      <section className="cta-section py-16 px-8 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Explore STEM-LINK</h2>
        <div className="cta-buttons flex justify-center gap-6">
          <button className="cta-btn bg-purple-600 text-white py-3 px-8 rounded-lg hover:bg-purple-700 transition duration-300 focus:outline-none">
            Find a Mentor
          </button>
          <button className="cta-btn bg-blue-600 text-white py-3 px-8 rounded-lg hover:bg-blue-700 transition duration-300 focus:outline-none">
            Discover Events
          </button>
          <button className="cta-btn bg-yellow-600 text-white py-3 px-8 rounded-lg hover:bg-yellow-700 transition duration-300 focus:outline-none">
            Join the Network
          </button>
        </div>
      </section>

      <section className="highlights-section py-16 px-8 bg-white">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Platform Highlights</h2>
        <div className="highlights grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="highlight bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-900">Mentorship Opportunities</h3>
            <p className="mt-4 text-gray-700">Connect with experienced STEM professionals to guide your career journey.</p>
          </div>
          <div className="highlight bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-900">Networking</h3>
            <p className="mt-4 text-gray-700">Build your professional network and collaborate with peers in your field.</p>
          </div>
          <div className="highlight bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-900">STEM Events & Webinars</h3>
            <p className="mt-4 text-gray-700">Attend live webinars, conferences, and workshops to stay ahead in STEM.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
