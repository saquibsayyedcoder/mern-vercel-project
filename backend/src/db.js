// backend/src/db.js
import mongoose from "mongoose";

let isConnected = false;

export const connectDB = async (uri) => {
  if (!uri) throw new Error("MONGO_URI not provided");
  if (isConnected) {
    // console.log("Using existing MongoDB connection");
    return;
  }

  try {
    // Use recommended options for mongoose (defaults OK with v7+)
    await mongoose.connect(uri, {
      // useNewUrlParser, useUnifiedTopology not needed in recent mongoose
    });
    isConnected = true;
    console.log("MongoDB connected");
  } catch (err) {
    console.error("MongoDB connection error:", err.message || err);
    throw err;
  }
};
