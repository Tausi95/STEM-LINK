import API from './axiosConfig';

export const fetchSubjects = () => API.get('/subjects');
export const fetchSubjectDetail = (id) => API.get(`/subjects/${id}`);
export const createSubject = (subjectData) => API.post('/subjects', subjectData);

