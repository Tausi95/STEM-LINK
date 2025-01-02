// Fixed userController.js
const asyncHandler = require('express-async-handler');
const bcrypt = require('bcryptjs');
const User = require('../models/userModel');
const generateToken = require('../utils/generateToken');

// Register a new user
const registerUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;

  // Check if user already exists
  const userExists = await User.findOne({ where: { email } });

  if (userExists) {
    res.status(400);
    throw new Error('User already exists');
  }

  // Create user and hash password automatically using model hook
  const user = await User.create({ username, email, password });

  if (user) {
    res.status(201).json({
      id: user.id,
      username: user.username,
      email: user.email,
      token: generateToken(user.id),
    });
  } else {
    res.status(400);
    throw new Error('Failed to register user');
  }
});

// Authenticate user and return token
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ where: { email } });

  if (user && (await user.isValidPassword(password))) {
    res.status(200).json({
      id: user.id,
      username: user.username,
      email: user.email,
      token: generateToken(user.id),
    });
  } else {
    res.status(401);
    throw new Error('Invalid email or password');
  }
});

// Get user profile
const getUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findByPk(req.user.id);

  if (user) {
    res.status(200).json({
      id: user.id,
      username: user.username,
      email: user.email,
    });
  } else {
    res.status(404);
    throw new Error('User not found');
  }
});

// Update user profile
const updateUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findByPk(req.user.id);

  if (user) {
    user.username = req.body.username || user.username;
    user.email = req.body.email || user.email;

    if (req.body.password) {
      user.password = req.body.password;
    }

    const updatedUser = await user.save();

    res.status(200).json({
      id: updatedUser.id,
      username: updatedUser.username,
      email: updatedUser.email,
      token: generateToken(updatedUser.id),
    });
  } else {
    res.status(404);
    throw new Error('User not found');
  }
});

module.exports = { registerUser, authUser, getUserProfile, updateUserProfile };
