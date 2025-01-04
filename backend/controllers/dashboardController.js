// backend/controllers/dashboardController.js
const getStudentDashboard = async (req, res) => {
  // Fetch student-specific data from the database
  const studentData = {
    progress: 80,
    attendance: 95,
    subjects: ['Math', 'Science'],
    tutors: ['Dr. Smith', 'Mr. John'],
    school: 'Springfield High',
    pendingTests: ['Midterm Math', 'Physics Quiz'],
    groupDiscussions: ['Math Club', 'Science Society'],
    overallScore: 85,
    monthlyScore: 88,
    semesterScore: 82,
  };

  res.json(studentData);
};

const getMentorDashboard = async (req, res) => {
  // Fetch mentor-specific data from the database
  const mentorData = {
    subjects: ['Physics', 'Chemistry'],
    students: [{ name: 'Alice', attendance: 90 }, { name: 'Bob', attendance: 75 }],
    network: { mentoring: ['Alice', 'Bob'], mentoredBy: 'Dr. Smith' },
    qualifications: ['PhD in Physics', 'MSc in Chemistry'],
    availability: ['Monday 10am-12pm', 'Wednesday 2pm-4pm'],
    classes: [{ subject: 'Physics', time: 'Monday 10am' }],
  };

  res.json(mentorData);
};

module.exports = { getStudentDashboard, getMentorDashboard };
