import API from './axiosConfig';

const handleRequest = async (callback) => {
  try {
    return await callback();
  } catch (error) {
    console.error('API Error:', error.message);
    throw error;
  }
};

export const fetchEvents = (type = '') => 
  handleRequest(() => API.get(`/events${type ? `?type=${type}` : ''}`));

export const getLiveWebinars = () => fetchEvents('webinar');

export const getScheduledEvents = () => 
  handleRequest(() => API.get('/events/scheduled'));

export const fetchEventById = (id) => 
  handleRequest(() => API.get(`/events/${id}`));

export const createEvent = (eventData) => 
  handleRequest(() => API.post('/events', eventData));

export const updateEvent = (id, updatedData) => 
  handleRequest(() => API.put(`/events/${id}`, updatedData));

export const deleteEvent = (id) => 
  handleRequest(() => API.delete(`/events/${id}`));

export const attendEvent = (id) => 
  handleRequest(() => API.post(`/events/attend/${id}`));

export const getExternalEvents = () => 
  handleRequest(() => API.get('/events/external'));

export const getProjects = () => 
  handleRequest(() => API.get('/events/projects'));

export default {
  fetchEvents,
  getLiveWebinars,
  getScheduledEvents,
  fetchEventById,
  createEvent,
  updateEvent,
  deleteEvent,
  attendEvent,
  getExternalEvents,
  getProjects,
};

