const express = require('express');
const { body, validationResult } = require('express-validator');
const { registerUser, loginUser } = require('../controllers/userController');

const router = express.Router();

// Middleware to handle validation errors
const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      status: 'failure',
      errors: errors.array(),
    });
  }
  next();
};

// Route to register a new user
router.post(
  '/register',
  [
    // Validate input fields
    body('username').notEmpty().withMessage('Username is required'),
    body('email').isEmail().withMessage('Valid email is required'),
    body('password')
      .isLength({ min: 6 })
      .withMessage('Password must be at least 6 characters long'),
  ],
  handleValidationErrors,
  async (req, res) => {
    try {
      const user = await registerUser(req, res); // Assuming req.body contains { name, email, password, etc. }
      res.status(201).json({
        status: 'success',
        message: 'User registered successfully',
        data: user,
      });
    } catch (error) {
      console.error('Registration error:', error);
      res.status(400).json({
        status: 'failure',
        message: error.message || 'An error occurred while registering the user.',
      });
    }
  }
);

// Route to log in an existing user
router.post(
  '/login',
  [
    // Validate input fields
    body('email').isEmail().withMessage('Valid email is required'),
    body('password').notEmpty().withMessage('Password is required'),
  ],
  handleValidationErrors,
  async (req, res) => {
    try {
      const user = await loginUser(req.body); // Assuming req.body contains { email, password }
      res.status(200).json({
        status: 'success',
        message: 'Login successful',
        data: user,
      });
    } catch (error) {
      console.error('Login error:', error);
      res.status(401).json({
        status: 'failure',
        message: error.message || 'Invalid credentials or login failed.',
      });
    }
  }
);

module.exports = router;
