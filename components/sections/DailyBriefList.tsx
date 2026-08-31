"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Newspaper, ExternalLink, Calendar, RefreshCw } from "lucide-react";
import { NewsArticle } from "@/lib/daily-news-service";

interface DailyBriefListProps {
  initialArticles: NewsArticle[];
  initialLastUpdated: string;
}

export default function DailyBriefList({ initialArticles, initialLastUpdated }: DailyBriefListProps) {
  const [articles, setArticles] = useState<NewsArticle[]>(initialArticles);
  const [lastUpdated, setLastUpdated] = useState<string>(initialLastUpdated);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Sync with localStorage on client mount if available
  useEffect(() => {
    const saved = localStorage.getItem("unovia_daily_news");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setArticles(parsed);
        }
      } catch {
        // ignore invalid JSON
      }
    }
  }, []);

  const formatDate = (dateStr: string) => {
    try {
      return new Date(dateStr).toLocaleDateString("en-IN", {
        day: "numeric",
        month: "short",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });
    } catch {
      return dateStr;
    }
  };

  const handleRefresh = async () => {
    if (isRefreshing) return;
    setIsRefreshing(true);
    setError(null);

    try {
      const response = await fetch("/api/news", { method: "POST" });
      if (!response.ok) {
        throw new Error("Failed to fetch fresh news");
      }
      const data = await response.json();
      setArticles(data.articles);
      setLastUpdated(data.lastUpdated);
      localStorage.setItem("unovia_daily_news", JSON.stringify(data.articles));
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Failed to refresh feed");
    } finally {
      setIsRefreshing(false);
    }
  };

  return (
    <div>
      {/* Update Status Bar */}
      <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-100">
        <div className="flex items-center gap-3 text-sm text-gray-500">
          <button
            onClick={handleRefresh}
            disabled={isRefreshing}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-lg border border-gray-200 bg-gray-50 hover:bg-gray-100 hover:border-gray-300 disabled:opacity-50 transition-all duration-300 text-xs font-bold text-navy-800`}
            title="Refresh Feed"
          >
            <RefreshCw className={`w-3.5 h-3.5 text-gold-600 ${isRefreshing ? "animate-spin" : ""}`} />
            {isRefreshing ? "Refreshing..." : "Refresh Feed"}
          </button>
          <span>Last updated: {formatDate(lastUpdated)}</span>
        </div>
        <div className="hidden sm:flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-navy-800">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          Live RSS Feed
        </div>
      </div>

      {error && (
        <div className="mb-6 p-4 bg-red-50 border border-red-100 rounded-xl text-red-700 text-sm">
          ⚠️ {error}. Please try again later.
        </div>
      )}

      {/* News Grid */}
      <div className="grid grid-cols-1 gap-6">
        {articles.map((article, index) => (
          <article
            key={index}
            className="group bg-white p-6 rounded-2xl border border-gray-100/80 hover:border-gold-200/60 hover:shadow-xl transition-all duration-300"
          >
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-2.5 py-0.5 bg-navy-50 text-navy-700 text-[10px] font-bold uppercase tracking-wider rounded-md">
                    {article.source}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-gray-400">
                    <Calendar className="w-3 h-3" />
                    {new Date(article.pubDate).toLocaleDateString("en-IN", { day: "numeric", month: "short" })}
                  </span>
                </div>

                <Link href={`/daily-brief/${article.slug}`}>
                  <h3 className="text-xl font-bold text-navy-800 mb-3 group-hover:text-gold-600 transition-colors leading-snug">
                    {article.title}
                  </h3>
                </Link>

                <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-2">
                  {article.excerpt}
                </p>

                <Link
                  href={`/daily-brief/${article.slug}`}
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-navy-800 hover:text-gold-600 transition-colors"
                >
                  Read article
                  <ExternalLink className="w-3.5 h-3.5" />
                </Link>
              </div>

              {/* Visual accent */}
              <div className="hidden md:flex items-center justify-center w-24 bg-gray-50 rounded-xl group-hover:bg-navy-50 transition-colors">
                <Newspaper className="w-8 h-8 text-navy-200 group-hover:text-navy-400 transition-colors" />
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Empty State */}
      {articles.length === 0 && (
        <div className="text-center py-20 bg-gray-50 rounded-3xl border-2 border-dashed border-gray-200">
          <Newspaper className="w-12 h-12 text-gray-300 mx-auto mb-4" />
          <p className="text-gray-500">No news updates available at the moment.</p>
        </div>
      )}
    </div>
  );
}
