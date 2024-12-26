const jwt = require('jsonwebtoken'); // Import JWT for token verification

// Middleware to protect routes and validate JWT token
const protect = (req, res, next) => {
  let token;

  // Check if the token is provided in the Authorization header
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      // Get the token from the Authorization header (e.g., "Bearer token")
      token = req.headers.authorization.split(' ')[1];

      // Verify the token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Attach the user information to the request object (this is where user info will be available for use in the route handlers)
      req.user = { id: decoded.id, email: decoded.email };

      next(); // Move to the next middleware/route handler
    } catch (error) {
      res.status(401).json({ message: 'Not authorized, token failed' }); // Token verification failed
    }
  }

  // If token is not provided in the Authorization header
  if (!token) {
    res.status(401).json({ message: 'Not authorized, no token' });
  }
};

module.exports = { protect };
