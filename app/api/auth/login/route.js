import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import User from "@/models/User";
import { comparePassword } from "@/lib/auth";
import { signToken } from "@/lib/jwt";

export async function POST(req) {
  await connectDB();
  const { username, password } = await req.json();

  const user = await User.findOne({ username });
  if (!user) {
    return NextResponse.json({ message: "User not found" }, { status: 401 });
  }

  const valid = await comparePassword(password, user.password);
  if (!valid) {
    return NextResponse.json({ message: "Wrong password" }, { status: 401 });
  }

  const token = signToken({
    id: user._id,
    role: user.role,
  });

  const res = NextResponse.json({
    role: user.role,
  });

  res.cookies.set("token", token, {
    httpOnly: true,
    secure: true,
    sameSite: "strict",
  });

  return res;
}
