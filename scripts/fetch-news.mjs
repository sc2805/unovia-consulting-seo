import Parser from 'rss-parser';
import fs from 'fs';
import path from 'path';

const parser = new Parser();
const RSS_URL = 'https://economictimes.indiatimes.com/markets/rssfeeds/1977021501.cms';

// Helper to create a URL-friendly unique slug
function createSlug(title, existingSlugs) {
  let baseSlug = (title || 'market-update')
    .toLowerCase()
    .replace(/<[^>]*>/g, '') // Strip HTML tags
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/--+/g, '-')
    .replace(/^-+|-+$/g, '');

  if (!baseSlug) baseSlug = 'market-update';

  let slug = baseSlug;
  let counter = 1;
  while (existingSlugs.has(slug)) {
    slug = `${baseSlug}-${counter}`;
    counter++;
  }
  existingSlugs.add(slug);
  return slug;
}

// Extract image URL from enclosure or HTML content
function extractImage(item) {
  if (item.enclosure?.url) return item.enclosure.url;
  const match = (item.content || '').match(/<img[^>]+src=["']([^"']+)["']/i);
  return match ? match[1] : null;
}

// Strip HTML tags from string
function stripHtml(html) {
  return (html || '')
    .replace(/<[^>]*>/g, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/\s+/g, ' ')
    .trim();
}

async function fetchNews() {
  console.log('Fetching latest news for internal publishing...');
  
  try {
    const feed = await parser.parseURL(RSS_URL);
    const existingSlugs = new Set();

    const items = feed.items.slice(0, 25).map(item => {
      const rawTitle = stripHtml(item.title);
      const slug = createSlug(rawTitle, existingSlugs);
      const rawContent = stripHtml(item.content || item.contentSnippet);
      const rawExcerpt = stripHtml(item.contentSnippet || item.content);
      
      return {
        slug,
        title: rawTitle,
        link: item.link || '',
        pubDate: item.pubDate || new Date().toISOString(),
        content: rawContent,
        excerpt: rawExcerpt.substring(0, 280),
        image: extractImage(item),
        source: 'Economic Times'
      };
    }).filter(item => item.title && item.slug);

    const data = {
      lastUpdated: new Date().toISOString(),
      articles: items
    };

    const targetPath = path.join(process.cwd(), 'lib', 'daily-news.json');
    fs.writeFileSync(targetPath, JSON.stringify(data, null, 2));
    
    console.log(`Successfully saved ${items.length} unique articles with slugs to ${targetPath}`);
  } catch (error) {
    console.error('Error fetching news:', error);
    process.exit(1);
  }
}

fetchNews();
