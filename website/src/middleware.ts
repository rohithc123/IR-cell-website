import { NextRequest, NextResponse } from "next/server";
import { jwtVerify } from 'jose';

const secretKey = new TextEncoder().encode(process.env.JWT_SECRET || 'your-secret-key');

const protectedRoutes = ["/api/dashboard/info", "/api/logout"];
const publicRoutes = ["/api/login", "/api/info"];

interface Decodedcookie {
  _id: string;
  email: string;
  password: string;
  iat: number;
}

//TODO xd using hacky way of using true or false if possible change this

export async function middleware(request: NextRequest) {
  // TEMPORARILY DISABLED FOR DEMO - Allow all routes without authentication
  return NextResponse.next();
  
  /* ORIGINAL CODE COMMENTED OUT FOR DEMO
  const token = request.cookies.get('token')?.value;
  const isAuthPage = request.nextUrl.pathname.startsWith('/login') || 
                    request.nextUrl.pathname.startsWith('/signup');
  const isDashboardPage = request.nextUrl.pathname.startsWith('/dashboard');
  const isApiRoute = request.nextUrl.pathname.startsWith('/api');

  // Allow API routes to handle their own authentication
  if (isApiRoute) {
    return NextResponse.next();
  }

  let isAuthenticated = false;

  if (token) {
    try {
      // Verify the JWT token using jose (Edge-compatible)
      await jwtVerify(token, secretKey);
      isAuthenticated = true;
    } catch (error) {
      console.error('Token verification failed:', error);
      isAuthenticated = false;
    }
  }

  // If trying to access auth pages while logged in, redirect to dashboard
  if (isAuthPage && isAuthenticated) {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  // If trying to access protected pages while logged out, redirect to login
  if (isDashboardPage && !isAuthenticated) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return NextResponse.next();
  */
}

export const config = {
  matcher: ['/dashboard/:path*', '/login', '/signup']
};
