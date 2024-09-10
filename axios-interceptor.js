import axios from 'axios';

// Create an Axios instance
const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});

// Add a request interceptor
api.interceptors.request.use(
  (config) => {
    // Modify the request config before sending it
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`; // Attach token to headers
    }
    console.log('Request:', config);
    return config;
  },
  (error) => {
    // Handle request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
api.interceptors.response.use(
  (response) => {
    // Handle the response data before passing it to the calling code
    console.log('Response:', response);
    return response;
  },
  (error) => {
    // Handle errors globally (e.g., log out the user if 401 Unauthorized)
    if (error.response && error.response.status === 401) {
      console.error('Unauthorized, logging out...');
      // Logic to log out the user or redirect to login
    }
    return Promise.reject(error);
  }
);

// Using the axios instance to make requests
const fetchPosts = async () => {
  try {
    const response = await api.get('/posts');
    console.log('Fetched posts:', response.data);
  } catch (error) {
    console.error('Error fetching posts:', error);
  }
};

fetchPosts();
