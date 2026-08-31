import type { Metadata } from "next";
import Link from "next/link";
import {
  Clock,
  ArrowRight,
  Tag,
  FileText,
  TrendingUp,
  BarChart2,
  Briefcase,
  BookOpen,
  Lightbulb,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import CTABanner from "@/components/sections/CTABanner";
import { getBlogPosts } from "@/lib/blog";
import AIQuerySection from "@/components/ai/AIQuerySection";

// =============================================================================
// Insights Page — Premium knowledge hub with categories, featured articles,
// and topic pillars for Unovia.in
// =============================================================================

export const metadata: Metadata = {
  title: "Insights — Expert Financial Knowledge",
  description:
    "Expert perspectives on taxation, investments, wealth creation, business finance, and economic trends to help you navigate an evolving financial landscape with confidence.",
  keywords: [
    "financial insights india",
    "tax planning tips",
    "investment strategy",
    "wealth management articles",
    "business finance advisory",
    "economic trends india",
    "retirement planning",
    "capital gains tax india",
  ],
};

/* ── Category Colors & Accents ───────────────────────────────────────────── */

const categoryColors: Record<string, string> = {
  "Tax Planning": "bg-emerald-50 text-emerald-700",
  "GST Advisory": "bg-amber-50 text-amber-700",
  "Wealth Management": "bg-blue-50 text-blue-700",
  "Business Strategy": "bg-violet-50 text-violet-700",
  "Investment & Wealth": "bg-blue-50 text-blue-700",
  "Economy & Markets": "bg-rose-50 text-rose-700",
  "Business Finance": "bg-violet-50 text-violet-700",
};

const cardAccents = [
  "bg-gradient-to-r from-blue-500 to-indigo-600",
  "bg-gradient-to-r from-emerald-500 to-teal-600",
  "bg-gradient-to-r from-amber-500 to-orange-600",
  "bg-gradient-to-r from-violet-500 to-purple-600",
  "bg-gradient-to-r from-rose-500 to-pink-600",
  "bg-gradient-to-r from-cyan-500 to-blue-600",
];

/* ── Content Category Pillars ────────────────────────────────────────────── */

const CONTENT_CATEGORIES = [
  {
    icon: FileText,
    title: "Income Tax & Compliance",
    color: "from-emerald-500 to-teal-600",
    topics: [
      "Tax-saving strategies beyond Section 80C",
      "Capital gains taxation explained",
      "Common ITR filing mistakes and how to avoid them",
      "Tax planning for salaried professionals and business owners",
      "NRI taxation and compliance updates",
      "GST insights and regulatory developments",
    ],
  },
  {
    icon: TrendingUp,
    title: "Investment & Wealth Management",
    color: "from-blue-500 to-indigo-600",
    topics: [
      "Goal-based investing strategies",
      "Asset allocation for different life stages",
      "Mutual funds vs direct equity investing",
      "Building long-term wealth through disciplined investing",
      "Retirement planning and financial independence",
      "Portfolio review and rebalancing strategies",
    ],
  },
  {
    icon: BarChart2,
    title: "Economy & Markets",
    color: "from-rose-500 to-pink-600",
    topics: [
      "RBI policy updates and their impact on investors",
      "Inflation, interest rates, and personal finance",
      "Indian economic outlook and market trends",
      "Global events affecting Indian investors",
      "Understanding business cycles and investment opportunities",
      "Key economic indicators every investor should track",
    ],
  },
  {
    icon: Briefcase,
    title: "Business Finance & Advisory",
    color: "from-violet-500 to-purple-600",
    topics: [
      "Cash flow management for growing businesses",
      "Budgeting and financial forecasting",
      "Tax-efficient business structures",
      "Financial planning for startups and SMEs",
      "Business compliance and governance best practices",
      "CFO insights for entrepreneurs",
    ],
  },
];

/* ── Component ───────────────────────────────────────────────────────────── */

export default function InsightsPage() {
  // Sort posts by date descending
  const sortedPosts = [...getBlogPosts()].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const featuredPost = sortedPosts[0];
  const remainingPosts = sortedPosts.slice(1);

  return (
    <>
      {/* ── Hero ────────────────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-50/60 via-white to-white" />
        <div className="absolute inset-0 bg-mesh-light" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold-100/30 rounded-full -translate-y-1/3 translate-x-1/4 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-navy-100/20 rounded-full translate-y-1/3 -translate-x-1/4 blur-3xl" />

        <div className="relative container-tight px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-gold-600 mb-4">
              Insights & Knowledge
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy-800 leading-tight tracking-tight mb-6">
              Insights That Empower{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-500 to-gold-600">
                Better Financial Decisions
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-500 leading-relaxed max-w-2xl mx-auto">
              Expert perspectives on taxation, investments, wealth creation,
              business finance, and economic trends to help you navigate an
              evolving financial landscape with confidence.
            </p>
          </div>
        </div>
      </section>

      {/* ── AI Query Section ──────────────────────────────────────────────── */}
      <AIQuerySection />

      {/* ── Featured Article ─────────────────────────────────────────────── */}
      <section className="section-padding bg-white pt-0" id="featured-insight">
        <div className="container-tight">
          <Link
            href={`/insights/${featuredPost.slug}`}
            className="group relative grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 md:p-10 bg-navy-800 rounded-2xl overflow-hidden hover:shadow-navy-lg transition-all duration-500"
          >
            {/* Decorative */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-gold-500/5 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-navy-600/30 rounded-full translate-y-1/2 -translate-x-1/4 blur-3xl" />
            <div className="absolute inset-0 bg-mesh opacity-30" />

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-5">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-gold-500/20 text-gold-400 text-xs font-semibold rounded-full">
                  <Lightbulb className="w-3 h-3" />
                  Featured
                </span>
                <span className="inline-flex items-center gap-1 px-3 py-1 bg-white/10 text-gray-300 text-xs font-semibold rounded-full">
                  <Tag className="w-3 h-3" />
                  {featuredPost.category}
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-snug group-hover:text-gold-200 transition-colors duration-300">
                {featuredPost.title}
              </h2>
              <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-6">
                {featuredPost.excerpt}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 text-xs text-gray-500">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {featuredPost.readTime}
                  </span>
                  <span>
                    {new Date(featuredPost.date).toLocaleDateString("en-IN", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </span>
                </div>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-gold-400 group-hover:text-gold-300 transition-colors">
                  Read Article
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </div>

            {/* Right side — Stats/highlights */}
            <div className="relative z-10 flex flex-col justify-center gap-4">
              {[
                {
                  icon: BookOpen,
                  label: "Actionable Insights",
                  desc: "Practical strategies you can implement immediately",
                },
                {
                  icon: FileText,
                  label: "CA-Verified Content",
                  desc: "Reviewed by qualified Chartered Accountants",
                },
                {
                  icon: TrendingUp,
                  label: "Data-Driven Analysis",
                  desc: "Backed by research, regulations, and market data",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 p-4 bg-white/5 border border-white/10 rounded-xl"
                >
                  <div className="w-9 h-9 rounded-lg bg-gold-500/20 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-4 h-4 text-gold-400" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">
                      {item.label}
                    </p>
                    <p className="text-xs text-gray-400">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </Link>
        </div>
      </section>

      {/* ── Content Categories ───────────────────────────────────────────── */}
      <section
        className="section-padding bg-gray-50/50"
        id="content-categories"
      >
        <div className="container-tight">
          <SectionHeading
            eyebrow="What We Cover"
            title="Knowledge Across Every Financial Dimension"
            subtitle="Deep, practical insights organized by the topics that matter most to your financial well-being."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {CONTENT_CATEGORIES.map((cat, i) => (
              <div
                key={i}
                className="group bg-white border border-gray-100/80 rounded-2xl overflow-hidden hover:shadow-xl hover:border-gold-200/60 transition-all duration-300"
              >
                <div
                  className={`h-1.5 bg-gradient-to-r ${cat.color}`}
                />
                <div className="p-7">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-lg bg-navy-50 flex items-center justify-center group-hover:bg-navy-800 transition-colors duration-300">
                      <cat.icon className="w-5 h-5 text-navy-700 group-hover:text-gold-400 transition-colors duration-300" />
                    </div>
                    <h3 className="text-lg font-bold text-navy-800">
                      {cat.title}
                    </h3>
                  </div>
                  <ul className="space-y-2.5">
                    {cat.topics.map((topic, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-2 text-sm text-gray-500"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-gold-500 flex-shrink-0 mt-1.5" />
                        {topic}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── All Articles Grid ────────────────────────────────────────────── */}
      <section className="section-padding bg-white" id="all-insights">
        <div className="container-tight">
          <SectionHeading
            eyebrow="All Articles"
            title="Explore Our Latest Thinking"
            subtitle="Actionable insights across taxation, investments, wealth creation, and business strategy — written by experts, for you."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {remainingPosts.map((post, index) => (
              <Link
                key={post.slug}
                href={`/insights/${post.slug}`}
                id={post.slug}
                className="group flex flex-col bg-white border border-gray-100/80 rounded-2xl overflow-hidden hover:shadow-xl hover:border-gold-200/60 transition-all duration-300 hover:-translate-y-1"
              >
                {/* Color accent bar */}
                <div
                  className={`h-1.5 ${cardAccents[index % cardAccents.length]}`}
                />

                <div className="flex flex-col flex-1 p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`inline-flex items-center gap-1 px-3 py-1 text-xs font-semibold rounded-full ${
                        categoryColors[post.category] ??
                        "bg-gray-100 text-gray-600"
                      }`}
                    >
                      <Tag className="w-3 h-3" />
                      {post.category}
                    </span>
                    <div className="flex items-center gap-1 text-xs text-gray-400">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <h2 className="text-lg font-bold text-navy-800 mb-3 group-hover:text-navy-700 transition-colors leading-snug">
                    {post.title}
                  </h2>

                  <p className="text-sm text-gray-500 leading-relaxed mb-6 flex-1">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-50">
                    <span className="text-xs text-gray-400">
                      {new Date(post.date).toLocaleDateString("en-IN", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </span>
                    <span className="inline-flex items-center gap-1 text-sm font-semibold text-navy-700 group-hover:text-gold-600 transition-colors">
                      Read Article
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <CTABanner
        heading="Have Questions About Your Finances?"
        subtext="Our experts regularly publish insights on the topics that matter most. For personalized advice tailored to your specific situation, reach out to our team."
        primaryLabel="Schedule a Free Consultation"
        primaryHref="/contact"
      />
    </>
  );
}
