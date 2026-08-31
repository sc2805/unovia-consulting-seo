import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ArrowRight,
  Clock,
  Calendar,
  User,
  Tag,
  ShieldCheck,
  FileCheck,
  List,
} from "lucide-react";
import { getPostBySlug, getAllSlugs } from "@/lib/blog";
import CTABanner from "@/components/sections/CTABanner";
import BlogContent from "@/components/blog/BlogContent";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import JsonLd, { articleSchema } from "@/components/seo/JsonLd";

// Category → service page mapping for contextual internal links
const CATEGORY_TO_SERVICE: Record<string, { label: string; href: string; description: string }> = {
  "Tax Planning": {
    label: "Tax Consultancy & Optimization",
    href: "/services/tax-consultancy",
    description: "Get personalized tax planning, capital gains calculation, and ITR filing assistance from qualified CAs.",
  },
  "GST Advisory": {
    label: "GST Advisory & Compliance",
    href: "/services/gst-advisory",
    description: "Ensure seamless Rule 37A reconciliation, e-invoicing compliance, and annual return filings.",
  },
  "Wealth Management": {
    label: "Private Wealth Management",
    href: "/services/wealth-management",
    description: "Optimize asset allocation across SIPs, Private Credit, REITs, and PMS platform investments.",
  },
  "Investment & Wealth": {
    label: "Wealth Management",
    href: "/services/wealth-management",
    description: "Build long-term compound wealth with goal-based asset allocation and rebalancing strategies.",
  },
  "Economy & Markets": {
    label: "Wealth Management",
    href: "/services/wealth-management",
    description: "Navigate market cycles with institutional financial leadership and portfolio protection.",
  },
  "Business Strategy": {
    label: "Business Consulting",
    href: "/services/business-consulting",
    description: "Scale operations and optimize cash flows with expert strategic advisory.",
  },
  "Business Finance": {
    label: "Virtual CFO Services",
    href: "/services/virtual-cfo",
    description: "Access institutional financial strategy, budgeting, and investor readiness on a fractional basis.",
  },
};

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = getPostBySlug(params.slug);
  if (!post) return { title: "Article Not Found" };
  return {
    title: `${post.title} | Unovia Insights`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
    },
  };
}

// Helper to extract H2 headings for Table of Contents
function extractHeadings(content: string) {
  const matches = content.match(/^##\s+(.+)$/gm);
  if (!matches) return [];
  return matches.map((h) => {
    const title = h.replace(/^##\s+/, "").trim();
    const id = title
      .toLowerCase()
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-");
    return { title, id };
  });
}

export default function ArticlePage({
  params,
}: {
  params: { slug: string };
}) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const relatedService = CATEGORY_TO_SERVICE[post.category];
  const headings = extractHeadings(post.content);

  return (
    <>
      <JsonLd
        data={articleSchema({
          title: post.title,
          excerpt: post.excerpt,
          slug: post.slug,
          date: post.date,
          author: post.author,
        })}
      />

      {/* ── Article Hero Header ────────────────────────────────────────── */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden bg-navy-900 text-white">
        <div className="absolute inset-0 bg-mesh opacity-20" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold-500/10 rounded-full -translate-y-1/3 translate-x-1/4 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-navy-600/30 rounded-full translate-y-1/3 -translate-x-1/4 blur-3xl" />

        <div className="relative container-tight px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          {/* Breadcrumbs */}
          <div className="mb-6 opacity-90">
            <Breadcrumbs
              items={[
                { label: "Home", href: "/" },
                { label: "Insights", href: "/insights" },
                { label: post.title.substring(0, 40) + "…", href: `/insights/${post.slug}` },
              ]}
            />
          </div>

          {/* Category & Verified Badges */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span
              className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-bold rounded-full border bg-white/10 text-gold-400 border-gold-400/30 backdrop-blur-sm`}
            >
              <Tag className="w-3.5 h-3.5" />
              {post.category}
            </span>
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-bold text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 rounded-full backdrop-blur-sm">
              <ShieldCheck className="w-3.5 h-3.5" />
              {post.reviewer || "CA Advisory Council Verified"}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight mb-8">
            {post.title}
          </h1>

          {/* Subtitle / Excerpt */}
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-10 max-w-3xl font-light">
            {post.excerpt}
          </p>

          {/* Meta row */}
          <div className="flex flex-wrap items-center gap-6 text-xs md:text-sm text-gray-400 pt-6 border-t border-white/10">
            <span className="flex items-center gap-2 text-white font-medium">
              <User className="w-4 h-4 text-gold-400" />
              {post.author}
            </span>
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-gold-400" />
              {new Date(post.date).toLocaleDateString("en-IN", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-gold-400" />
              {post.readTime}
            </span>
          </div>
        </div>
      </section>

      {/* ── Main Content & Layout ──────────────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="container-tight px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Article Main Body */}
            <main className="flex-1 min-w-0">
              {/* Mobile Table of Contents */}
              {headings.length > 0 && (
                <div className="lg:hidden mb-10 p-6 bg-slate-50 border border-slate-200/80 rounded-2xl">
                  <div className="flex items-center gap-2 text-navy-900 font-bold mb-3 text-sm">
                    <List className="w-4 h-4 text-gold-600" />
                    Table of Contents
                  </div>
                  <ul className="space-y-2 text-sm text-slate-600">
                    {headings.map((h, i) => (
                      <li key={i}>
                        <a
                          href={`#${h.id}`}
                          className="hover:text-navy-900 hover:underline transition-colors block py-0.5"
                        >
                          {h.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Render Article Content */}
              <BlogContent content={post.content} />

              {/* Regulatory Sources Box */}
              {post.sources && post.sources.length > 0 && (
                <div className="mt-16 p-6 bg-slate-50 border border-slate-200/80 rounded-2xl">
                  <div className="flex items-center gap-2 text-navy-900 font-bold mb-3 text-sm uppercase tracking-wider">
                    <FileCheck className="w-4 h-4 text-gold-600" />
                    Regulatory References & Sources
                  </div>
                  <ul className="space-y-2 text-xs md:text-sm text-slate-600">
                    {post.sources.map((src, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-navy-800 flex-shrink-0" />
                        {src}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </main>

            {/* Sticky Sidebar */}
            <aside className="hidden lg:block w-72 flex-shrink-0">
              <div className="sticky top-28 space-y-8">
                {/* Table of Contents Widget */}
                {headings.length > 0 && (
                  <div className="bg-slate-50/80 rounded-2xl p-6 border border-slate-200/80">
                    <p className="text-xs font-bold tracking-[0.15em] uppercase text-navy-900 mb-4 flex items-center gap-2">
                      <List className="w-4 h-4 text-gold-600" />
                      In This Article
                    </p>
                    <nav className="space-y-2 text-xs text-slate-600 leading-snug">
                      {headings.map((h, i) => (
                        <a
                          key={i}
                          href={`#${h.id}`}
                          className="block py-1 hover:text-navy-900 hover:font-bold transition-all border-l-2 border-transparent hover:border-gold-500 pl-2 -ml-2"
                        >
                          {h.title}
                        </a>
                      ))}
                    </nav>
                  </div>
                )}

                {/* Verified Advisory Banner */}
                <div className="bg-navy-900 text-white rounded-2xl p-6 border border-navy-800 shadow-xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/10 rounded-full blur-2xl" />
                  <div className="flex items-center gap-3 mb-3">
                    <ShieldCheck className="w-6 h-6 text-gold-400" />
                    <p className="text-sm font-bold text-white">Unovia CA Desk</p>
                  </div>
                  <p className="text-xs text-gray-300 leading-relaxed mb-5">
                    Need customized advice for your business or personal portfolio? Schedule a 1-on-1 consultation with our Chartered Accountants.
                  </p>
                  <Link
                    href="/contact"
                    className="block text-center text-xs font-bold text-navy-950 bg-gradient-to-r from-gold-400 to-gold-500 hover:from-gold-300 hover:to-gold-400 transition-all rounded-xl px-4 py-3 shadow-md"
                  >
                    Schedule Consultation
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ── Contextual Service CTA Section ─────────────────────────────── */}
      {relatedService && (
        <section className="py-16 bg-slate-50 border-t border-b border-slate-200/60">
          <div className="container-tight px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
            <div className="p-8 md:p-10 bg-white border border-gray-200/80 rounded-3xl shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-navy-800 to-gold-500" />
              <div className="pl-4">
                <span className="text-xs font-bold uppercase tracking-widest text-gold-600 mb-1 block">
                  Recommended Advisory Service
                </span>
                <h3 className="text-2xl font-bold text-navy-900 mb-2">
                  {relatedService.label}
                </h3>
                <p className="text-sm text-slate-600 max-w-xl leading-relaxed">
                  {relatedService.description}
                </p>
              </div>
              <Link
                href={relatedService.href}
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-navy-900 text-gold-400 font-bold text-sm rounded-xl hover:bg-navy-800 hover:text-white transition-all shadow-lg flex-shrink-0"
              >
                Explore Service
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* ── Global CTA Banner ──────────────────────────────────────────── */}
      <CTABanner
        heading="Have Questions About Your Tax or Wealth Plan?"
        subtext="Our team of Chartered Accountants and wealth advisors are ready to deliver institutional-grade guidance tailored to your specific situation."
      />
    </>
  );
}
