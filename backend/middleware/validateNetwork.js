// backend/middleware/validateEvent.js
const { handleValidationErrors } = require('./errorMiddleware');
const { validateUser } = require('./validateUser');

const createNetworkValidator = [
  validateUser('profileId', true, true),
  validateUser('connectionId', true, true),
  handleValidationErrors,
];

const updateNetworkValidator = [
  validateUser('profileId', false, true),
  validateUser('connectionId', false, true),
  handleValidationErrors,
];

module.exports = { 
  createNetworkValidator,
  updateNetworkValidator,
};