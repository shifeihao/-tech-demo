import express from "express";
import {
  registerUser,
  loginUser,
  deleteUser,
  updateUser,
  getUserInfo,
} from "../../controllers/authController.js";
import authMiddleware from "../../middleware/authMiddleware.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.delete("/", authMiddleware, deleteUser);
router.put("/", authMiddleware, updateUser);
router.get("/", authMiddleware, getUserInfo);

export default router;
