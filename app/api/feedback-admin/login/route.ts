import { NextResponse } from "next/server";

import {
  FEEDBACK_ADMIN_COOKIE_NAME,
  getFeedbackAdminSessionToken,
  isFeedbackAdminProtectionEnabled,
  isValidFeedbackAdminPassword
} from "@/lib/feedback-admin";

export const runtime = "nodejs";

export async function POST(request: Request) {
  const redirectUrl = new URL("/feedback-admin", request.url);

  if (!isFeedbackAdminProtectionEnabled()) {
    return NextResponse.redirect(redirectUrl, { status: 303 });
  }

  const formData = await request.formData();
  const passwordValue = formData.get("password");
  const password = typeof passwordValue === "string" ? passwordValue : "";

  if (!isValidFeedbackAdminPassword(password)) {
    redirectUrl.searchParams.set("error", "invalid-password");
    return NextResponse.redirect(redirectUrl, { status: 303 });
  }

  const response = NextResponse.redirect(redirectUrl, { status: 303 });
  response.cookies.set({
    name: FEEDBACK_ADMIN_COOKIE_NAME,
    value: getFeedbackAdminSessionToken(),
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/feedback-admin",
    maxAge: 60 * 60 * 12
  });

  return response;
}
