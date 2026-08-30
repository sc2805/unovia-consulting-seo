import Parser from 'rss-parser';
import fs from 'fs';
import path from 'path';

const parser = new Parser();
const RSS_URL = 'https://economictimes.indiatimes.com/markets/rssfeeds/1977021501.cms';

// Helper to create a URL-friendly slug
function createSlug(title) {
  return title
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/--+/g, '-')
    .replace(/^-+|-+$/g, '');
}

async function fetchNews() {
  console.log('Fetching latest news for internal publishing...');
  
  try {
    const feed = await parser.parseURL(RSS_URL);
    const items = feed.items.slice(0, 20).map(item => ({
      slug: createSlug(item.title),
      title: item.title,
      link: item.link, // Keep original for source reference
      pubDate: item.pubDate,
      content: item.content || item.contentSnippet,
      excerpt: item.contentSnippet,
      image: item.enclosure?.url || null,
      source: 'Economic Times'
    }));

    const data = {
      lastUpdated: new Date().toISOString(),
      articles: items
    };

    const targetPath = path.join(process.cwd(), 'lib', 'daily-news.json');
    fs.writeFileSync(targetPath, JSON.stringify(data, null, 2));
    
    console.log(`Successfully saved ${items.length} articles with slugs to ${targetPath}`);
  } catch (error) {
    console.error('Error fetching news:', error);
    process.exit(1);
  }
}

fetchNews();
