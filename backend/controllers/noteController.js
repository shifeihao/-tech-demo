import Note from "../models/note.js";

// create notes by userId
export const createNote = async (req, res) => {
  const { title, content } = req.body;
  try {
    const newNote = new Note({ userId: req.user.id, title, content });
    await newNote.save();
    res.status(201).json(newNote);
  } catch (err) {
    res.status(500).json({ error: "Failed to create note", details: err });
  }
};

// get notes by userId
export const getNotes = async (req, res) => {
  try {
    const notes = await Note.find({ userId: req.user.id });
    res.status(200).json(notes);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch notes", details: err });
  }
};

// get note by note_id
export const getNoteById = async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);
    //check if note exists
    if (!note) {
      return res.status(404).json({ error: "can not find this note" });
    }
    // check if note belongs to user
    if (note.userId.toString() !== req.user.id) {
      return res.status(403).json({ error: "No authority" });
    }
    res.status(200).json(note);
  } catch (err) {
    res.status(500).json({ error: "fail to get the note", details: err });
  }
};

// update note by note_id
export const updateNote = async (req, res) => {
  const { title, content } = req.body;
  const userId = req.user.id;
  const noteId = req.params.id;

  try {
    // Check if the note exists and belongs to the user
    const note = await Note.findOneAndUpdate(
      { _id: noteId, userId },
      { title, content },
      { new: true }
    );

    if (!note) {
      return res.status(404).json({ error: "Note not found or access denied" });
    }

    res.status(200).json(note);
  } catch (err) {
    res.status(500).json({ error: "Failed to update note", details: err });
  }
};

// delete note by note_id
export const deleteNote = async (req, res) => {
  const userId = req.user.id;
  const noteId = req.params.id;

  try {
    const result = await Note.findOneAndDelete({ _id: noteId, userId });

    if (!result) {
      return res.status(404).json({ error: "Note not found or access denied" });
    }

    res.status(200).json({ message: "Note deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete note", details: err });
  }
};
