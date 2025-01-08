// backend/routes/networkRoutes.js

const express = require('express');
const networkController = require('../controllers/networkController');
const { createNetworkValidator } = require('../middleware/validateNetwork');
const router = express.Router();

// Route to get all connections
router.get('/', networkController.getConnections);

// Route to add a new connection
router.post('/', createNetworkValidator, networkController.addConnection);

module.exports = router;

