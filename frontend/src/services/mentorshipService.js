import API from './axiosConfig';

export const getMentorshipPrograms = () => API.get('/mentorship/programs');
export const applyForMentorship = (programId) => API.post(`/mentorship/apply/${programId}`);
export const getMentorshipApplications = () => API.get('/mentorship/applications');

