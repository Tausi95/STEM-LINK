import React from 'react';
import '../assets/css/About.css';
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope, FaPhone } from 'react-icons/fa';

const teamMembers = [
  {
    name: 'Chancy Tsonga',
    linkedin: 'https://linkedin.com/in/TausiTsonga',
    github: 'https://github.com/Tausi95',
    twitter: 'https://twitter.com/ChancyTausi',
    role: 'Developer',
    photo: 'path/to/your/photo.jpg' // Replace with an actual path to the image
  }
];

const About = () => {
  return (
    <section className="about">
      <div className="about-grid">
        {/* Introduction Section */}
        <div className="about-intro">
          <h2>Welcome to STEMLink</h2>
          <p>
            STEMLink is a cutting-edge platform dedicated to empowering students and professionals in STEM (Science, Technology, Engineering, and Mathematics).
            We offer mentorship, resources, and career development opportunities to help individuals excel in their STEM journeys.
          </p>
          <h3>Subjects We Cover</h3>
          <ul>
            <li>Mathematics</li>
            <li>Physics</li>
            <li>Chemistry</li>
            <li>Biology</li>
	    <li>Bio-informatics</li>
            <li>Introduction to Programming</li>
            <li>Accounting</li>
            <li>Economics</li>
          </ul>
        </div>

        {/* Features Section */}
        <div className="about-features">
          <h3>Platform Features</h3>
          <p>Here’s what you can expect from STEMLink:</p>
          <ul>
            <li><strong>Events:</strong> Publish and explore external and internal STEM events.</li>
            <li><strong>Career & Opportunities:</strong> Access scholarships, workshops, and professional training programs.</li>
            <li><strong>Live Mentorship:</strong> Participate in live or recorded mentorship sessions.</li>
            <li><strong>Networking:</strong> Collaborate with students, mentors, and professionals in the STEM field.</li>
          </ul>
        </div>

        {/* Mission Section */}
        <div className="about-mission">
          <h3>Our Mission</h3>
          <p>
            Our mission is to bridge the gap between talent and opportunity in STEM fields, focusing on mentorship and skill-building. Starting in Cape Town, we aim to expand across Africa, connecting learners with resources and professionals to foster growth and innovation.
          </p>
        </div>

        {/* Contact Section */}
        <div className="about-contact">
          <h3>Contact Us</h3>
          <p>
            Have questions or need assistance? Get in touch with us:
          </p>
          <p><FaEnvelope /> Email: <a href="mailto:info@stemlink.com">info@stemlink.com</a></p>
          <p><FaPhone /> Phone: +27 649 984 601</p>
        </div>

        {/* Blog Section */}
        <div className="about-blog">
          <h3>Our Blog</h3>
          <p>Explore insightful articles, success stories, and updates about STEMLink.</p>
          <button className="blog-btn">Visit Blog</button>
        </div>

        {/* Team Section */}
        <div className="about-team">
          <h3>Meet Our Team</h3>
          <ul className="team-list">
            {teamMembers.map((member, index) => (
              <li key={index} className="team-member">
                <img src={member.photo} alt={member.name} className="team-photo" /> {/* Optional */}
                <div>
                  <p className="team-name">{member.name} - {member.role}</p>
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                    <FaLinkedin /> LinkedIn
                  </a>
                  <a href={member.github} target="_blank" rel="noopener noreferrer">
                    <FaGithub /> GitHub
                  </a>
                  <a href={member.twitter} target="_blank" rel="noopener noreferrer">
                    <FaTwitter /> Twitter
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Call-to-Action Section */}
        <div className="about-cta">
          <h3>Join STEMLink Today!</h3>
          <p>
            Whether you’re a student, mentor, or professional, STEMLink is here to help you connect, learn, and grow.
          </p>
          <button className="cta-btn">Get Started</button>
        </div>
      </div>
    </section>
  );
};

export default About;
