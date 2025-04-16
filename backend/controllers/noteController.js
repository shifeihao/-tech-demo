import Note from '../models/note.js';

// 新建笔记
export const createNote = async (req, res) => {
    const { title, content } = req.body;
    try {
      const newNote = new Note({ userId: req.user.id, title, content });
      await newNote.save();
      res.status(201).json(newNote);
    } catch (err) {
      res.status(500).json({ error: 'Failed to create note', details: err });
    }
  };
  
  // 获取笔记列表
  export const getNotes = async (req, res) => {
    try {
      const notes = await Note.find({ userId: req.user.id });
      res.status(200).json(notes);
    } catch (err) {
      res.status(500).json({ error: 'Failed to fetch notes', details: err });
    }
  };
  
  // 更新笔记
  export const updateNote = async (req, res) => {
    const { title, content } = req.body;
    try {
      const updatedNote = await Note.findByIdAndUpdate(req.params.id, { title, content }, { new: true });
      res.status(200).json(updatedNote);
    } catch (err) {
      res.status(500).json({ error: 'Failed to update note', details: err });
    }
  };
  
  // 删除笔记
  export const deleteNote = async (req, res) => {
    try {
      await Note.findByIdAndDelete(req.params.id);
      res.status(200).json({ message: 'Note deleted successfully' });
    } catch (err) {
      res.status(500).json({ error: 'Failed to delete note', details: err });
    }
  };
  