import { NextResponse } from "next/server";
import { getSession } from "@auth0/nextjs-auth0";

// This function can be marked `async` if using `await` inside
export async function middleware(request) {
  const session = await getSession(request);
  if (request.nextUrl.pathname.startsWith("/mindmap")) {
    console.log("vào");
    if (session) {
      return NextResponse.rewrite(new URL("/", request.url));
    } else {
      console.log("không tồn tại");
      return NextResponse.rewrite(new URL("/", request.url));
    }
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/mindmap/:path*",
};
