const express = require('express');
const { body } = require('express-validator');
const { registerUser, authUser } = require('../controllers/userController');
const { handleValidationErrors } = require('../middleware/errorMiddleware');

const router = express.Router();

// Validation rules for logging in a user
const loginRules = [
  body('email').isEmail().withMessage('Valid email is required'),
  body('password').notEmpty().withMessage('Password is required'),
  handleValidationErrors,
];

// Validation rules for registering a new user
const registerRules = [
  body('username').notEmpty().withMessage('Username is required'),
  body('email').isEmail().withMessage('Valid email is required'),
  body('password')
    .isLength({ min: 6 })
    .withMessage('Password must be at least 6 characters long'),
  handleValidationErrors,
];

// Route to register a new user
router.post('/register', registerRules, registerUser);

// Route to log in an existing user
router.post('/login', loginRules, authUser);

module.exports = router;
