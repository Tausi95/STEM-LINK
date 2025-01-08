const express = require('express');
const { createProfile, updateProfile, getProfilesWithConnections } = require('../controllers/profileController');
const { updateProfileValidator, createProfileValidator } = require('../middleware/validateUser');
const router = express.Router();

// Route to get all profiles with their connections
router.get('/connections', getProfilesWithConnections);

// Route to update profile
router.put('/:id', updateProfileValidator, updateProfile);

// Route to create new profile
router.post('/', createProfileValidator, createProfile)

module.exports = router;
