import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, Clock, Calendar, User, Tag } from "lucide-react";
import { getPostBySlug, getAllSlugs } from "@/lib/blog";
import CTABanner from "@/components/sections/CTABanner";
import BlogContent from "@/components/blog/BlogContent";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import JsonLd, { articleSchema } from "@/components/seo/JsonLd";

// Category → service page mapping for contextual internal links
const CATEGORY_TO_SERVICE: Record<string, { label: string; href: string }> = {
  "Tax Planning": { label: "Tax Consultancy", href: "/services/tax-consultancy" },
  "GST Advisory": { label: "GST Advisory & Compliance", href: "/services/gst-advisory" },
  "Wealth Management": { label: "Wealth Management", href: "/services/wealth-management" },
  "Investment & Wealth": { label: "Wealth Management", href: "/services/wealth-management" },
  "Economy & Markets": { label: "Wealth Management", href: "/services/wealth-management" },
  "Business Strategy": { label: "Business Consulting", href: "/services/business-consulting" },
  "Business Finance": { label: "Virtual CFO Services", href: "/services/virtual-cfo" },
};

// =============================================================================
// Static params for all blog slugs
// =============================================================================

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

// =============================================================================
// Dynamic metadata per article
// =============================================================================

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = getPostBySlug(params.slug);
  if (!post) return { title: "Article Not Found" };
  return {
    title: post.title,
    description: post.excerpt,
  };
}

// =============================================================================
// Category color mapping
// =============================================================================

const categoryColors: Record<string, string> = {
  "Tax Planning": "bg-emerald-50 text-emerald-700 border-emerald-200",
  "GST Advisory": "bg-amber-50 text-amber-700 border-amber-200",
  "Wealth Management": "bg-blue-50 text-blue-700 border-blue-200",
  "Business Strategy": "bg-violet-50 text-violet-700 border-violet-200",
  "Investment & Wealth": "bg-blue-50 text-blue-700 border-blue-200",
  "Economy & Markets": "bg-rose-50 text-rose-700 border-rose-200",
  "Business Finance": "bg-violet-50 text-violet-700 border-violet-200",
};

const categoryAccent: Record<string, string> = {
  "Tax Planning": "from-emerald-500 to-teal-600",
  "GST Advisory": "from-amber-500 to-orange-600",
  "Wealth Management": "from-blue-500 to-indigo-600",
  "Business Strategy": "from-violet-500 to-purple-600",
  "Investment & Wealth": "from-blue-500 to-indigo-600",
  "Economy & Markets": "from-rose-500 to-pink-600",
  "Business Finance": "from-violet-500 to-purple-600",
};

// =============================================================================
// Article Page
// =============================================================================

export default function ArticlePage({
  params,
}: {
  params: { slug: string };
}) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const accentClass =
    categoryAccent[post.category] ?? "from-gold-500 to-gold-600";
  const relatedService = CATEGORY_TO_SERVICE[post.category];

  return (
    <>
      {/* Article JSON-LD */}
      <JsonLd data={articleSchema({ title: post.title, excerpt: post.excerpt, slug: post.slug, date: post.date, author: post.author })} />

      {/* ── Hero ────────────────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-12 md:pt-40 md:pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-50/50 to-white" />

        <div className="relative container-tight px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          {/* Breadcrumbs */}
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Insights", href: "/insights" },
              { label: post.title, href: `/insights/${post.slug}` },
            ]}
          />

          {/* Category badge */}
          <div className="mb-5">
            <span
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-full border ${
                categoryColors[post.category] ?? "bg-gray-100 text-gray-600 border-gray-200"
              }`}
            >
              <Tag className="w-3 h-3" />
              {post.category}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy-800 leading-tight tracking-tight mb-6">
            {post.title}
          </h1>

          {/* Meta row */}
          <div className="flex flex-wrap items-center gap-5 text-sm text-gray-500 mb-8">
            <span className="flex items-center gap-1.5">
              <User className="w-4 h-4" />
              {post.author}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              {post.readTime}
            </span>
          </div>

          {/* Gradient accent bar */}
          <div
            className={`h-1 w-24 rounded-full bg-gradient-to-r ${accentClass} mb-0`}
          />
        </div>
      </section>

      {/* ── Article Body ─────────────────────────────────────────────────── */}
      <section className="pb-20 bg-white">
        <div className="container-tight px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <div className="flex gap-12">
            {/* Main content */}
            <div className="flex-1 min-w-0">
              <BlogContent content={post.content} />
            </div>

            {/* Sticky sidebar */}
            <aside className="hidden lg:block w-64 flex-shrink-0">
              <div className="sticky top-28 space-y-6">
                <div className="bg-navy-50 rounded-2xl p-6 border border-navy-100">
                  <p className="text-xs font-bold tracking-[0.15em] uppercase text-navy-500 mb-3">
                    About this article
                  </p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>

                <div className="bg-gold-50 rounded-2xl p-6 border border-gold-100">
                  <p className="text-xs font-bold tracking-[0.15em] uppercase text-gold-700 mb-2">
                    Need Expert Advice?
                  </p>
                  <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                    Our specialists are ready to help with your specific situation.
                  </p>
                  <Link
                    href="/contact"
                    className="block text-center text-sm font-semibold text-white bg-navy-800 hover:bg-navy-700 transition-colors rounded-xl px-4 py-2.5"
                  >
                    Book a Consultation
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Contextual Service CTA */}
      {relatedService && (
        <section className="py-12 bg-gray-50/50">
          <div className="container-tight px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
            <div className="p-6 md:p-8 bg-white border border-gray-100 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <p className="text-sm text-gray-500 mb-1">Related Service</p>
                <p className="text-lg font-bold text-navy-800">Learn more about our {relatedService.label} services</p>
              </div>
              <Link
                href={relatedService.href}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-navy-800 text-white text-sm font-semibold rounded-lg hover:bg-navy-700 transition-colors flex-shrink-0"
              >
                Explore {relatedService.label}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      )}

      <CTABanner
        heading="Have Questions About Your Finances?"
        subtext="Our experts are ready to provide personalized guidance tailored to your unique situation."
      />
    </>
  );
}
