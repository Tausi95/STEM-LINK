// src/components/MentorDashboard.js
import React from 'react';
import { Bar } from 'react-chartjs-2';
import dashboardService from '../../../services/dashboardService';


const MentorDashboard = ({ dashboardData }) => {
  const {
    name,
    subjects,
    students,
    network,
    qualifications,
    availability,
    classes,
  } = dashboardData;

  const attendanceData = {
    labels: students.map((student) => student.name),
    datasets: [
      {
        label: 'Attendance',
        data: students.map((student) => student.attendance),
        backgroundColor: '#4F46E5',
        borderColor: '#4F46E5',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-purple-600">Welcome, {name}</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Subjects Being Taught */}
        <div className="bg-white p-4 shadow rounded">
          <h2 className="text-xl font-semibold mb-3 text-purple-700">Subjects</h2>
          <ul className="list-disc pl-5">
            {subjects.map((subject, index) => (
              <li key={index}>{subject}</li>
            ))}
          </ul>
        </div>

        {/* Students and Attendance */}
        <div className="bg-white p-4 shadow rounded">
          <h2 className="text-xl font-semibold mb-3 text-purple-700">Student Register</h2>
          <Bar data={attendanceData} />
        </div>

        {/* Mentoring Relationships */}
        <div className="bg-white p-4 shadow rounded">
          <h2 className="text-xl font-semibold mb-3 text-purple-700">Mentoring Network</h2>
          <p>
            <strong>Mentoring:</strong>{' '}
            {network.mentoring.length > 0
              ? network.mentoring.join(', ')
              : 'No active mentees'}
          </p>
          <p>
            <strong>Being Mentored:</strong>{' '}
            {network.mentoredBy || 'No mentor assigned'}
          </p>
        </div>

        {/* Qualifications */}
        <div className="bg-white p-4 shadow rounded">
          <h2 className="text-xl font-semibold mb-3 text-purple-700">Qualifications</h2>
          <ul className="list-disc pl-5">
            {qualifications.map((qual, index) => (
              <li key={index}>{qual}</li>
            ))}
          </ul>
        </div>

        {/* Availability */}
        <div className="bg-white p-4 shadow rounded">
          <h2 className="text-xl font-semibold mb-3 text-purple-700">Availability</h2>
          <ul className="list-disc pl-5">
            {availability.map((slot, index) => (
              <li key={index}>{slot}</li>
            ))}
          </ul>
        </div>

        {/* Scheduled Classes */}
        <div className="bg-white p-4 shadow rounded">
          <h2 className="text-xl font-semibold mb-3 text-purple-700">Scheduled Classes</h2>
          <ul className="list-disc pl-5">
            {classes.map((classItem, index) => (
              <li key={index}>
                <strong>{classItem.subject}</strong> - {classItem.time}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MentorDashboard;
