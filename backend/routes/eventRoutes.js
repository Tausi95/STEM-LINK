const express = require('express');
const { 
  getEvents, 
  createEvent, 
  getEventById, 
  updateEvent, 
  deleteEvent, 
  getScheduledEvents, 
  attendEvent, 
  fetchExternalEvents 
} = require('../controllers/eventController');

const router = express.Router();

// Route to get all events (optionally filtered by type)
router.get('/', async (req, res) => {
  try {
    const type = req.query.type || ''; // Handle optional filtering by type
    const events = await getEvents(type);
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

// Route to get a specific event by ID
router.get('/:id', async (req, res) => {
  try {
    const event = await getEventById(req.params.id);
    if (!event) {
      return res.status(404).json({
        status: 'failure',
        message: "Event not found."
      });
    }
    res.status(200).json({
      status: 'success',
      message: "Event fetched successfully.",
      data: event
    });
  } catch (error) {
    console.error("Error fetching event by ID:", error);
    res.status(500).json({
      status: 'error',
      message: "An error occurred while fetching the event. Please try again later.",
      error: error.message
    });
  }
});

// Route to create a new event
router.post('/', async (req, res) => {
  try {
    const newEvent = await createEvent(req.body); // Assumes createEvent validates the request body
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

// Route to update an event by ID
router.put('/:id', async (req, res) => {
  try {
    const updatedEvent = await updateEvent(req.params.id, req.body);
    res.status(200).json({
      status: 'success',
      message: "Event updated successfully.",
      data: updatedEvent
    });
  } catch (error) {
    console.error("Error updating event:", error);
    res.status(400).json({
      status: 'failure',
      message: "An error occurred while updating the event.",
      error: error.message
    });
  }
});

// Route to delete an event by ID
router.delete('/:id', async (req, res) => {
  try {
    await deleteEvent(req.params.id);
    res.status(200).json({
      status: 'success',
      message: "Event deleted successfully."
    });
  } catch (error) {
    console.error("Error deleting event:", error);
    res.status(500).json({
      status: 'failure',
      message: "An error occurred while deleting the event.",
      error: error.message
    });
  }
});

// Route to get all scheduled events
router.get('/scheduled', async (req, res) => {
  try {
    const scheduledEvents = await getScheduledEvents();
    res.status(200).json({
      status: 'success',
      message: "Scheduled events fetched successfully.",
      data: scheduledEvents
    });
  } catch (error) {
    console.error("Error fetching scheduled events:", error);
    res.status(500).json({
      status: 'failure',
      message: "An error occurred while fetching scheduled events.",
      error: error.message
    });
  }
});

// Route to mark attendance for an event
router.post('/attend/:id', async (req, res) => {
  try {
    const result = await attendEvent(req.params.id);
    res.status(200).json({
      status: 'success',
      message: "Event attendance recorded successfully.",
      data: result
    });
  } catch (error) {
    console.error("Error attending event:", error);
    res.status(500).json({
      status: 'failure',
      message: "An error occurred while attending the event.",
      error: error.message
    });
  }
});

// Route to fetch external events
router.get('/external', async (req, res) => {
  try {
    const externalEvents = await fetchExternalEvents();
    res.status(200).json({
      status: 'success',
      message: "External events fetched successfully.",
      data: externalEvents
    });
  } catch (error) {
    console.error("Error fetching external events:", error);
    res.status(500).json({
      status: 'failure',
      message: "An error occurred while fetching external events.",
      error: error.message
    });
  }
});

module.exports = router;
