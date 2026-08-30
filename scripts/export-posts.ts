import { BLOG_POSTS } from "../lib/blog";
import * as fs from "fs";
import * as path from "path";

function run() {
  const dbPath = path.join(__dirname, "../lib/blog-db.json");
  
  // Format initial database structure
  const db = {
    settings: {
      autoPublish: false
    },
    articles: BLOG_POSTS.map((post) => ({
      id: post.slug,
      slug: post.slug,
      title: post.title,
      excerpt: post.excerpt,
      category: post.category,
      pillar: getPillarByCategory(post.category),
      primaryKeyword: post.title.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
      secondaryKeywords: [],
      searchIntent: "informational",
      location: "India",
      url: `/insights/${post.slug}`,
      sources: ["Official Tax/GST Guidelines"],
      author: post.author,
      reviewer: "",
      status: "PUBLISHED",
      publicationDate: post.date,
      updatedDate: post.date,
      date: post.date,
      readTime: post.readTime,
      content: post.content
    })),
    researchLogs: []
  };

  fs.writeFileSync(dbPath, JSON.stringify(db, null, 2), "utf-8");
  console.log(`Successfully exported ${BLOG_POSTS.length} posts to ${dbPath}`);
}

function getPillarByCategory(category: string): string {
  switch (category) {
    case "Tax Planning": return "TAX";
    case "GST Advisory": return "GST";
    case "Investment & Wealth": return "INVESTMENT";
    case "Wealth Management": return "WEALTH";
    case "Business Strategy": return "BUSINESS";
    default: return "GENERAL";
  }
}

run();
