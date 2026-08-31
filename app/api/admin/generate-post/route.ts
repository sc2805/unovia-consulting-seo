import { NextResponse } from "next/server";
import { isAuthenticated } from "@/lib/auth";
import { generateNextBlogPost } from "@/lib/blog-generator";

export async function POST() {
  if (!isAuthenticated()) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const result = await generateNextBlogPost();
    return NextResponse.json(result);
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Failed to run automated content engine";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
