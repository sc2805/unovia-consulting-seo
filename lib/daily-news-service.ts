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

function stripHtml(html: string | undefined): string {
  return (html || "")
    .replace(/<[^>]*>/g, "")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/\s+/g, " ")
    .trim();
}

function createSlug(title: string, existingSlugs: Set<string>): string {
  let baseSlug = (title || "market-update")
    .toLowerCase()
    .replace(/<[^>]*>/g, "")
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/--+/g, "-")
    .replace(/^-+|-+$/g, "");

  if (!baseSlug) baseSlug = "market-update";

  let slug = baseSlug;
  let counter = 1;
  while (existingSlugs.has(slug)) {
    slug = `${baseSlug}-${counter}`;
    counter++;
  }
  existingSlugs.add(slug);
  return slug;
}

function extractImage(item: Parser.Item): string | null {
  if (item.enclosure?.url) return item.enclosure.url;
  const match = (item.content || "").match(/<img[^>]+src=["']([^"']+)["']/i);
  return match ? match[1] : null;
}

export function getNewsData(): { lastUpdated: string; articles: NewsArticle[] } {
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
    console.log("Memory cache updated. File write skipped (read-only filesystem).");
  }
}

export async function refreshNewsFeed() {
  try {
    const parser = new Parser();
    const feed = await parser.parseURL("https://economictimes.indiatimes.com/markets/rssfeeds/1977021501.cms");

    const existingSlugs = new Set<string>();

    const items: NewsArticle[] = feed.items
      .slice(0, 25)
      .map((item) => {
        const rawTitle = stripHtml(item.title);
        const slug = createSlug(rawTitle, existingSlugs);
        const rawContent = stripHtml(item.content || item.contentSnippet);
        const rawExcerpt = stripHtml(item.contentSnippet || item.content);

        return {
          slug,
          title: rawTitle,
          link: item.link || "",
          pubDate: item.pubDate || new Date().toISOString(),
          content: rawContent,
          excerpt: rawExcerpt.substring(0, 280),
          image: extractImage(item),
          source: "Economic Times"
        };
      })
      .filter((item) => item.title && item.slug);

    if (items.length > 0) {
      setNewsData(items);
    }
    return getNewsData();
  } catch (error) {
    console.error("Failed to refresh RSS feed:", error);
    return getNewsData();
  }
}
