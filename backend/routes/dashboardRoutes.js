// backend/routes/dashboardRoutes.js
const express = require('express');
const { getStudentDashboard, getMentorDashboard } = require('../controllers/dashboardController');
const { protect } = require('../middleware/authMiddleware'); // Middleware for auth

const router = express.Router();

router.get('/student', protect, getStudentDashboard);
router.get('/mentor', protect, getMentorDashboard);

module.exports = router;
