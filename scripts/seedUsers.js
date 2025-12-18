import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";
import {connectDB} from "../lib/db.js";
import User from "../models/User.js";

dotenv.config({ path: ".env.local" });

const seedUsers = async () => {
  try {
    await connectDB();

    // Clear old users (important!)
    await User.deleteMany();

    const hashedPassword = await bcrypt.hash("password123", 10);

    const users = [
    {
        username: "admin",
        email: "admin@test.com",
        password: hashedPassword,
        role: "admin",
    },
    {
        username: "parent",
        email: "parent@test.com",
        password: hashedPassword,
        role: "parent",
    },
    {
        username: "student",
        email: "student@test.com",
        password: hashedPassword,
        role: "student",
    },
    ];

    await User.insertMany(users);

    console.log("✅ Users seeded successfully");
    process.exit(0);
  } catch (error) {
    console.error("❌ Seeding error:", error);
    process.exit(1);
  }
};

seedUsers();
