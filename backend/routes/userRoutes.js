// backend/routes/userRoutes.js

const express = require('express');
const { body, validationResult } = require('express-validator'); // Import express-validator
const { registerUser, authUser } = require('../controllers/userController');

const router = express.Router();

// Route for user registration
router.post('/register', [
  body('email').isEmail().withMessage('Please provide a valid email'),
  body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),
], async (req, res) => {
  const errors = validationResult(req); // Check for validation errors
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const user = await registerUser(req.body);
    res.status(201).json({ message: "User registered successfully.", user });
  } catch (error) {
    res.status(400).json({ error: "Registration failed", details: error.message });
  }
});

// Route for user login
router.post('/login', [
  body('email').isEmail().withMessage('Please provide a valid email'),
  body('password').exists().withMessage('Password is required'),
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const token = await authUser(req.body);
    res.status(200).json({ message: "Login successful.", token });
  } catch (error) {
    res.status(401).json({ error: "Login failed", details: error.message });
  }
});

module.exports = router;
