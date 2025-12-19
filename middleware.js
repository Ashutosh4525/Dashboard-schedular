import { NextResponse } from "next/server";
// import jwt from 'jsonwebtoken'
import { jwtVerify } from "jose";

const secret = new TextEncoder().encode(process.env.JWT_SECRET);
export async function middleware(req) {
  const token = req.cookies.get("token")?.value;
  const path = req.nextUrl.pathname;

  if (path === "/login" || path === "/register") {
    if (!token) return NextResponse.next();

    try {
      const user = jwtVerify(token, secret);
      return NextResponse.redirect(new URL(`/${user.role}`, req.url));
    } catch {
      return NextResponse.next();
    }
  }

  if (!token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  try {
    // const user = jwt.verify(token, process.env.JWT_SECRET);

    // if (path.startsWith("/admin") && user.role !== "admin") {
    //   return NextResponse.redirect(new URL("/login", req.url));
    // }

    //  if (path.startsWith("/student") && user.role !== "student") {
    //   return NextResponse.redirect(new URL("/login", req.url));
    // }

    // if (path.startsWith("/teacher") && user.role !== "teacher") {
    //   return NextResponse.redirect(new URL("/login", req.url));
    // }

    // if (path.startsWith("/parent") && user.role !== "parent") {
    //   return NextResponse.redirect(new URL("/login", req.url));
    // }

    // return NextResponse.next();
    const { payload } = await jwtVerify(token, secret);
    console.log("JWT payload:", payload);
    console.log("Redirecting to role:", payload.role);

    if (path.startsWith("/admin") && payload.role !== "admin")
      return NextResponse.redirect(new URL("/login", req.url));

    if (path.startsWith("/student") && payload.role !== "student")
      return NextResponse.redirect(new URL("/login", req.url));

    if (path.startsWith("/teacher") && payload.role !== "teacher")
      return NextResponse.redirect(new URL("/login", req.url));

    if (path.startsWith("/parent") && payload.role !== "parent")
      return NextResponse.redirect(new URL("/login", req.url));

    return NextResponse.next();
  } catch {
    return NextResponse.redirect(new URL("/login", req.url));
  }
}

export const config = {
  // matcher: ["/login","/register","/admin","/admin/:path*", "/parent/:path*", "/student/:path*",'/teacher/:path*'],
   matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
