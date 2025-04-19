// frontend/src/api/notes.js
import axios from "axios";
const API_URL = import.meta.env.VITE_API_BASE_URL;

// 获取所有笔记
export async function getAllNotes(token) {
  const res = await axios.get(`${API_URL}/notes`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
}

// 创建新笔记
export async function createNote(token, title, content) {
  console.log("token", token);
  const res = await axios.post(
    `${API_URL}/notes`,
    { title, content },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return res.data;
}

// 删除笔记
export async function deleteNote(token, noteId) {
  const res = await axios.delete(`${API_URL}/notes/${noteId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
}

// 更新笔记
export async function updateNote(token, noteId, updatedData) {
  const res = await axios.put(`${API_URL}/notes/${noteId}`, updatedData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
}

// src/api/notes.js
export async function getNoteById(token, id) {
  const res = await axios.get(`${API_URL}/notes/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
}
