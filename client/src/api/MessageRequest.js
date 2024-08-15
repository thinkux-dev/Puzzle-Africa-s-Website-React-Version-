import axios from "axios"

// Specify the baseURL of server
const API = axios.create({
  baseURL: "http://localhost:5000"
});

export const getAllMessages = () => {
  return API.get("/message/"); // Assuming this endpoint returns all messages
};

export const sendMessage = (data) => {
  return API.post("/message/send", data);
};