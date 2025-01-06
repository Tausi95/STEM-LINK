
const express = require('express');
const { createEventValidator, updateEventValidator} = require('../middleware/validateEvent');
const eventController = require('../controllers/eventController');

const router = express.Router();

router.get('/', eventController.getEvents);
router.get('/:id', eventController.getEventById);
router.post('/', createEventValidator, eventController.createEvent);
router.put('/:id', updateEventValidator, eventController.updateEvent);
router.delete('/:id', eventController.deleteEvent);
router.get('/scheduled', eventController.getScheduledEvents);
router.post('/attend/:id', eventController.attendEvent);
router.get('/external', eventController.fetchExternalEvents);

module.exports = router;
