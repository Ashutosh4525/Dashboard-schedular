import { NextResponse } from "next/server";

export function middleware(request){
    const {pathname}=request.nextUrl;

     const token = request.cookies.get('token')?.value;
     const role = request.cookies.get('role')?.value;

        const isAuthRoute = pathname.startsWith('/login') || pathname.startsWith('/register');

        const isAdminRoute = pathname.startsWith('/admin');
        const isParentRoute = pathname.startsWith('/parent');
        const isStudentRoute = pathname.startsWith('/student');
        const isTeacherRoute = pathname.startsWith('/teacher');

        if (
            !token &&
            (isAdminRoute || isParentRoute || isStudentRoute || isTeacherRoute)
        ) {
            return NextResponse.redirect(new URL('/login', request.url));
        }

        if (token && isAuthRoute) {
            return redirectToDashboard(role, request);
        }

        if (isAdminRoute && role !== 'admin') {
            return redirectToDashboard(role, request);
        }

        if (isParentRoute && role !== 'parent') {
            return redirectToDashboard(role, request);
        }

        if (isStudentRoute && role !== 'student') {
            return redirectToDashboard(role, request);
        }

        if (isTeacherRoute && role !== 'teacher') {
            return redirectToDashboard(role, request);
        }

        return NextResponse.next();

}


function redirectToDashboard(role, request) {
  switch (role) {
    case 'admin':
      return NextResponse.redirect(new URL('/admin', request.url));
    case 'parent':
      return NextResponse.redirect(new URL('/parent', request.url));
    case 'student':
      return NextResponse.redirect(new URL('/student', request.url));
    case 'teacher':
      return NextResponse.redirect(new URL('/teacher', request.url));
    default:
      return NextResponse.redirect(new URL('/login', request.url));
  }
}

export const config = {
  matcher: [
    '/login',
    '/register',
    '/admin/:path*',
    '/parent/:path*',
    '/student/:path*',
    '/teacher/:path*',
  ],
};