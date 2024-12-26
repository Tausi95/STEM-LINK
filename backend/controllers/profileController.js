const Profile = require('../models/profile');

// Helper function to validate the profile data
const validateProfileData = (data) => {
  const { name, email, role } = data;
  if (!name || !email || !role) {
    throw new Error('Name, email, and role are required.');
  }
  // Optionally, add more validation, like checking if email is in valid format
};

const getProfilesWithConnections = async (req, res) => {
  try {
    const profiles = await Profile.findAll({
      include: [
        {
          model: Profile,
          as: 'connections',
          attributes: ['id', 'name', 'email'], // Specify which fields you need from the connections
        }
      ]
    });
    if (!profiles || profiles.length === 0) {
      return res.status(404).json({ message: 'No profiles found.' });
    }
    res.status(200).json(profiles);
  } catch (error) {
    console.error('Error fetching profiles with connections:', error); // Log error for debugging
    res.status(500).json({ message: 'An error occurred while fetching profiles.', error: error.message });
  }
};

const updateProfile = async (req, res) => {
  try {
    const { role } = req.params;
    const profileData = req.body;

    // Validate the input data
    validateProfileData(profileData);

    const [updatedRows] = await Profile.update(profileData, {
      where: { role },
    });

    if (updatedRows === 0) {
      return res.status(404).json({ message: 'Profile not found or no changes detected' });
    }

    res.status(200).json({ message: 'Profile updated successfully' });
  } catch (error) {
    console.error('Error updating profile:', error); // Log error for debugging
    if (error.message) {
      return res.status(400).json({ message: error.message }); // Handle validation errors
    }
    res.status(500).json({ message: 'An error occurred while updating the profile.', error: error.message });
  }
};

module.exports = {
  getProfilesWithConnections,
  updateProfile,
};
