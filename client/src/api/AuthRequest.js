import axios from "axios"

// Specify the baseURL of server
const API = axios.create({
  baseURL: "http://localhost:5000"
});

export const logIn = (formData) => {
  return API.post('/auth/login', formData)
}

export const signUp = (formData) => {
  return API.post('/auth/signup', formData)
}