const express = require('express');
const { body, validationResult } = require('express-validator');
const {
  registerUser,
  authUser,
  getUserProfile,
  updateUserProfile,
  uploadProfilePicture,
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
    const user = await registerUser(username, email, password); // Pass only required parameters
    res.status(201).json({
      status: 'success',
      message: 'User registered successfully.',
      data: user,
    });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({
      status: 'failure',
      message: 'Error registering user.',
      error: error.message,
    });
  }
});

// Route for user login
router.post('/login', validateLogin, handleValidationErrors, async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await authUser(email, password); // Pass only required parameters
    res.status(200).json({
      status: 'success',
      message: 'Login successful.',
      data: user,
    });
  } catch (error) {
    console.error('Error authenticating user:', error);
    res.status(401).json({
      status: 'failure',
      message: 'Invalid credentials.',
      error: error.message,
    });
  }
});

// Route for getting user profile
router.get('/profile', async (req, res) => {
  try {
    const userProfile = await getUserProfile(req.user.id); // Assuming req.user is set after authentication
    res.status(200).json({
      status: 'success',
      data: userProfile,
    });
  } catch (error) {
    console.error('Error fetching user profile:', error);
    res.status(404).json({
      status: 'failure',
      message: 'User profile not found.',
      error: error.message,
    });
  }
});

// Route for updating user profile
router.put('/profile', async (req, res) => {
  try {
    const updatedProfile = await updateUserProfile(req.user.id, req.body); // Assuming req.user is set after authentication
    res.status(200).json({
      status: 'success',
      message: 'Profile updated successfully.',
      data: updatedProfile,
    });
  } catch (error) {
    console.error('Error updating user profile:', error);
    res.status(400).json({
      status: 'failure',
      message: 'Error updating user profile.',
      error: error.message,
    });
  }
});

// Route for uploading profile picture
router.post('/profile/upload', async (req, res) => {
  try {
    const fileData = req.file; // Assuming multer or similar middleware is used for file handling
    const result = await uploadProfilePicture(req.user.id, fileData);
    res.status(200).json({
      status: 'success',
      message: 'Profile picture uploaded successfully.',
      data: result,
    });
  } catch (error) {
    console.error('Error uploading profile picture:', error);
    res.status(400).json({
      status: 'failure',
      message: 'Error uploading profile picture.',
      error: error.message,
    });
  }
});

module.exports = router;
