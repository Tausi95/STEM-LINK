import API from './axiosConfig';

export const getConnections = () => API.get('/network/connections');
export const sendFriendRequest = (userId) => API.post(`/network/request/${userId}`);
export const acceptFriendRequest = (requestId) => API.post(`/network/accept/${requestId}`);

