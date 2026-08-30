import { NextResponse } from "next/server";
import { getNewsData, refreshNewsFeed } from "@/lib/daily-news-service";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const data = getNewsData();
    return NextResponse.json(data);
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Failed to load news";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export async function POST() {
  try {
    const data = await refreshNewsFeed();
    return NextResponse.json(data);
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Failed to refresh news feed";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
