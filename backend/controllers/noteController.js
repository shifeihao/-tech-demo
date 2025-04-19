import Note from "../models/note.js";

// 新建笔记
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

// 获取笔记列表
export const getNotes = async (req, res) => {
  try {
    const notes = await Note.find({ userId: req.user.id });
    res.status(200).json(notes);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch notes", details: err });
  }
};

// 通过id获取笔记列表
// 获取单条笔记
export const getNoteById = async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);
    // 检查是否存在
    if (!note) {
      return res.status(404).json({ error: "笔记不存在" });
    }
    // 检查权限（确保笔记属于当前用户）
    if (note.userId.toString() !== req.user.id) {
      return res.status(403).json({ error: "无权访问该笔记" });
    }
    res.status(200).json(note);
  } catch (err) {
    res.status(500).json({ error: "获取笔记失败", details: err });
  }
};

// 更新笔记
export const updateNote = async (req, res) => {
  const { title, content } = req.body;
  const userId = req.user.id;
  const noteId = req.params.id;

  try {
    // 确保笔记属于当前用户
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

// 删除笔记
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
