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
const { validateEvent } = require('../middleware/validateEvent');

const router = express.Router();

// Fetch all events
router.get('/', async (req, res) => {
  try {
    const type = req.query.type || '';
    const events = await getEvents(type);
    return events.length
      ? res.status(200).json({ status: 'success', message: 'Events fetched successfully.', data: events })
      : res.status(404).json({ status: 'failure', message: 'No events found.' });
  } catch (error) {
    res.status(500).json({ status: 'error', message: error.message });
  }
});

// Fetch a specific event
router.get('/:id', async (req, res) => {
  try {
    const event = await getEventById(req.params.id);
    return event
      ? res.status(200).json({ status: 'success', message: 'Event fetched successfully.', data: event })
      : res.status(404).json({ status: 'failure', message: 'Event not found.' });
  } catch (error) {
    res.status(500).json({ status: 'error', message: error.message });
  }
});

// Create a new event
router.post('/', validateEvent, async (req, res) => {
  try {
    const newEvent = await createEvent(req.body);
    res.status(201).json({ status: 'success', message: 'Event created successfully.', data: newEvent });
  } catch (error) {
    res.status(400).json({ status: 'failure', message: error.message });
  }
});

// Update an event
router.put('/:id', validateEvent, async (req, res) => {
  try {
    const updatedEvent = await updateEvent(req.params.id, req.body);
    res.status(200).json({ status: 'success', message: 'Event updated successfully.', data: updatedEvent });
  } catch (error) {
    res.status(400).json({ status: 'failure', message: error.message });
  }
});

// Delete an event
router.delete('/:id', async (req, res) => {
  try {
    await deleteEvent(req.params.id);
    res.status(204).send(); // No Content
  } catch (error) {
    res.status(500).json({ status: 'failure', message: error.message });
  }
});

// Fetch scheduled events
router.get('/scheduled', async (req, res) => {
  try {
    const scheduledEvents = await getScheduledEvents();
    res.status(200).json({ status: 'success', data: scheduledEvents });
  } catch (error) {
    res.status(500).json({ status: 'failure', message: error.message });
  }
});

// Mark attendance
router.post('/attend/:id', async (req, res) => {
  try {
    const result = await attendEvent(req.params.id);
    res.status(200).json({ status: 'success', message: 'Attendance recorded successfully.', data: result });
  } catch (error) {
    res.status(500).json({ status: 'failure', message: error.message });
  }
});

// Fetch external events
router.get('/external', async (req, res) => {
  try {
    const externalEvents = await fetchExternalEvents();
    res.status(200).json({ status: 'success', data: externalEvents });
  } catch (error) {
    res.status(500).json({ status: 'failure', message: error.message });
  }
});

module.exports = router;
