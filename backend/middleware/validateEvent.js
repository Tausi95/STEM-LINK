// backend/middleware/validateEvent.js
const { body } = require('express-validator');
const { handleValidationErrors } = require('./errorMiddleware');

const eventTypes = ['workshop', 'seminar', 'webinar', 'conference'];

const validateEventDate = (isRequired = true) => {
  const validator = body('date').isISO8601().withMessage('Event date must be valid')
    .custom((value) => {
      if (new Date(value) < new Date()) {
        throw new Error('Event date must be greater than or equal to today');
      }
      return true;
    });
  return isRequired ? validator.notEmpty().withMessage('Event date is required') : validator.optional();
};

const validateEventType = (isRequired = true) => {
  const validator = body('type').isIn(eventTypes).withMessage(`Event type must be one of ${eventTypes.join(', ')}`);
  return isRequired ? validator.notEmpty().withMessage('Event type is required') : validator.optional();
};

// Middleware to validate event data
const createEventValidator = [
  body('title').notEmpty().withMessage('Event title is required'),
  validateEventDate(),
  validateEventType(),
  handleValidationErrors,
];

const updateEventValidator = [
  validateEventDate(false),
  validateEventType(false),
  handleValidationErrors,
];

module.exports = { createEventValidator, updateEventValidator };
