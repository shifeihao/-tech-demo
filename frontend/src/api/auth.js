// src/api/auth.js
import axios from "axios";
const API_URL = import.meta.env.VITE_API_BASE_URL;

// 注册用户
export async function register(username, password) {
  const response = await axios.post(`${API_URL}/auth/register`, {
    username,
    password,
  });
  return response.data;
}

// 登录请求
export async function login(username, password) {
  const response = await axios.post(`${API_URL}/auth/login`, {
    username,
    password,
  });
  return response.data; // 返回后端的 token
}
