const express = require('express');
const { body, validationResult } = require('express-validator'); // Express-validator for validation
const { updateProfile, getProfilesWithConnections } = require('../controllers/profileController');
const router = express.Router();

// Validation for profile update
const validateProfileUpdate = [
  body('name').isString().withMessage('Name must be a string'),
  body('bio').optional().isString().withMessage('Bio must be a string'),
  body('fieldOfInterest').isString().withMessage('Field of interest must be a string'),
];

// Route to get all profiles with their connections
router.get('/connections', getProfilesWithConnections);

// Route to update profile based on role
router.put('/:role', validateProfileUpdate, async (req, res) => {
  const { role } = req.params;

  // Check if role is valid
  const validRoles = ['student', 'mentor', 'event_creator', 'investor',]; // Add more roles if necessary
  if (!validRoles.includes(role)) {
    return res.status(400).json({ error: "Invalid role specified." });
  }

  // Validate the request body
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    // Call the controller function correctly
    const updatedProfile = await updateProfile(req, res);

    if (!updatedProfile) {
      return res.status(404).json({ message: "Profile not found for the specified role." });
    }

    res.status(200).json({ message: "Profile updated successfully.", profile: updatedProfile });
  } catch (error) {
    res.status(400).json({ error: "An error occurred while updating the profile: " + error.message });
  }
});

module.exports = router;
