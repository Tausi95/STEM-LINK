import API from './axiosConfig';

const ENDPOINTS = {
  LOGIN: '/auth/login',
  REGISTER: '/auth/register',
  PROFILE: '/users/profile',
  UPLOAD: '/users/profile/upload',
};

const userService = {
  login: async (user) => {
    try {
      const response = await API.post(ENDPOINTS.LOGIN, user);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Login failed.');
    }
  },

  register: async (newUser) => {
    try {
      const response = await API.post(ENDPOINTS.REGISTER, newUser);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Sign-up failed.');
    }
  },

  getUserProfile: async () => {
    try {
      const response = await API.get(ENDPOINTS.PROFILE);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to fetch profile.');
    }
  },

  updateUserProfile: async (profileData) => {
    try {
      const response = await API.put(ENDPOINTS.PROFILE, profileData);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to update profile.');
    }
  },

  uploadProfilePicture: async (fileData) => {
    try {
      const response = await API.post(ENDPOINTS.UPLOAD, fileData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to upload profile picture.');
    }
  },
};

export default userService;
