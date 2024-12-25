// src/components/About.js
import React from 'react';
import './About.css';
// Import social media icons
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

const teamMembers = [
  {
    name: 'Chancy Tsonga', // Updated with your name
    linkedin: 'https://linkedin.com/in/TausiTsonga',
    github: 'https://github.com/Tausi95',
    twitter: 'https://twitter.com/ChancyTausi',
    role: 'Developer r',
    photo: 'path/to/your/photo.jpg' // Optional: Add a path to your photo
  }
];

const About = () => {
  return (
    <section className="about">
      <h2>About ASSETHub</h2>
      <p>
        ASSETHub is a platform dedicated to connecting STEM professionals
        with mentorship and career development opportunities. This project is part of
        ASSET's curriculum, showcasing real-world skills and a passion for building 
	innovative solutions in Science and Mathematics. 

	  ASSET as an organisation will streamline one of its programmes using the APP: 
	  The LDP is two-fold, namely:

	  Grade 12 programme and
	  The Maths and Science programme (for grades 8 -11)
	  For both programmes, suitably qualified tutors are contracted by ASSET to run sessions on identified Saturdays for the duration of the program throughout the year.

	  All learners receive stationery; subject supporting learning materials and a full hot meal every Saturday that has been prepared in partnership with the host centre school.

	  There is a huge focus in mental preparedness mostly for grade 11 and 12 learners through career awareness – mentorship and role modelling sessions. 
	  Additional enhancement to learning is done via holiday camps, revision workshops, winter and spring schools. This project Aims at enhancing ASSET reachness and effectivenes in 
	  its programming. 
      </p>

      <h3>Our Mission</h3>
      <p>
        Our goal is to create a space where STEM enthusiasts and professionals can collaborate in Africa by starting with South Africa,
	Cape Town. People will learn, and grow together. Whether you're a student looking for guidance or an expert 
        willing to mentor, ASSETHUB bridges the gap between talent and opportunity. As such we are expanding the reach through digital clsses, lessons and exams.
      </p>

      <h3>App Developmentg Team Member</h3>
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

      <a href="https://github.com/Tausi95/STEMProlinks" target="_blank" rel="noopener noreferrer" className="github-link">
        View the project on GitHub
      </a>
    </section>
  );
};

export default About;

