import { NextResponse } from "next/server";

import { FEEDBACK_ADMIN_COOKIE_NAME } from "@/lib/feedback-admin";

export const runtime = "nodejs";

export async function POST(request: Request) {
  const response = NextResponse.redirect(new URL("/feedback-admin", request.url), {
    status: 303
  });

  response.cookies.set({
    name: FEEDBACK_ADMIN_COOKIE_NAME,
    value: "",
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/feedback-admin",
    maxAge: 0
  });

  return response;
}
