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
router.post('/', createNetworkValidator, networkController.addConnection);

module.exports = router;

