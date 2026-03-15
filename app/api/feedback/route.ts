import { NextResponse } from "next/server";

import { createFeedbackEntry } from "@/lib/feedback-store";

export const runtime = "nodejs";

export async function POST(request: Request) {
  let payload: unknown;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid feedback payload." }, { status: 400 });
  }

  const body = payload as { message?: unknown; name?: unknown };
  const message = typeof body.message === "string" ? body.message.trim() : "";
  const name = typeof body.name === "string" ? body.name.trim() : "";

  if (!message) {
    return NextResponse.json({ error: "Feedback message is required." }, { status: 400 });
  }

  if (message.length > 2000) {
    return NextResponse.json(
      { error: "Feedback message must be 2000 characters or fewer." },
      { status: 400 }
    );
  }

  if (name.length > 80) {
    return NextResponse.json({ error: "Name must be 80 characters or fewer." }, { status: 400 });
  }

  try {
    const entry = await createFeedbackEntry({ name, message });
    return NextResponse.json({ entry }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      {
        error: error instanceof Error ? error.message : "Unable to save feedback."
      },
      { status: 500 }
    );
  }
}
