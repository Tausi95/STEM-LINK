const express = require('express');
const dotenv = require('dotenv');
const { connectDB } = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const profileRoutes = require('./routes/profileRoutes');
const mentorRoutes = require('./routes/mentorRoutes');
const eventRoutes = require('./routes/eventRoutes');
const networkRoutes = require('./routes/networkRoutes');
const authRoutes = require('./routes/authRoutes');
const { notFound, errorHandler } = require('./middleware/errorMiddleware');

dotenv.config(); // Load environment variables

connectDB(); // Connect to the database

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Health check route to test API status
app.get('/api/health', (req, res) => {
  res.status(200).json({ message: "API is running properly." });
});

// Define routes for user, profile, mentorship, events, network, and auth
app.use('/api/users', userRoutes);
app.use('/api/profile', profileRoutes);
app.use('/api/mentorship', mentorRoutes);
app.use('/api/events', eventRoutes);
app.use('/api/network', networkRoutes);
app.use('/api/auth', authRoutes);

// Error handling middleware
app.use(notFound); // 404 error handling
app.use(errorHandler); // General error handler

// Start the server
const PORT = process.env.PORT || 5000; // Set the server port
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`); // Log server status
});
