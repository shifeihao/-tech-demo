import axios from "axios";
const API_URL = import.meta.env.VITE_API_BASE_URL;

// register request
export async function register(username, password) {
  const response = await axios.post(`${API_URL}/auth/register`, {
    username,
    password,
  });
  return response.data;
}

// login request
export async function login(username, password) {
  const response = await axios.post(`${API_URL}/auth/login`, {
    username,
    password,
  });
  return response.data; //
}

// get current user info
export async function getUserInfo() {
  const token = localStorage.getItem("token");
  const response = await axios.get(`${API_URL}/auth`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
}

// update user info
export async function updateUser(data) {
  const token = localStorage.getItem("token");
  const response = await axios.put(`${API_URL}/auth`, data, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
}

// delete user
export async function deleteUser() {
  const token = localStorage.getItem("token");
  const response = await axios.delete(`${API_URL}/auth`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
}
