const express = require('express');
const { getAllMentors, getMentorsByField } = require('../controllers/mentorController'); // Import controller functions

const router = express.Router();

// Route to get all mentors
router.get('/', async (req, res) => {
  try {
    const mentors = await getAllMentors();  // Calling the controller function
    if (mentors.length === 0) {
      return res.status(404).json({ message: "No mentors found." });
    }
    res.status(200).json(mentors);
  } catch (error) {
    res.status(500).json({ error: "An error occurred while fetching mentors: " + error.message });
  }
});

// Route to get mentors by field
router.get('/:field', async (req, res) => {
  try {
    const mentors = await getMentorsByField(req.params.field);  // Calling the controller function
    if (mentors.length === 0) {
      return res.status(404).json({ message: `No mentors found in the field: ${req.params.field}.` });
    }
    res.status(200).json(mentors);
  } catch (error) {
    res.status(500).json({ error: "An error occurred while fetching mentors: " + error.message });
  }
});

module.exports = router;
