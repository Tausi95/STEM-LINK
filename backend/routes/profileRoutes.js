const express = require('express');
const { updateProfile, getProfilesWithConnections } = require('../controllers/profileController');
const { updateProfileValidator } = require('../middleware/validateUser');
const router = express.Router();

// Route to get all profiles with their connections
router.get('/connections', getProfilesWithConnections);

// Route to update profile
router.put('/:id', updateProfileValidator, updateProfile);

module.exports = router;
