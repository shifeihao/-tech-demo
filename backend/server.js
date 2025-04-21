import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import runSeed from "./seed/index.js";

dotenv.config();

const app = express();

//middleware
app.use(cors());
app.use(express.json());

// database connection
mongoose
  .connect(process.env.DB_URI, {})
  .then(() => {
    console.log("MongoDB connected");
    runSeed(); // insert data into the database
  })
  .catch((err) => console.error("Database connection error:", err));

// routes
import routes from "./routes/routes.js";
app.use("/", routes);

app.listen(process.env.PORT, () =>
  console.log(`Server running on port ${process.env.PORT}`)
);
