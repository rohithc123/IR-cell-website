import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import validateToken from "./app/api/middleware/validate";

const protectedRoutes = ["/api/dashboard/info", "/api/logout"];
const publicRoutes = ["/api/login", "/api/info"];

interface Decodedcookie {
  _id: string;
  email: string;
  password: string;
  iat: number;
}

//TODO xd using hacky way of using true or false if possible change this

export default async function middleware(req: NextRequest, res: NextResponse) {
  const path = req.nextUrl.pathname;
  console.log(path);
  const isProtectedRoute = protectedRoutes.includes(path);
  const isPublicRoute = publicRoutes.includes(path);

  const cookie = (await cookies()).get("token")?.value;
  //   console.log("Token cookie:", cookie);

  //   console.log(await validateToken(cookie));
  if (isProtectedRoute && !(await validateToken(cookie))) {
    console.log("yes");

    //TODO if u create a login section it will directly redirect to login page
    return NextResponse.redirect(new URL("/login", req.nextUrl));
  }

  //   if (
  //     isPublicRoute &&
  //     cookie?._id &&
  //     !req.nextUrl.pathname.startsWith("/dashboard")
  //   ) {
  //     console.log("Working");
  //     return NextResponse.redirect(new URL("/dashboard", req.nextUrl));
  //   }

  return NextResponse.next();
}

export const config = {
  matcher: ["/api/dashboard/:path*"],
};
