import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import runSeed from "./seed/index.js";

dotenv.config();

const app = express();

// 中间件
app.use(cors());
app.use(bodyParser.json());

// 数据库连接
mongoose
  .connect(process.env.DB_URI, {})
  .then(() => {
    console.log("MongoDB connected");
    runSeed(); // 插入初始化数据 ✅
  })
  .catch((err) => console.error("Database connection error:", err));

// 引入路由

import routes from "./routes/routes.js";
app.use("/", routes);

app.listen(process.env.PORT, () =>
  console.log(`Server running on port ${process.env.PORT}`)
);
