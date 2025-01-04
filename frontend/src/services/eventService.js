
import API from './axiosConfig';

const handleRequest = async (callback) => {
  try {
    return await callback();
  } catch (error) {
    console.error('API Error:', error.message);
    throw error;
  }
};

const EventService = {
  fetchEvents: (type = '') => handleRequest(() => API.get(`/events${type ? `?type=${type}` : ''}`)),
  getLiveWebinars: () => handleRequest(() => API.get('/events/webinar')),
  getScheduledEvents: () => handleRequest(() => API.get('/events/scheduled')),
  fetchEventById: (id) => handleRequest(() => API.get(`/events/${id}`)),
  createEvent: (eventData) => handleRequest(() => API.post('/events', eventData)),
  updateEvent: (id, updatedData) => handleRequest(() => API.put(`/events/${id}`, updatedData)),
  deleteEvent: (id) => handleRequest(() => API.delete(`/events/${id}`)),
  attendEvent: (id) => handleRequest(() => API.post(`/events/attend/${id}`)),
  getExternalEvents: () => handleRequest(() => API.get('/events/external')),
  getProjects: () => handleRequest(() => API.get('/events/projects')),
};

export default EventService;
