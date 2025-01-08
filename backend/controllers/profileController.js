const { Profile, User } = require('../models');

const getProfilesWithConnections = async (req, res) => {
  try {
    const profiles = await Profile.findAll({
      include: [
      {
        model: Profile,
        as: 'connections',
        include: [
        {
          model: User,
          as: 'user',
          attributes: ['id', 'username', 'email']
        }
        ]
      }
      ]
    });
    if (!profiles.length) {
      return res.status(404).json({ message: "No profiles found." });
    }
    res.status(200).json(profiles);
  } catch (error) {
    console.error('Error fetching profiles with connections:', error); // Log error for debugging
    res.status(500).json({ error: "An error occurred while fetching profiles: " + error.message });
  }
};

const updateProfile = async (req, res) => {
  try {
    const { id } = req.params;
    const profileData = req.body;

    const profile = Profile.findByPk(id);
    if(!profile) return res.status(404).json({message: "Profile not found"});

    profile.update(profileData);

    return res.status(200).json({ message: 'Profile updated successfully.', profile });
  } catch (error) {
    console.error('Error updating profile:', error);
    res.status(500).json({
      message: 'An error occurred while updating the profile: ' + error.message
    });
  }
};

module.exports = {
  getProfilesWithConnections,
  updateProfile,
};
