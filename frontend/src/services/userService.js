// userService.js
import API from './axiosConfig';

const userService = {
  login: async (email, password) => {
    try {
      const response = await API.post('/login', { email, password });
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Login failed.');
    }
  },

  signUp: async (email, password) => {
    try {
      const response = await API.post('/register', { email, password });
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Sign-up failed.');
    }
  },

  getUserProfile: async () => {
    try {
      const response = await API.get('/users/profile');
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to fetch profile.');
    }
  },

  updateUserProfile: async (profileData) => {
    try {
      const response = await API.put('/users/profile', profileData);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to update profile.');
    }
  },

  uploadProfilePicture: async (fileData) => {
    try {
      const response = await API.post('/users/profile/upload', fileData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to upload profile picture.');
    }
  },
};

export default userService;

