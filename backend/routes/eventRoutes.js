
const express = require('express');
const eventController = require('../controllers/eventController');
const { 
  createEventValidator, 
  updateEventValidator,
  attendEventValidator
} = require('../middleware/validateEvent');

const router = express.Router();

router.get('/', eventController.getEvents);
router.get('/:id', eventController.getEventById);
router.post('/', createEventValidator, eventController.createEvent);
router.put('/:id', updateEventValidator, eventController.updateEvent);
router.delete('/:id', eventController.deleteEvent);
router.get('/scheduled', eventController.getScheduledEvents);
router.post('/attend/:id', attendEventValidator, eventController.attendEvent);
router.get('/external', eventController.fetchExternalEvents);

module.exports = router;
