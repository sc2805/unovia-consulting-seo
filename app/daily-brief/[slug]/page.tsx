import { Metadata } from "next";
import { notFound } from "next/navigation";
import { ExternalLink, Calendar, Newspaper } from "lucide-react";
import dailyNews from "@/lib/daily-news.json";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

interface PageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  return dailyNews.articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const article = dailyNews.articles.find((a) => a.slug === params.slug);
  if (!article) return { title: "Article Not Found" };

  return {
    title: article.title,
    description: article.excerpt,
    openGraph: article.image ? { images: [article.image] } : undefined,
  };
}

export default function DailyArticlePage({ params }: PageProps) {
  const article = dailyNews.articles.find((a) => a.slug === params.slug);

  if (!article) {
    notFound();
  }

  return (
    <main className="min-h-screen pt-32 pb-20 bg-white">
      <div className="container-tight px-4">
        {/* Breadcrumbs */}
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Daily Brief", href: "/daily-brief" },
            { label: article.title.length > 50 ? article.title.substring(0, 50) + "…" : article.title, href: `/daily-brief/${article.slug}` },
          ]}
        />

        {/* Article Header */}
        <div className="max-w-3xl mx-auto mb-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="px-3 py-1 bg-navy-800 text-gold-400 text-[10px] font-bold uppercase tracking-wider rounded-lg">
              {article.source}
            </span>
            <span className="flex items-center gap-1.5 text-xs text-gray-400 font-medium">
              <Calendar className="w-4 h-4" />
              {new Date(article.pubDate).toLocaleDateString("en-IN", { 
                day: "numeric", 
                month: "long", 
                year: "numeric" 
              })}
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy-800 leading-tight mb-8">
            {article.title}
          </h1>

          {/* Featured Image if available */}
          {article.image && (
            <div className="relative aspect-video w-full rounded-2xl overflow-hidden mb-12 shadow-2xl">
              <img 
                src={article.image} 
                alt={article.title}
                className="object-cover w-full h-full"
              />
            </div>
          )}

          {/* Article Content */}
          <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed mb-12">
            <p className="text-xl font-medium text-navy-700/80 mb-6 italic border-l-4 border-gold-500 pl-6">
              {article.excerpt}
            </p>
            <div className="whitespace-pre-wrap">
              {article.content}
            </div>
          </div>

          {/* Source Footer */}
          <div className="pt-10 border-t border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-navy-50 flex items-center justify-center">
                <Newspaper className="w-6 h-6 text-navy-700" />
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase font-bold tracking-widest">Source</p>
                <p className="text-sm font-bold text-navy-800">{article.source} Markets</p>
              </div>
            </div>
            
            <a 
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gray-50 text-navy-800 text-sm font-bold rounded-xl hover:bg-gold-500 hover:text-navy-900 transition-all duration-300"
            >
              Read full coverage on ET
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
