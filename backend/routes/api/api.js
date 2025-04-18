import express from "express";
import authRoutes from "./auth.js";
import noteRoutes from "./notes.js";
const router = express.Router();
// 子路由挂载
router.use("/auth", authRoutes); // /api/auth/*
router.use("/notes", noteRoutes); // /api/notes/*
export default router;
