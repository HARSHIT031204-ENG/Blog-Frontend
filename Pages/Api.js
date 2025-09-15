import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000/api/v1/auth",
});



export const Googleauth = (code) => api.get(`/google?code=${code}`, {withCredentials: true,})