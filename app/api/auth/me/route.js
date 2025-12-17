import { cookies } from "next/headers";
import { verifyToken } from "@/lib/jwt";

export async function GET() {
  const token = cookies().get("token")?.value;
  if (!token) return Response.json(null);

  try {
    const user = verifyToken(token);
    return Response.json(user);
  } catch {
    return Response.json(null);
  }
}
