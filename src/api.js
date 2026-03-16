import axios from 'axios';

// const API_BASE = import.meta.env.VITE_API_URL || 'https://nizan-makeovers-attendence.onrender.com';
const API_BASE = import.meta.env.VITE_API_URL || 'https://35.154.161.122.nip.io';

const api = axios.create({
  baseURL: API_BASE,
});

export default api;
