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
  body('date').isISO8601().withMessage('Event date must be valid').custom((value) => {
    if (new Date(value) < new Date()) {
      throw new Error('Event date must be greater than or equal to today');
    }
    return true;
  }),
  body('type').notEmpty().withMessage("Event type is required")
              .isIn(['workshop', 'seminar', 'webinar', 'conference']).withMessage("Event type must be one of 'workshop', 'seminar', 'webinar', 'conference'"),
  handleValidationErrors,
];

module.exports = { validateEvent, handleValidationErrors };
