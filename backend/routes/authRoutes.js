const express = require('express');
const { registerUser, loginUser } = require('../controllers/authController');

const router = express.Router();

// Route to register a new user
router.post('/register', async (req, res) => {
  try {
    // Assuming req.body contains { name, email, password, etc. }
    const user = await registerUser(req.body);
    res.status(201).json({
      status: 'success',
      message: "User registered successfully",
      data: user
    });
  } catch (error) {
    console.error("Registration error:", error);
    res.status(400).json({
      status: 'failure',
      message: error.message || "An error occurred while registering the user."
    });
  }
});

// Route to log in an existing user
router.post('/login', async (req, res) => {
  try {
    // Assuming req.body contains { email, password }
    const user = await loginUser(req.body);
    res.status(200).json({
      status: 'success',
      message: "Login successful",
      data: user
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(401).json({
      status: 'failure',
      message: error.message || "Invalid credentials or login failed."
    });
  }
});

module.exports = router;
