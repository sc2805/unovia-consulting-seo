import { MetadataRoute } from "next";
import { SERVICES } from "@/lib/constants";
import { getBlogPosts } from "@/lib/blog";
import { getNewsData } from "@/lib/daily-news-service";

export const revalidate = 3600; // Revalidate sitemap every hour

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://unovia.in";
  const lastModified = new Date();

  // Core static pages
  const staticRoutes = [
    { path: "", priority: 1, changeFrequency: "monthly" as const },
    { path: "/about", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/services", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/insights", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/contact", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/daily-brief", priority: 0.6, changeFrequency: "daily" as const },
    { path: "/calculators/sip-lumpsum", priority: 0.6, changeFrequency: "monthly" as const },
  ].map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  // Service detail pages
  const serviceRoutes = SERVICES.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // Blog/Insights article pages
  const blogRoutes = getBlogPosts().map((post) => ({
    url: `${baseUrl}/insights/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "yearly" as const,
    priority: 0.5,
  }));

  // Daily brief article pages
  const { lastUpdated, articles } = getNewsData();
  const fallbackDate = lastUpdated ? new Date(lastUpdated) : lastModified;

  const seenSlugs = new Set<string>();

  const dailyBriefRoutes = articles
    .filter((article) => {
      if (!article.slug || seenSlugs.has(article.slug)) return false;
      seenSlugs.add(article.slug);
      return true;
    })
    .map((article) => {
      const pubDate = article.pubDate ? new Date(article.pubDate) : fallbackDate;
      const articleDate = isNaN(pubDate.getTime()) ? fallbackDate : pubDate;

      return {
        url: `${baseUrl}/daily-brief/${article.slug}`,
        lastModified: articleDate,
        changeFrequency: "daily" as const,
        priority: 0.4,
      };
    });

  return [...staticRoutes, ...serviceRoutes, ...blogRoutes, ...dailyBriefRoutes];
}
