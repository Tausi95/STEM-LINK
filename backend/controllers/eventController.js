const { Event } = require('../models');
const { Op } = require('sequelize'); // In case you want to handle specific queries, like date ranges

const getEvents = async (req, res) => {
  try {
    const events = await Event.findAll();
    if (!events || events.length === 0) {
      return res.status(404).json({ message: 'No events found.' });
    }
    res.status(200).json(events);
  } catch (error) {
    console.error('Error fetching events:', error);
    res.status(500).json({ message: 'An error occurred while fetching events.' });
  }
};

const getEventById = async (req, res) => {
  try {
    const { id } = req.params;
    const event = await Event.findByPk(id);
    if (!event) {
      return res.status(404).json({ message: 'Event not found.' });
    }
    res.status(200).json(event);
  } catch (error) {
    console.error('Error fetching event by ID:', error);
    res.status(500).json({ message: 'An error occurred while fetching the event.' });
  }
};

const createEvent = async (req, res) => {
  try {
    const eventData = req.body;

    const newEvent = await Event.create(eventData);

    res.status(201).json({
      message: 'Event created successfully.',
      event: newEvent,
    });
  } catch (error) {
    console.error('Error creating event:', error);
    if (error.message) {
      return res.status(400).json({ message: error.message });
    }
    res.status(500).json({ message: 'An error occurred while creating the event.' });
  }
};

const updateEvent = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedData = req.body;

    const event = await Event.findByPk(id);
    if (!event) {
      return res.status(404).json({ message: 'Event not found.' });
    }

    // Update the event
    await event.update(updatedData);
    res.status(200).json({ message: 'Event updated successfully.', event });
  } catch (error) {
    console.error('Error updating event:', error);
    if (error.message) {
      return res.status(400).json({ message: error.message });
    }
    res.status(500).json({ message: 'An error occurred while updating the event.' });
  }
};

const deleteEvent = async (req, res) => {
  try {
    const { id } = req.params;
    const event = await Event.findByPk(id);
    if (!event) {
      return res.status(404).json({ message: 'Event not found.' });
    }

    await event.destroy();
    res.status(200).json({ message: 'Event deleted successfully.' });
  } catch (error) {
    console.error('Error deleting event:', error);
    res.status(500).json({ message: 'An error occurred while deleting the event.' });
  }
};

// Get scheduled events (events happening in the future)
const getScheduledEvents = async (req, res) => {
  try {
    const events = await Event.findAll({
      where: {
        date: {
          [Op.gt]: new Date() // Only future events
        }
      }
    });
    if (!events || events.length === 0) {
      return res.status(404).json({ message: 'No scheduled events found.' });
    }
    res.status(200).json(events);
  } catch (error) {
    console.error('Error fetching scheduled events:', error);
    res.status(500).json({ message: 'An error occurred while fetching scheduled events.' });
  }
};

// Attend an event (example: marking attendance)
const attendEvent = async (req, res) => {
  try {
    const { id } = req.params;
    const event = await Event.findByPk(id);
    if (!event) {
      return res.status(404).json({ message: 'Event not found.' });
    }
    // Logic to mark attendance (e.g., creating an attendance record)
    // Assuming you have an 'attendees' field in the event model to store attendees.
    event.attendees = event.attendees || [];
    event.attendees.push(req.body.userId); // Assuming user ID is sent in request body

    await event.save();
    res.status(200).json({ message: `You have successfully registered for the event: ${event.name}` });
  } catch (error) {
    console.error('Error attending event:', error);
    res.status(500).json({ message: 'An error occurred while attending the event.' });
  }
};

// Fetch external events (example: fetching from an external API or service)
const fetchExternalEvents = async (req, res) => {
  try {
    // Example of fetching external events (adjust according to your source)
    const externalEvents = [
      { name: 'External Event 1', date: '2025-01-10', location: 'External Location' },
      { name: 'External Event 2', date: '2025-01-15', location: 'External Location 2' }
    ];
    res.status(200).json(externalEvents);
  } catch (error) {
    console.error('Error fetching external events:', error);
    res.status(500).json({ message: 'An error occurred while fetching external events.' });
  }
};

module.exports = {
  getEvents,
  getEventById,
  createEvent,
  updateEvent,
  deleteEvent,
  getScheduledEvents,
  attendEvent,
  fetchExternalEvents
};
