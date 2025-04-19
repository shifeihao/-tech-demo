import express from "express";
import {
  createNote,
  getNotes,
  updateNote,
  deleteNote,
  getNoteById,
} from "../../controllers/noteController.js";
import authMiddleware from "../../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", authMiddleware, createNote);
router.get("/", authMiddleware, getNotes);
router.get("/:id", authMiddleware, getNoteById);
router.put("/:id", authMiddleware, updateNote);
router.delete("/:id", authMiddleware, deleteNote);

export default router;
