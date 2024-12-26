const jwt = require('jsonwebtoken');

const generateToken = (id) => {
  if (!id) {
    throw new Error('User ID is required to generate token');
  }

  try {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
      expiresIn: '30d',
    });
  } catch (error) {
    throw new Error('Error generating token: ' + error.message);
  }
};

module.exports = generateToken;
