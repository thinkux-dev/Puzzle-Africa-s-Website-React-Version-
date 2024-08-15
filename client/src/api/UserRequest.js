import axios from "axios"

// Specify the baseURL of server
const API = axios.create({
  baseURL: "http://localhost:5000"
});

API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
  }

  return req;
});

export const getUser  = (userId) => {
  return API.get(`/user/${userId}`)
}

export const updateUser  = (id, formData) => {
  return API.put(`/user/${id}`, formData)
}

export const getAllUser = () => {
  return API.get('/user/')
}