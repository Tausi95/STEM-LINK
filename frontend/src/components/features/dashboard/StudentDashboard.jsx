// src/components/StudentDashboard.js
import React from 'react';
import { Bar, Line } from 'react-chartjs-2';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import dashboardService from '../../../services/dashboardService';
import '../../../assets/css/StudentDashboard.css';

const StudentDashboard = ({ dashboardData }) => {
  const { user, progress, attendance, subjects, pendingTests, school, tutors, discussions, scores } = dashboardData;

  // Prepare data for the charts
  const monthlyScoreData = {
    labels: Object.keys(scores.monthly),
    datasets: [
      {
        label: 'Monthly Scores',
        data: Object.values(scores.monthly),
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const overallScoreData = {
    labels: ['Overall', 'Semester 1', 'Semester 2'],
    datasets: [
      {
        label: 'Scores',
        data: [scores.overall, scores.semester1, scores.semester2],
        backgroundColor: ['rgba(255, 99, 132, 0.6)', 'rgba(54, 162, 235, 0.6)', 'rgba(255, 206, 86, 0.6)'],
        borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)'],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold text-center mb-6">Welcome, {user.name}!</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-white shadow-md rounded-lg p-4">
          <h3 className="text-lg font-semibold mb-2">Progress</h3>
          <p className="text-gray-600">{progress}%</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-4">
          <h3 className="text-lg font-semibold mb-2">Attendance</h3>
          <p className="text-gray-600">{attendance}%</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-4">
          <h3 className="text-lg font-semibold mb-2">School</h3>
          <p className="text-gray-600">{school}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="bg-white shadow-md rounded-lg p-4">
          <h3 className="text-lg font-semibold mb-2">Monthly Scores</h3>
          <Bar data={monthlyScoreData} options={{ responsive: true, maintainAspectRatio: false }} />
        </div>
        <div className="bg-white shadow-md rounded-lg p-4">
          <h3 className="text-lg font-semibold mb-2">Overall Scores</h3>
          <Line data={overallScoreData} options={{ responsive: true, maintainAspectRatio: false }} />
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Subjects Enrolled</h3>
        <ul className="list-disc pl-5">
          {subjects.map((subject, index) => (
            <li key={index} className="text-gray-600">{subject}</li>
          ))}
        </ul>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Your Tutors</h3>
        <ul className="list-disc pl-5">
          {tutors.map((tutor, index) => (
            <li key={index} className="text-gray-600">
              {tutor.name} - {tutor.subject}
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Discussion Groups</h3>
        <ul className="list-disc pl-5">
          {discussions.map((group, index) => (
            <li key={index} className="text-gray-600">
              <strong>{group.topic}</strong>: {group.participants.join(', ')}
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Pending Tests</h3>
        <ul className="list-disc pl-5">
          {pendingTests.map((test, index) => (
            <li key={index} className="text-gray-600">
              <strong>{test.subject}</strong> - {test.date}
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-white shadow-md rounded-lg p-4">
        <h3 className="text-lg font-semibold mb-2">Your Planner</h3>
        <Calendar className="border-none" />
      </div>
    </div>
  );
};

export default StudentDashboard;
