const express = require('express');
const { getMentors, getMentorsByField } = require('../controllers/mentorController'); // Import controller functions

const router = express.Router();

// Route to get all mentors
router.get('/', getMentors);

// Route to get mentors by field
router.get('/:field', getMentorsByField);

module.exports = router;
