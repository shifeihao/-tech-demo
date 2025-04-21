import express from "express";
import apiRoutes from "./api/api.js";

const router = express.Router();
router.use("/api", apiRoutes); // Mount the API routes under the /api path

export default router;
