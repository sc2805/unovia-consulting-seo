import dailyNews from "./daily-news.json";
import Parser from "rss-parser";
import fs from "fs";
import path from "path";

export interface NewsArticle {
  slug: string;
  title: string;
  link: string;
  pubDate: string;
  content: string;
  excerpt: string;
  image: string | null;
  source: string;
}

let cachedNews: NewsArticle[] | null = null;
let lastUpdatedTime: string | null = null;

export function getNewsData() {
  return {
    lastUpdated: lastUpdatedTime || dailyNews.lastUpdated,
    articles: cachedNews || (dailyNews.articles as NewsArticle[])
  };
}

export function setNewsData(articles: NewsArticle[]) {
  cachedNews = articles;
  lastUpdatedTime = new Date().toISOString();
  
  try {
    const file = path.join(process.cwd(), "lib", "daily-news.json");
    fs.writeFileSync(file, JSON.stringify({ lastUpdated: lastUpdatedTime, articles }, null, 2));
  } catch {
    // Gracefully ignore write errors on read-only filesystems (like Vercel)
    console.log("Memory cache updated. File write skipped (read-only filesystem).");
  }
}

export async function refreshNewsFeed() {
  const parser = new Parser();
  const feed = await parser.parseURL("https://economictimes.indiatimes.com/markets/rssfeeds/1977021501.cms");
  
  const items: NewsArticle[] = feed.items.slice(0, 20).map((item) => {
    const slug = (item.title || "")
      .toLowerCase()
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/--+/g, "-")
      .replace(/^-+|-+$/g, "");
    return {
      slug,
      title: item.title || "",
      link: item.link || "",
      pubDate: item.pubDate || "",
      content: item.content || item.contentSnippet || "",
      excerpt: item.contentSnippet || "",
      image: item.enclosure?.url || null,
      source: "Economic Times"
    };
  });
  
  setNewsData(items);
  return { lastUpdated: lastUpdatedTime!, articles: items };
}
