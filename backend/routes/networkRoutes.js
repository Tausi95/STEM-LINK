// backend/routes/networkRoutes.js

const express = require('express');
const { body, validationResult } = require('express-validator'); // Express-validator for validation
const networkController = require('../controllers/networkController');
const router = express.Router();

// Validation for adding a connection
const validateConnection = [
  body('profileId').isInt().withMessage('Profile ID must be an integer'),
  body('connectionId').isInt().withMessage('Connection ID must be an integer'),
];

// Route to get all connections
router.get('/', networkController.getConnections);

// Route to add a new connection
router.post('/', validateConnection, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const { profileId, connectionId } = req.body;

    // Check if the connection already exists (to avoid duplicates)
    const existingConnection = await addConnection(profileId, connectionId);
    if (existingConnection) {
      return res.status(409).json({ error: "Connection already exists." });
    }

    // Assuming addConnection creates the new connection and returns it
    const newConnection = await addConnection(profileId, connectionId);
    res.status(201).json({ message: "Connection added successfully.", connection: newConnection });
  } catch (error) {
    res.status(400).json({ error: "An error occurred while adding the connection: " + error.message });
  }
});

module.exports = router;

