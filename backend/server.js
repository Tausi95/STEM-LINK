const express = require('express');
const dotenv = require('dotenv');
const { connectDB } = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const profileRoutes = require('./routes/profileRoutes');
const mentorRoutes = require('./routes/mentorRoutes');
const eventRoutes = require('./routes/eventRoutes');
const networkRoutes = require('./routes/networkRoutes');
const dashboardRoutes = require('./routes/dashboardRoutes');
const cors = require('cors');
const { notFound, errorHandler } = require('./middleware/errorMiddleware');

// Load environment variables
dotenv.config();

// Connect to the database
connectDB();

const app = express();

// Enable CORS
app.use(
  cors({
    origin: 'http://localhost:3000', // Adjust the origin as needed
    credentials: true,
  })
);

// Middleware to parse JSON bodies
app.use(express.json());

// Health check route
app.get('/api/health', (req, res) => {
  res.status(200).json({ message: 'API is running properly.' });
});

// Define RESTful routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes); // Combine all user-related routes here
app.use('/api/profile', profileRoutes);
app.use('/api/mentors', mentorRoutes); // Adjusted for clarity
app.use('/api/events', eventRoutes); // Removed `:id` from here
app.use('/api/network', networkRoutes);
app.use('/api/dashboard', dashboardRoutes);

// Error handling middleware
app.use(notFound);
app.use(errorHandler);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
