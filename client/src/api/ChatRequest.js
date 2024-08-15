import axios from "axios"

// Specify the baseURL of server
const API = axios.create({
  baseURL: "http://localhost:5000"
});

const createChat = (data) => API.post('/chat/', data);

export const userChats = (id) => API.get(`/chat/${id}`);

export const findChat = (firstId, secondId) => API.get(`/chat/find/${firstId}/${secondId}`);