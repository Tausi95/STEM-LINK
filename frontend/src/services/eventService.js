import API from './axiosConfig';

// Fetch all events or filter by type
export const fetchEvents = async (type = '') => {
  try {
    const response = await API.get(`/events${type ? `?type=${type}` : ''}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching ${type || 'all'} events:`, error);
    throw error;
  }
};

// Fetch live webinars specifically
export const getLiveWebinars = async () => {
  try {
    // Assuming 'webinar' is the type used for live webinars in your API
    const response = await fetchEvents('webinar');
    return response;
  } catch (error) {
    console.error('Error fetching live webinars:', error);
    throw error;
  }
};


export const getScheduledEvents = async () => {
  try {
    const response = await API.get('/events/scheduled');  //  endpoint,
    return response.data;
  } catch (error) {
    console.error('Error fetching scheduled events:', error);
    throw error;
  }
};

// Fetch a single event by its ID
export const fetchEventById = async (id) => {
  try {
    const response = await API.get(`/events/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching event with ID ${id}:`, error);
    throw error;
  }
};

// Create a new event
export const createEvent = async (eventData) => {
  try {
    const response = await API.post('/events', eventData);
    return response.data;
  } catch (error) {
    console.error('Error creating event:', error);
    throw error;
  }
};

// Update an existing event
export const updateEvent = async (id, updatedData) => {
  try {
    const response = await API.put(`/events/${id}`, updatedData);
    return response.data;
  } catch (error) {
    console.error(`Error updating event with ID ${id}:`, error);
    throw error;
  }
};

// Delete an event
export const deleteEvent = async (id) => {
  try {
    const response = await API.delete(`/events/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error deleting event with ID ${id}:`, error);
    throw error;
  }
};

// Additional helper for attending an event
export const attendEvent = async (id) => {
  try {
    const response = await API.post(`/events/attend/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error attending event with ID ${id}:`, error);
    throw error;
  }
};

// Additional helper for subscribing to webinars
export const subscribeToWebinars = async () => {
  try {
    const response = await API.post('/webinars/subscribe');
    return response.data;
  } catch (error) {
    console.error('Error subscribing to webinars:', error);
    throw error;
  }
};

// Additional helper for fetching external events
export const fetchExternalEvents = async () => {
  try {
    const response = await API.get('/events/external');
    return response.data;
  } catch (error) {
    console.error('Error fetching external events:', error);
    throw error;
  }
};

//getting external events
export const getExternalEvents = async () => {
  try {
    const response = await API.get('/events/external');
    return response.data;
  } catch (error) {
    console.error('Error fetching external events:', error);
    throw error;
  }
};

export const getProjects = async () => {
  try {
    const response = await API.get('events/projects');
    return response.data
  } catch (error) {
    console.error('error getting project:', error);
    throw error;
  }
};
export default {
  fetchEvents,
  fetchEventById,
  createEvent,
  updateEvent,
  deleteEvent,
  attendEvent,
  subscribeToWebinars,
  fetchExternalEvents,
  getLiveWebinars,
  getScheduledEvents,
  getExternalEvents,
  getProjects,
};
