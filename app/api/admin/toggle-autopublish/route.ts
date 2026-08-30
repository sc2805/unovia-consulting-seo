import { NextRequest, NextResponse } from "next/server";
import { getDatabase, saveDatabase } from "@/lib/db";
import { isAuthenticated } from "@/lib/auth";

export async function POST(req: NextRequest) {
  if (!isAuthenticated()) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  try {
    const body = await req.json();
    const { autoPublish } = body as { autoPublish: boolean };
    const db = getDatabase();
    
    db.settings.autoPublish = autoPublish;
    saveDatabase(db);

    return NextResponse.json({ success: true, autoPublish: db.settings.autoPublish });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Failed to toggle auto-publish";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
