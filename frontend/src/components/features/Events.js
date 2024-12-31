import React, { useState, useEffect } from 'react';
import eventService from '../../services/eventService'; // Import event service
import '../../styles/Events.css';

function Events() {
  const [activeEventTab, setActiveEventTab] = useState(0);
  const [activeProjectTab, setActiveProjectTab] = useState(0);
  const [liveWebinars, setLiveWebinars] = useState([]);
  const [scheduledEvents, setScheduledEvents] = useState([]);
  const [externalEvents, setExternalEvents] = useState([]);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Fetch events and projects using eventService
    eventService
      .getLiveWebinars()
      .then(setLiveWebinars)
      .catch((err) => console.error('Error fetching live webinars:', err));

    eventService
      .getScheduledEvents()
      .then(setScheduledEvents)
      .catch((err) => console.error('Error fetching scheduled events:', err));
 
    eventService
      .getScheduledEvents()  // function update and is correctly imported
      .then(setScheduledEvents)
      .catch((err) => console.error('Error fetching scheduled events:', err));

    eventService
      .getExternalEvents()
      .then(setExternalEvents)
      .catch((err) => console.error('Error fetching external events:', err));

    eventService
      .getProjects()
      .then(setProjects)
      .catch((err) => console.error('Error fetching projects:', err));
  }, []);

  const handleTabClick = (setActiveTab) => (index) => {
    setActiveTab(index);
  };

  return (
    <div className="events-container">
      <h1>Events</h1>
      <p>Discover STEM events and showcase innovative projects!</p>

      {/* Event Tabs */}
      <section className="events-tabs">
        <h2>Events</h2>
        <div className="tabs">
          <button
            className={`tab ${activeEventTab === 0 ? 'active' : ''}`}
            onClick={() => handleTabClick(setActiveEventTab)(0)}
          >
            Live Webinars
          </button>
          <button
            className={`tab ${activeEventTab === 1 ? 'active' : ''}`}
            onClick={() => handleTabClick(setActiveEventTab)(1)}
          >
            Scheduled Events
          </button>
          <button
            className={`tab ${activeEventTab === 2 ? 'active' : ''}`}
            onClick={() => handleTabClick(setActiveEventTab)(2)}
          >
            External Events
          </button>
        </div>
        <div className="tab-content">
          {activeEventTab === 0 && (
            <ul className="event-list">
              {liveWebinars.map((event) => (
                <li key={event.id} className="event-item">
                  <h3>{event.title}</h3>
                  <p>{event.date}</p>
                  <p>{event.description}</p>
                </li>
              ))}
            </ul>
          )}
          {activeEventTab === 1 && (
            <ul className="event-list">
              {scheduledEvents.map((event) => (
                <li key={event.id} className="event-item">
                  <h3>{event.title}</h3>
                  <p>{event.date}</p>
                  <p>{event.description}</p>
                </li>
              ))}
            </ul>
          )}
          {activeEventTab === 2 && (
            <ul className="event-list">
              {externalEvents.map((event) => (
                <li key={event.id} className="event-item">
                  <h3>{event.title}</h3>
                  <p>{event.date}</p>
                  <p>{event.description}</p>
                  <button
                    className="redirect-btn"
                    onClick={() => window.open(event.url, '_blank')}
                  >
                    Go to Event
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>

      {/* Project Tabs */}
      <section className="projects-tabs">
        <h2>Innovation Showcase</h2>
        <div className="tabs">
          {projects.map((_, index) => (
            <button
              key={index}
              className={`tab ${activeProjectTab === index ? 'active' : ''}`}
              onClick={() => handleTabClick(setActiveProjectTab)(index)}
            >
              Panel {index + 1}
            </button>
          ))}
        </div>
        <div className="tab-content">
          <ul className="showcase-list">
            {projects
              .slice(activeProjectTab * 5, (activeProjectTab + 1) * 5)
              .map((project) => (
                <li key={project.id} className="project-item">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <p>Status: {project.status}</p>
                  {project.externalLink && (
                    <button
                      className="redirect-btn"
                      onClick={() => window.open(project.externalLink, '_blank')}
                    >
                      Learn More
                    </button>
                  )}
                </li>
              ))}
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Events;

