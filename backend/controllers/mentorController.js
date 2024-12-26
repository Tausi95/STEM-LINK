const Mentor = require('../models/mentor'); // Sequelize model

// Helper function to validate application data
const validateApplicationData = (data) => {
  const { userId, menteeInfo } = data;
  if (!userId || !menteeInfo) {
    throw new Error('User ID and mentee information are required.');
  }
  // Optional: Add more validations as needed (e.g., check if userId is a valid ID, or menteeInfo has a certain format)
};

const getMentors = async (req, res) => {
  try {
    const mentors = await Mentor.findAll();
    if (!mentors || mentors.length === 0) {
      return res.status(404).json({ message: 'No mentors found.' });
    }
    res.status(200).json(mentors);
  } catch (error) {
    console.error('Error fetching mentors:', error); // Log for debugging
    res.status(500).json({ message: 'An error occurred while fetching mentors.' });
  }
};

const applyForMentorship = async (req, res) => {
  try {
    const applicationData = req.body;

    // Validate application data before proceeding
    validateApplicationData(applicationData);

    // Handle application logic (e.g., save the application in the database)
    // Assuming you have an Application model to handle applications
    // const newApplication = await Application.create(applicationData);

    // For now, just returning a success message
    res.status(201).json({
      message: 'Application submitted successfully.',
      applicationData: applicationData, // Optional: Send back application data for confirmation
    });
  } catch (error) {
    console.error('Error applying for mentorship:', error); // Log for debugging
    if (error.message) {
      // Handle validation error
      return res.status(400).json({ message: error.message });
    }
    res.status(500).json({ message: 'An error occurred while submitting the application.' });
  }
};

module.exports = {
  getMentors,
  applyForMentorship,
};
