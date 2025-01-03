// Fixed userController.js
const asyncHandler = require('express-async-handler');
const { User } = require('../models/');
const generateToken = require('../utils/generateToken');
const { Op } = require('sequelize');

// Register a new user
const registerUser = asyncHandler(async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const role = 'role' in req.body ? req.body.role : undefined;
  
    // Check if user already exists
    const userExists = await User.findOne({
      where: {
      [Op.or]: [
        { email },
        { username }
      ]
      }
    });
    
    if (userExists) throw new Error('User already exists')

    // Create user and hash password automatically using model hook
    const user = await User.create({ username, email, password, role });
    if (!user) throw new Error('Failed to register user');
    const { password: p, ...userWithoutPassword } = user.toJSON();
    res.status(201).json({
      status: 'success',
      message: 'Login successful',
      data: {
        user: userWithoutPassword,
        token: generateToken(user.id),
      }
    });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(400).json({
      status: 'failure',
      message: error.message || 'An error occurred while registering the user.',
    });
  }
});

// Authenticate user and return authenticated user
const authUser = asyncHandler(async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.scope('withPassword').findOne({ where: { email } });
    if(!user || !(await user.isValidPassword(password))) {
      throw new Error('Invalid email or password');
    }
    const { password: p, ...userWithoutPassword } = user.toJSON();

    res.status(200).json({
      status: 'success',
      message: 'Login successful',
      data: {
        user: userWithoutPassword,
        token: generateToken(user.id),
      },
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(401).json({
      status: 'failure',
      message: error.message || 'Invalid credentials or login failed.',
    });
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
