// src/services/dashboardService.js
import axiosInstance from './axiosConfig'; // Import the centralized Axios instance

// Fetch student dashboard data
const fetchStudentDashboard = async () => {
  const response = await axiosInstance.get('/api/dashboard/student');
  return response.data;
};

// Fetch mentor dashboard data
const fetchMentorDashboard = async () => {
  const response = await axiosInstance.get('/api/dashboard/mentor');
  return response.data;
};

export default {
  fetchStudentDashboard,
  fetchMentorDashboard,
};
