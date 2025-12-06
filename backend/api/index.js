// backend/api/index.js
import serverless from "serverless-http";
import app from "../src/app.js";
import { connectDB } from "../src/db.js";

export async function handler(event, context) {
  // Ensure DB connection is established before handling requests
  try {
    await connectDB(process.env.MONGO_URI);
  } catch (err) {
    console.error("DB connect failed in handler:", err);
    // Return 500 quickly if DB unavailable
    return {
      statusCode: 500,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ error: "Database connection error" }),
    };
  }

  // Use serverless to run express app
  const fn = serverless(app);
  return fn(event, context);
}
