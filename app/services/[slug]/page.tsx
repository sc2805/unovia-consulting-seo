import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, TrendingUp, FileText, Shield, Briefcase, Stamp, PieChart, Clock } from "lucide-react";
import Button from "@/components/ui/Button";
import CTABanner from "@/components/sections/CTABanner";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import JsonLd, { serviceSchema } from "@/components/seo/JsonLd";
import { SERVICES } from "@/lib/constants";
import { getBlogPosts } from "@/lib/blog";
import { notFound } from "next/navigation";

// =============================================================================
// Service Detail Page — Dynamic route for each service
// =============================================================================

const iconMap = { TrendingUp, FileText, Shield, Briefcase, Stamp, PieChart };

// Category-to-service slug mapping for related insights
const CATEGORY_SERVICE_MAP: Record<string, string[]> = {
  "wealth-management": ["Investment & Wealth", "Wealth Management", "Economy & Markets"],
  "tax-consultancy": ["Tax Planning"],
  "gst-advisory": ["GST Advisory"],
  "business-consulting": ["Business Strategy"],
  "virtual-cfo": ["Business Strategy", "Economy & Markets"],
  "trademark-copyright": [],
};

export async function generateStaticParams() {
  return SERVICES.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: `${service.title} Services — Unovia Consulting Kolkata`,
    description: service.description,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) notFound();

  const Icon = iconMap[service.icon as keyof typeof iconMap];
  const serviceIndex = SERVICES.findIndex((s) => s.slug === slug);
  const nextService = SERVICES[(serviceIndex + 1) % SERVICES.length];

  // Get related blog posts based on category mapping
  const relatedCategories = CATEGORY_SERVICE_MAP[slug] || [];
  const relatedPosts = getBlogPosts()
    .filter((post) => relatedCategories.includes(post.category))
    .slice(0, 3);

  return (
    <>
      {/* JSON-LD Service Schema */}
      <JsonLd data={serviceSchema({ title: service.title, description: service.description, slug: service.slug })} />

      {/* Hero */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-50/50 to-white" />
        <div className="absolute inset-0 bg-mesh-light" />
        <div className="relative container-tight px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Services", href: "/services" },
              { label: service.title, href: `/services/${slug}` },
            ]}
          />

          <div className="flex flex-col md:flex-row md:items-start gap-6">
            <div
              className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center flex-shrink-0 shadow-lg`}
            >
              <Icon className="w-8 h-8 text-white" strokeWidth={1.5} />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy-800 leading-tight tracking-tight mb-4">
                {service.title}
              </h1>
              <p className="text-lg text-gray-500 leading-relaxed max-w-2xl">
                {service.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Offerings */}
      <section className="section-padding bg-white pt-0">
        <div className="container-tight">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* What We Offer */}
            <div className="lg:col-span-3">
              <h2 className="text-2xl font-bold text-navy-800 mb-8">What We Offer</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.offerings.map((offering, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-4 bg-gray-50/80 border border-gray-100/80 rounded-xl hover:bg-navy-50 hover:border-gold-200/60 transition-all duration-300"
                  >
                    <CheckCircle2 className="w-5 h-5 text-gold-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700 font-medium">{offering}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar CTA */}
            <div className="lg:col-span-2">
              <div className="p-8 bg-navy-800 rounded-2xl text-white sticky top-28">
                <h3 className="text-lg font-bold mb-3">
                  Need help with {service.title.toLowerCase()}?
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-6">
                  Schedule a free 30-minute consultation to discuss your specific requirements
                  and how our team can help.
                </p>
                <Button
                  href="/contact"
                  variant="secondary"
                  size="md"
                  className="w-full justify-center"
                >
                  Book a Consultation
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-gray-50/50">
        <div className="container-tight">
          <h2 className="text-2xl font-bold text-navy-800 mb-12 text-center">
            Our Process
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.process.map((step, index) => (
              <div key={index} className="relative">
                <div className="p-6 bg-white border border-gray-100/80 rounded-2xl hover:shadow-xl hover:border-gold-200/60 transition-all duration-300 h-full">
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-navy-800 text-white text-sm font-bold mb-4">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-lg font-bold text-navy-800 mb-2">{step.step}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
                </div>
                {/* Connector line */}
                {index < service.process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 border-t-2 border-dashed border-gray-200" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Calculator Promo (Only on Wealth Management) */}
      {slug === "wealth-management" && (
        <section className="py-12 bg-white">
          <div className="container-tight">
            <div className="bg-gradient-to-br from-navy-800 to-navy-900 rounded-2xl p-8 md:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
              <div className="max-w-xl">
                <h3 className="text-2xl font-bold mb-4">Plan Your Financial Future</h3>
                <p className="text-gray-300 leading-relaxed mb-0">
                  See the power of compounding in action. Use our SIP & Lumpsum Calculator to estimate the future value of your investments and build a robust wealth creation strategy.
                </p>
              </div>
              <Button
                href="/calculators/sip-lumpsum"
                variant="primary"
                size="md"
                className="bg-gold-500 hover:bg-gold-600 text-navy-900 w-full md:w-auto justify-center flex-shrink-0 shadow-gold"
              >
                Try the Calculator
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </section>
      )}

      {/* Related Insights */}
      {relatedPosts.length > 0 && (
        <section className="section-padding bg-white">
          <div className="container-tight">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-navy-800">Related Insights</h2>
              <Link
                href="/insights"
                className="text-sm font-semibold text-navy-700 hover:text-gold-600 transition-colors inline-flex items-center gap-1"
              >
                All Articles
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/insights/${post.slug}`}
                  className="group block p-6 bg-gray-50 border border-gray-100 rounded-2xl hover:shadow-lg hover:border-gold-200 transition-all duration-300 hover:-translate-y-0.5"
                >
                  <span className="inline-block text-xs font-bold uppercase tracking-wider text-gold-600 mb-3">
                    {post.category}
                  </span>
                  <h3 className="text-base font-bold text-navy-800 mb-2 group-hover:text-navy-700 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed mb-3 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <span className="flex items-center gap-1.5 text-xs text-gray-400">
                    <Clock className="w-3.5 h-3.5" />
                    {post.readTime}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Next Service */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white border-t border-gray-100">
        <div className="container-tight">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-400">Explore More Services</span>
            <Link
              href={`/services/${nextService.slug}`}
              className="inline-flex items-center gap-2 text-sm font-semibold text-navy-700 hover:text-gold-600 transition-colors group"
            >
              {nextService.title}
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
