import React from 'react';
import '../../styles/Features.css';

const Features = () => {
  // Data structure for grades, streams, and subjects
  const courses = {
    Grade8: {
      Sciences: ['Mathematics', 'Physics', 'Life Sciences'],
      Commerce: ['Economics', 'Accounting'],
      Humanities: ['Geography'],
      Technology: ['Robotics', 'Coding'],
    },
    Grade9: {
      Sciences: ['Mathematics', 'Physics', 'Life Sciences'],
      Commerce: ['Economics', 'Accounting'],
      Humanities: ['Geography'],
      Technology: ['Robotics', 'Coding'],
    },
    Grade10: {
      Sciences: ['Mathematics', 'Physics', 'Life Sciences'],
      Commerce: ['Economics', 'Accounting'],
      Humanities: ['Geography'],
      Technology: ['Robotics', 'Coding'],
    },
    Grade11: {
      Sciences: ['Mathematics', 'Physics', 'Life Sciences'],
      Commerce: ['Economics', 'Accounting'],
      Humanities: ['Geography'],
      Technology: ['Robotics', 'Coding'],
    },
    Grade12: {
      Sciences: ['Mathematics', 'Physics', 'Life Sciences'],
      Commerce: ['Economics', 'Accounting'],
      Humanities: ['Geography'],
      Technology: ['Robotics', 'Coding'],
    },
  };

  return (
    <div className="features-container">
      <header className="features-header">
        <h1>Explore Courses and Programs</h1>
        <p>Browse through a variety of subjects offered from Grade 8 to 12 across different streams.</p>
      </header>

      <section className="grades-section">
        {Object.keys(courses).map((grade) => (
          <div key={grade} className="grade-card">
            <h2>{grade}</h2>
            <div className="streams-container">
              {Object.keys(courses[grade]).map((stream) => (
                <div key={stream} className="stream-card">
                  <h3>{stream}</h3>
                  <ul className="subjects-list">
                    {courses[grade][stream].map((subject) => (
                      <li key={subject}>{subject}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Features;
