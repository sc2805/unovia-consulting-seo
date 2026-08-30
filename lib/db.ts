import * as fs from "fs";
import * as path from "path";

export type BlogPost = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  pillar: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  searchIntent: string;
  location: string;
  url: string;
  sources: string[];
  author: string;
  reviewer: string;
  status: "IDEA" | "RESEARCHING" | "DRAFT" | "FACT CHECK" | "READY" | "PUBLISHED" | "UPDATE REQUIRED";
  publicationDate: string;
  updatedDate: string;
  date: string; // for backward compatibility
  readTime: string;
  content: string;
};

export type ResearchLog = {
  id: string;
  date: string;
  source: string;
  title: string;
  url: string;
  status: "VERIFIED" | "PENDING" | "FLAGGED";
  notes: string;
};

export type Database = {
  settings: {
    autoPublish: boolean;
  };
  articles: BlogPost[];
  researchLogs: ResearchLog[];
};

const DB_FILE_PATH = path.join(process.cwd(), "lib/blog-db.json");

export function getDatabase(): Database {
  try {
    if (fs.existsSync(DB_FILE_PATH)) {
      const data = fs.readFileSync(DB_FILE_PATH, "utf-8");
      return JSON.parse(data);
    }
  } catch (error) {
    console.error("Error reading database:", error);
  }
  return { settings: { autoPublish: false }, articles: [], researchLogs: [] };
}

export function saveDatabase(db: Database) {
  try {
    fs.writeFileSync(DB_FILE_PATH, JSON.stringify(db, null, 2), "utf-8");
  } catch (error) {
    console.error("Error writing to database:", error);
  }
}
