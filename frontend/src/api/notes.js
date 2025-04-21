import axios from "axios";
const API_URL = import.meta.env.VITE_API_BASE_URL;

// get all notes
export async function getAllNotes(token) {
  const res = await axios.get(`${API_URL}/notes`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
}

// create a new note
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

// delete a note
export async function deleteNote(token, noteId) {
  const res = await axios.delete(`${API_URL}/notes/${noteId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
}

// update a note
export async function updateNote(token, noteId, updatedData) {
  const res = await axios.put(`${API_URL}/notes/${noteId}`, updatedData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
}

// get a note by id
export async function getNoteById(token, id) {
  const res = await axios.get(`${API_URL}/notes/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
}
