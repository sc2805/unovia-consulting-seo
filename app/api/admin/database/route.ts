import { NextRequest, NextResponse } from "next/server";
import { getDatabase, saveDatabase, BlogPost } from "@/lib/db";
import { isAuthenticated } from "@/lib/auth";

export async function GET() {
  if (!isAuthenticated()) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  try {
    const db = getDatabase();
    return NextResponse.json(db);
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Failed to load database";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  if (!isAuthenticated()) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  try {
    const body = await req.json();
    const { action, article } = body as { action: string; article: BlogPost };
    const db = getDatabase();

    if (action === "save" || action === "publish") {
      const idx = db.articles.findIndex((a) => a.id === article.id);
      
      const updatedArticle: BlogPost = {
        ...article,
        status: action === "publish" ? "PUBLISHED" : article.status,
        updatedDate: new Date().toISOString().split("T")[0],
        publicationDate: action === "publish" && article.status !== "PUBLISHED"
          ? new Date().toISOString().split("T")[0]
          : article.publicationDate
      };

      if (idx !== -1) {
        db.articles[idx] = updatedArticle;
      } else {
        db.articles.push(updatedArticle);
      }
      
      saveDatabase(db);
      return NextResponse.json({ success: true, article: updatedArticle });
    }

    if (action === "delete") {
      db.articles = db.articles.filter((a) => a.id !== article.id);
      saveDatabase(db);
      return NextResponse.json({ success: true });
    }

    return NextResponse.json({ error: "Invalid action" }, { status: 400 });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Failed to process request";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
