const express = require('express');
const { body, validationResult } = require('express-validator');
const { 
  registerUser, 
  authUser, 
  getUserProfile, 
  updateUserProfile 
} = require('../controllers/userController');

const router = express.Router();

// Middleware for validating registration input
const validateRegistration = [
  body('username').notEmpty().withMessage('Username is required'),
  body('email').isEmail().withMessage('Please provide a valid email'),
  body('password')
    .isLength({ min: 6 })
    .withMessage('Password must be at least 6 characters'),
];

// Middleware for validating login input
const validateLogin = [
  body('email').isEmail().withMessage('Please provide a valid email'),
  body('password').notEmpty().withMessage('Password is required'),
];

// Middleware for handling validation errors
const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

// Route for user registration
router.post('/register', validateRegistration, handleValidationErrors, async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const user = await registerUser(req, res);
    res.status(201).json(user);
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({
      status: 'failure',
      message: 'Error registering user',
      error: error.message,
    });
  }
});

// Route for user login
router.post('/login', validateLogin, handleValidationErrors, async (req, res) => {
  try {
    const user = await authUser(req, res);
    res.status(200).json(user);
  } catch (error) {
    console.error('Error authenticating user:', error);
    res.status(401).json({
      status: 'failure',
      message: 'Invalid credentials',
      error: error.message,
    });
  }
});

// Route for getting user profile
router.get('/profile', async (req, res) => {
  try {
    const userProfile = await getUserProfile(req, res);
    res.status(200).json(userProfile);
  } catch (error) {
    console.error('Error fetching user profile:', error);
    res.status(404).json({
      status: 'failure',
      message: 'User profile not found',
      error: error.message,
    });
  }
});

// Route for updating user profile
router.put('/profile', async (req, res) => {
  try {
    const updatedProfile = await updateUserProfile(req, res);
    res.status(200).json(updatedProfile);
  } catch (error) {
    console.error('Error updating user profile:', error);
    res.status(400).json({
      status: 'failure',
      message: 'Error updating user profile',
      error: error.message,
    });
  }
});

module.exports = router;
