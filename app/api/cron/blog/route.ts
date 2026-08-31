import { NextResponse } from "next/server";
import { generateNextBlogPost } from "@/lib/blog-generator";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const result = await generateNextBlogPost();
    return NextResponse.json(result);
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Failed to run automated blog cron";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export async function POST() {
  try {
    const result = await generateNextBlogPost();
    return NextResponse.json(result);
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Failed to run automated blog cron";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
