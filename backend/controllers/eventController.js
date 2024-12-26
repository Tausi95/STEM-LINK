const Event = require('../models/event');
const { Op } = require('sequelize'); // In case you want to handle specific queries, like date ranges

// Helper function to validate event data
const validateEventData = (eventData) => {
  const { name, date, location } = eventData;
  if (!name || !date || !location) {
    throw new Error('Event name, date, and location are required.');
  }
  // Optional: Add more validations, e.g., check if date is a valid date or if it is in the future
  if (new Date(date) <= new Date()) {
    throw new Error('Event date must be in the future.');
  }
  // Add more validation as needed
};

const getEvents = async (req, res) => {
  try {
    const events = await Event.findAll();
    if (!events || events.length === 0) {
      return res.status(404).json({ message: 'No events found.' });
    }
    res.status(200).json(events);
  } catch (error) {
    console.error('Error fetching events:', error); // Log for debugging purposes
    res.status(500).json({ message: 'An error occurred while fetching events.' });
  }
};

const createEvent = async (req, res) => {
  try {
    const eventData = req.body;

    // Validate event data before proceeding
    validateEventData(eventData);

    // Create a new event
    const newEvent = await Event.create(eventData);

    // Respond with detailed success message and event data
    res.status(201).json({
      message: 'Event created successfully.',
      event: newEvent,
    });
  } catch (error) {
    console.error('Error creating event:', error); // Log for debugging purposes
    if (error.message) {
      // Handle validation error
      return res.status(400).json({ message: error.message });
    }
    res.status(500).json({ message: 'An error occurred while creating the event.' });
  }
};

module.exports = {
  getEvents,
  createEvent,
};

