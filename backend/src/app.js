// backend/src/app.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./db.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Connect DB (not awaited here is OK because connectDB caches connection)
if (process.env.MONGO_URI) {
  connectDB(process.env.MONGO_URI).catch(err =>
    console.error("connectDB error (app.js):", err)
  );
}

// Define routes (note: use /api/... in route paths for clarity)
app.get("/api/hello", (req, res) => {
  res.json({ success: true, message: "Backend is working (serverless)!" });
});

export default app;
