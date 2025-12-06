import express from "express";
import cors from "cors";
import { connectDB } from "./db.js";

const app = express();
app.use(express.json());
app.use(cors());

// Connect database
connectDB(process.env.MONGO_URI);

// Simple API route
app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from MERN Backend on Vercel!" });
});

export default app;
