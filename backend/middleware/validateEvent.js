// backend/middleware/validateEvent.js
const { body, validationResult } = require('express-validator');

const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  next();
};

// Middleware to validate event data
const validateEvent = [
  body('title').notEmpty().withMessage('Event title is required'),
  body('date').isISO8601().withMessage('Event date must be valid'),
  body('location').notEmpty().withMessage('Event location is required'),
  body("type").notEmpty().withMessage("Event type is required. Acceptable values are 'workshop', 'seminar', 'webinar', 'conference'"),
  handleValidationErrors,
];

module.exports = { validateEvent, handleValidationErrors };
