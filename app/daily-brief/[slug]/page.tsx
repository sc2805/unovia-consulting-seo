import { Metadata } from "next";
import { notFound } from "next/navigation";
import { ExternalLink, Calendar, Newspaper, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { getNewsData } from "@/lib/daily-news-service";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import BlogContent from "@/components/blog/BlogContent";

export const dynamic = "force-dynamic";
export const dynamicParams = true;

export async function generateStaticParams() {
  const { articles } = getNewsData();
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

interface PageProps {
  params: { slug: string };
}

const normalizeSlug = (s: string) => s.toLowerCase().replace(/^-+|-+$/g, "");

function getDailyArticle(slug: string) {
  const normalized = normalizeSlug(slug);
  const { articles } = getNewsData();
  return articles.find((a) => a.slug === slug || normalizeSlug(a.slug) === normalized);
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const article = getDailyArticle(params.slug);
  if (!article) return { title: "Article Not Found" };

  return {
    title: `${article.title} | Unovia Daily Brief`,
    description: article.excerpt,
    openGraph: article.image ? { images: [article.image] } : undefined,
  };
}

export default function DailyArticlePage({ params }: PageProps) {
  const article = getDailyArticle(params.slug);

  if (!article) {
    notFound();
  }

  return (
    <main className="min-h-screen pt-32 pb-24 bg-slate-50/50">
      <div className="container-tight px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        {/* Back Link & Breadcrumbs */}
        <div className="mb-8 flex items-center justify-between">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Daily Brief", href: "/daily-brief" },
              { label: article.title.substring(0, 40) + "…", href: `/daily-brief/${article.slug}` },
            ]}
          />
          <Link
            href="/daily-brief"
            className="hidden sm:inline-flex items-center gap-1.5 text-xs font-bold text-navy-800 hover:text-gold-600 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Back to Briefs
          </Link>
        </div>

        {/* Article Container Card */}
        <article className="bg-white border border-gray-200/80 rounded-3xl p-6 sm:p-10 md:p-12 shadow-xl">
          {/* Source & Date Badge */}
          <div className="flex items-center gap-3 mb-6">
            <span className="px-3.5 py-1 bg-navy-900 text-gold-400 text-xs font-extrabold uppercase tracking-wider rounded-lg shadow-sm">
              {article.source}
            </span>
            <span className="flex items-center gap-1.5 text-xs font-medium text-gray-500">
              <Calendar className="w-4 h-4 text-gold-600" />
              {new Date(article.pubDate).toLocaleDateString("en-IN", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-navy-900 leading-tight tracking-tight mb-8">
            {article.title}
          </h1>

          {/* Featured Image if available */}
          {article.image && (
            <div className="relative aspect-video w-full rounded-2xl overflow-hidden mb-10 shadow-2xl border border-gray-100">
              <img
                src={article.image}
                alt={article.title}
                className="object-cover w-full h-full"
              />
            </div>
          )}

          {/* Excerpt callout */}
          {article.excerpt && (
            <div className="p-6 mb-8 bg-gold-50/70 border-l-4 border-gold-500 rounded-r-2xl">
              <p className="text-lg font-medium text-navy-900 leading-relaxed italic">
                &ldquo;{article.excerpt}&rdquo;
              </p>
            </div>
          )}

          {/* Main Article Body using rich BlogContent */}
          <div className="mb-12">
            <BlogContent content={article.content} />
          </div>

          {/* Source Footer */}
          <div className="pt-8 border-t border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-6 bg-slate-50 p-6 rounded-2xl">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-navy-900 flex items-center justify-center text-gold-400 shadow-md">
                <Newspaper className="w-6 h-6" />
              </div>
              <div>
                <p className="text-[10px] text-gray-400 uppercase font-extrabold tracking-widest">Original Feed Source</p>
                <p className="text-sm font-bold text-navy-900">{article.source} Markets</p>
              </div>
            </div>

            <a
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-navy-900 text-gold-400 hover:text-white hover:bg-navy-800 text-sm font-bold rounded-xl transition-all duration-300 shadow-lg"
            >
              Read full story on ET
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </article>
      </div>
    </main>
  );
}
