// // app/api/auth/me/route.js
import { NextResponse } from "next/server";
import { jwtVerify } from "jose";

const secret = new TextEncoder().encode(process.env.JWT_SECRET);

export async function GET(req) {
  const token = req.cookies.get("token")?.value;
  if (!token) return NextResponse.json(null, { status: 401 });

  try {
    const { payload } = await jwtVerify(token, secret);
    return NextResponse.json({
      id: payload.id,
      role: payload.role,
    });
  } catch {
    return NextResponse.json(null, { status: 401 });
  }
}
