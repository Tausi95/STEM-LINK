const { validationResult } = require('express-validator');

// Middleware to handle 404 errors
const notFound = (req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(404);
  next(error); // Pass the error to the next middleware
};

// Middleware to handle general errors
const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode; // Set status code
  res.status(statusCode);

  // Log the error stack in development
  if (process.env.NODE_ENV !== 'production') {
    console.error(err.stack); // Log the stack trace for debugging
  }

  res.json({
    message: err.message, // Send error message
    stack: process.env.NODE_ENV === 'production' ? null : err.stack, // to stack trace if not in production
  });
};

// Middleware to handle validation errors
const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  next();
};

module.exports = { 
  notFound, 
  errorHandler,
  handleValidationErrors
}; // Export error handling middleware
