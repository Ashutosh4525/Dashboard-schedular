import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import User from "@/models/User";
import { hashPassword } from "@/lib/auth";
import { verifyToken } from "@/lib/jwt";
import { cookies } from "next/headers";

export async function POST(req) {
  await connectDB();
  
  const token = cookies().get("token")?.value;
  if (!token) return NextResponse.json({ message: "Unauthorized" }, { status: 401 });

  const decoded = verifyToken(token);
  if (decoded.role !== "admin") {
    return NextResponse.json({ message: "Forbidden" }, { status: 403 });
  }

  // CREATE USER
  const { username, password, role } = await req.json();

  const hashed = await hashPassword(password);
  await User.create({ username, password: hashed, role });

  return NextResponse.json({ success: true });
}
