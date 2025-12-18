import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI || "";

async function connectDB() {
  if (!MONGODB_URI) {
    throw new Error("Please define the MONGODB_URI environment variable");
  }

  if (mongoose.connection.readyState >= 1) {
    return;
  }

  await mongoose.connect(MONGODB_URI);
}

export default connectDB;
