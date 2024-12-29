import API from './axiosConfig';

export const fetchBlogs = () => API.get('/blogs');
export const fetchBlogById = (id) => API.get(`/blogs/${id}`);
export const createBlog = (blogData) => API.post('/blogs', blogData);
export const updateBlog = (id, updatedData) => API.put(`/blogs/${id}`, updatedData);
export const deleteBlog = (id) => API.delete(`/blogs/${id}`);

