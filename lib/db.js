import 'dotenv/config';
import mongoose from "mongoose";

export async function connectDB() {
  const uri = process.env.MONGODB_URI;

  console.log("MONGODB_URI:", uri); 

  if (!uri) {
    throw new Error("MONGODB_URI is missing");
  }

  if (mongoose.connection.readyState === 1) {
    return;
  }

  await mongoose.connect(uri);
  console.log("✅ MongoDB connected");
}
