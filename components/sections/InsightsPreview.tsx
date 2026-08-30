import Link from "next/link";
import { ArrowRight, Clock, ArrowUpRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { getBlogPosts } from "@/lib/blog";

// =============================================================================
// InsightsPreview — Latest articles preview on home page
// =============================================================================

export default function InsightsPreview() {
  const blogPosts = getBlogPosts().sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  const featured = blogPosts[0] || { slug: "", title: "", excerpt: "", category: "", readTime: "" };
  const others = blogPosts.slice(1, 4);

  return (
    <section className="section-padding bg-mesh-light relative" id="insights-preview">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-grid opacity-40" />

      <div className="container-tight relative">
        <SectionHeading
          eyebrow="Latest Insights"
          title="Insights That Empower Better Financial Decisions"
          subtitle="Expert perspectives on taxation, investments, wealth creation, business finance, and economic trends to help you navigate an evolving financial landscape with confidence."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
          {/* Featured Article */}
          <Link
            href={`/insights#${featured.slug}`}
            className="group relative p-8 bg-white rounded-2xl border border-gray-100 hover:border-gold-200 hover:shadow-xl hover:shadow-navy-800/5 transition-all duration-300 overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-gold-100/50 to-transparent rounded-bl-[100px]" />
            <span className="relative inline-flex items-center gap-1 px-3 py-1 bg-gold-50 text-gold-700 text-xs font-semibold rounded-full mb-4">
              {featured.category}
            </span>
            <h3 className="relative text-xl md:text-2xl font-bold text-navy-800 mb-3 group-hover:text-navy-700 transition-colors leading-snug">
              {featured.title}
            </h3>
            <p className="relative text-gray-500 text-sm leading-relaxed mb-6">
              {featured.excerpt}
            </p>
            <div className="relative flex items-center justify-between">
              <div className="flex items-center gap-1 text-xs text-gray-400">
                <Clock className="w-3.5 h-3.5" />
                <span>{featured.readTime}</span>
              </div>
              <span className="flex items-center gap-1 text-sm font-semibold text-navy-700 group-hover:text-gold-600 transition-colors">
                Read Article
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </div>
          </Link>

          {/* Other Articles */}
          <div className="flex flex-col gap-4">
            {others.map((article) => (
              <Link
                key={article.slug}
                href={`/insights#${article.slug}`}
                className="group flex gap-5 p-5 bg-white rounded-xl border border-gray-100 hover:border-gold-200 hover:shadow-lg hover:shadow-navy-800/5 transition-all duration-300"
              >
                <div className="flex-1 min-w-0">
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 bg-gray-100 text-gray-600 text-[10px] font-semibold rounded-full mb-2 uppercase tracking-wide">
                    {article.category}
                  </span>
                  <h4 className="text-sm font-semibold text-navy-800 mb-1.5 group-hover:text-navy-700 transition-colors line-clamp-2 leading-snug">
                    {article.title}
                  </h4>
                  <div className="flex items-center gap-3 text-xs text-gray-400">
                    <span>{article.date}</span>
                    <span>·</span>
                    <span>{article.readTime}</span>
                  </div>
                </div>
                <div className="flex-shrink-0 self-center">
                  <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-gold-500 transition-all duration-300 group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 text-sm font-semibold text-navy-700 hover:text-gold-600 transition-colors group"
          >
            Explore All Insights
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
