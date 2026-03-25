import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json(
    {
      error: "Feedback is submitted directly through Netlify Forms."
    },
    { status: 410 }
  );
}
