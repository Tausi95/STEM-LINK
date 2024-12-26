const express = require('express');
const { getEvents, createEvent } = require('../controllers/eventController');

const router = express.Router();

// Route to get all events
router.get('/', async (req, res) => {
  try {
    const events = await getEvents();
    if (!events || events.length === 0) {
      return res.status(404).json({
        status: 'failure',
        message: "No events found."
      });
    }
    res.status(200).json({
      status: 'success',
      message: "Events fetched successfully.",
      data: events
    });
  } catch (error) {
    console.error("Error fetching events:", error);
    res.status(500).json({
      status: 'error',
      message: "An error occurred while fetching events. Please try again later.",
      error: error.message
    });
  }
});

// Route to create a new event
router.post('/', async (req, res) => {
  try {
    const newEvent = await createEvent(req.body); // Assuming createEvent handles the body validation
    res.status(201).json({
      status: 'success',
      message: "Event created successfully.",
      data: newEvent
    });
  } catch (error) {
    console.error("Error creating event:", error);
    res.status(400).json({
      status: 'failure',
      message: "An error occurred while creating the event.",
      error: error.message
    });
  }
});

module.exports = router;
