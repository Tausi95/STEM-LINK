// backend/middleware/validateEvent.js
const { body, validationResult } = require('express-validator');

// Middleware to validate event data
const validateEvent = [
  body('title').notEmpty().withMessage('Event title is required'),
  body('date').isISO8601().withMessage('Event date must be valid'),
  body('location').notEmpty().withMessage('Event location is required'),
];

const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

module.exports = { validateEvent, handleValidationErrors };
