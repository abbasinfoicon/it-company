import { NextResponse } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(req) {
    const path = req.nextUrl.pathname;
    const pbPath = path === "/login" || path === "/signup" || path === "/reset-password" || path === "/forgot-password"

    const token = req.cookies.get('next-auth.session-token')?.value || "";

    if (pbPath && token) {
        return NextResponse.redirect(new URL(path, req.nextUrl));
    }
    if (!pbPath && !token) {
        return NextResponse.redirect(new URL('/login', req.nextUrl));
    }
}

// See "Matching Paths" below to learn more
export const config = {
    api: {
        bodyParser: false, // Important to set bodyParser to false for Next.js 14
    },
    matcher: ['/student/:path*', '/dashboard', '/dashboard/:path*'],
}