import React from 'react';
import '../../styles/Features.css'; // Optional for custom styles
import './SubjectDetail';

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
    <div className="bg-gray-50 text-gray-800 font-sans">
      <header className="features-header py-8 px-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-center">
        <h1 className="text-3xl md:text-4xl font-extrabold">Explore Courses and Programs</h1>
        <p className="mt-4 text-lg md:text-xl">Browse through a variety of subjects offered from Grade 8 to 12 across different streams.</p>
      </header>

      <section className="grades-section py-12 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Section - Grades and Streams */}
          <div className="grades-container col-span-2">
            {Object.keys(courses).map((grade) => (
              <div key={grade} className="grade-card bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
                <h2 className="text-2xl font-bold text-purple-700">{grade}</h2>
                <div className="streams-container mt-6">
                  {Object.keys(courses[grade]).map((stream) => (
                    <div key={stream} className="stream-card mt-4">
                      <h3 className="text-xl font-semibold text-blue-600">{stream}</h3>
                      <ul className="subjects-list mt-2 list-disc pl-6 text-gray-700">
                        {courses[grade][stream].map((subject) => (
                          <li key={subject}>{subject}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Right Panel - Additional Resources */}
          <div className="right-panel bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <h2 className="text-2xl font-bold text-purple-700 mb-6">Additional Resources</h2>

            <div className="resource-section mb-6">
              <h3 className="text-lg font-semibold text-blue-600">1. Visit Our Library</h3>
              <p className="text-gray-600">Explore a wide variety of STEM books, articles, and journals.</p>
              <a href="#library" className="text-purple-500 hover:text-purple-700 underline">Visit Library</a>
            </div>

            <div className="resource-section mb-6">
              <h3 className="text-lg font-semibold text-blue-600">2. Interviews and CV Coach</h3>
              <p className="text-gray-600">Get personalized advice on interviews and building a standout CV.</p>
              <a href="#cv-coach" className="text-purple-500 hover:text-purple-700 underline">Get Coaching</a>
            </div>

            <div className="resource-section mb-6">
              <h3 className="text-lg font-semibold text-blue-600">3. Training and Workshops</h3>
              <p className="text-gray-600">Participate in skill-building workshops and specialized training sessions.</p>
              <a href="#workshops" className="text-purple-500 hover:text-purple-700 underline">Explore Workshops</a>
            </div>

            <div className="resource-section mb-6">
              <h3 className="text-lg font-semibold text-blue-600">4. Listen to Music or Create a Playlist</h3>
              <p className="text-gray-600">Relax and focus with curated playlists for studying and creativity.</p>
              <a href="#music" className="text-purple-500 hover:text-purple-700 underline">Listen Now</a>
            </div>

            <div className="resource-section">
              <h3 className="text-lg font-semibold text-blue-600">5. Vlogs and Inspirations</h3>
              <p className="text-gray-600">Watch inspiring vlogs and interviews with STEM professionals.</p>
              <a href="#vlogs" className="text-purple-500 hover:text-purple-700 underline">Watch Now</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
