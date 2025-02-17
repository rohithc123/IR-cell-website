import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const cookieStore = await cookies();

    //deleting the cookie just make empty value to the token cookie, expiring it will completely remove the cookie
    cookies().set("token", "", {
      expires: new Date(0), 
      path: "/",
    });

    console.log("Expired");
    const allCookies = (await cookies()).getAll();
    console.log("All cookies:", allCookies);

    return NextResponse.json(
      { message: "Logout successfull" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
