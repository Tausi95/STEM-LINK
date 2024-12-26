const asyncHandler = require('express-async-handler');
const bcrypt = require('bcryptjs');
const User = require('../models/userModel');
const generateToken = require('../utils/generateToken');

// Register new user
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  // Check if user already exists
  const userExists = await User.findOne({ where: { email } });
  if (userExists) {
    res.status(400);
    throw new Error('User already exists');
  }

  // Hash password before saving
  const salt = await bcrypt.genSalt(10); // Generate salt
  const hashedPassword = await bcrypt.hash(password, salt); // Hash the password

  // Create new user
  const user = await User.create({
    name,
    email,
    password: hashedPassword, // Save hashed password
  });

  if (user) {
    res.status(201).json({
      id: user.id, // Use 'id' if your model uses 'id'
      name: user.name,
      email: user.email,
      token: generateToken(user.id), // Pass 'user.id' for token generation
    });
  } else {
    res.status(400);
    throw new Error('Invalid user data');
  }
});

// Authenticate user & get token
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ where: { email } });

  if (user && (await bcrypt.compare(password, user.password))) {
    res.json({
      id: user.id, // Return 'id' as per convention
      name: user.name,
      email: user.email,
      token: generateToken(user.id),
    });
  } else {
    res.status(401);
    throw new Error('Invalid email or password');
  }
});

module.exports = { registerUser, authUser };
