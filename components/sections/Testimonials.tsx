"use client";

// =============================================================================
// Testimonials — Premium client testimonials with star ratings, service tags,
// trust banner, and CTA. Supports desktop grid + mobile carousel.
// =============================================================================

import { useState } from "react";
import {
  Quote,
  ChevronLeft,
  ChevronRight,
  Star,
  ArrowRight,
  Users,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { TESTIMONIALS } from "@/lib/constants";

/* ── Star Rating ─────────────────────────────────────────────────────────── */

function StarRating({ count = 5 }: { count?: number }) {
  return (
    <div className="flex gap-0.5 mb-4">
      {Array.from({ length: count }).map((_, i) => (
        <Star
          key={i}
          className="w-4 h-4 text-gold-500 fill-gold-500"
        />
      ))}
    </div>
  );
}

/* ── Service Tag ─────────────────────────────────────────────────────────── */

function ServiceTags({ services }: { services: readonly string[] }) {
  return (
    <div className="flex flex-wrap gap-1.5 mt-4">
      {services.map((service) => (
        <span
          key={service}
          className="px-2.5 py-0.5 bg-navy-50 text-navy-600 text-[10px] font-semibold tracking-wide uppercase rounded-full"
        >
          {service}
        </span>
      ))}
    </div>
  );
}

/* ── Testimonial Card ────────────────────────────────────────────────────── */

function TestimonialCard({
  testimonial,
  featured = false,
}: {
  testimonial: (typeof TESTIMONIALS)[number];
  featured?: boolean;
}) {
  return (
    <div
      className={`relative flex flex-col h-full p-7 md:p-8 rounded-2xl border transition-all duration-300 group ${
        featured
          ? "bg-navy-800 border-navy-700 text-white hover:shadow-2xl hover:shadow-navy-900/30"
          : "bg-white border-gray-100 hover:border-gold-200 hover:shadow-xl hover:shadow-navy-800/5"
      }`}
    >
      {/* Quote icon */}
      <Quote
        className={`w-8 h-8 mb-3 transition-colors duration-300 ${
          featured
            ? "text-gold-500/30 group-hover:text-gold-500/50"
            : "text-gold-200 group-hover:text-gold-400"
        }`}
      />

      {/* Star rating */}
      <StarRating count={testimonial.rating} />

      {/* Quote text */}
      <blockquote
        className={`text-sm leading-relaxed flex-1 mb-6 ${
          featured ? "text-gray-300" : "text-gray-600"
        }`}
      >
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>

      {/* Author */}
      <div className="flex items-center gap-3 pt-4 border-t border-dashed border-gray-200/20">
        {/* Avatar */}
        <div
          className={`w-11 h-11 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 ${
            featured
              ? "bg-gold-500/20 text-gold-400"
              : "bg-gradient-to-br from-navy-700 to-navy-800 text-white"
          }`}
        >
          {testimonial.name
            .replace("The ", "")
            .split(" ")
            .map((n) => n[0])
            .join("")}
        </div>
        <div className="min-w-0">
          <div
            className={`text-sm font-semibold truncate ${
              featured ? "text-white" : "text-navy-800"
            }`}
          >
            {testimonial.name}
          </div>
          <div
            className={`text-xs truncate ${
              featured ? "text-gray-400" : "text-gray-500"
            }`}
          >
            {testimonial.title}, {testimonial.company}
          </div>
        </div>
      </div>

      {/* Service tags */}
      {!featured && <ServiceTags services={testimonial.services} />}
      {featured && (
        <div className="flex flex-wrap gap-1.5 mt-4">
          {testimonial.services.map((service) => (
            <span
              key={service}
              className="px-2.5 py-0.5 bg-white/10 text-gold-300 text-[10px] font-semibold tracking-wide uppercase rounded-full"
            >
              {service}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

/* ── Main Component ──────────────────────────────────────────────────────── */

export default function Testimonials() {
  const [active, setActive] = useState(0);

  const next = () => setActive((prev) => (prev + 1) % TESTIMONIALS.length);
  const prev = () =>
    setActive((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  // Split testimonials: first 2 featured (dark), rest regular
  const featured = TESTIMONIALS.slice(0, 2);
  const remaining = TESTIMONIALS.slice(2);

  return (
    <>
      <section className="section-padding bg-mesh-light relative" id="testimonials-section">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 bg-grid opacity-40" />

        <div className="container-tight relative">
          <SectionHeading
            eyebrow="Client Testimonials"
            title="Real Results. Real Relationships."
            subtitle="Hear directly from the individuals, families, and businesses who trust Unovia to guide their financial journey."
          />

          {/* ── Desktop Layout ──────────────────────────────────────────── */}
          <div className="hidden lg:block">
            {/* Row 1: Featured testimonials (2-col, dark) */}
            <div className="grid grid-cols-2 gap-6 mb-6">
              {featured.map((testimonial, index) => (
                <TestimonialCard
                  key={index}
                  testimonial={testimonial}
                  featured={true}
                />
              ))}
            </div>

            {/* Row 2+: Regular testimonials (3-col grid) */}
            <div className="grid grid-cols-3 gap-6">
              {remaining.map((testimonial, index) => (
                <TestimonialCard key={index + 2} testimonial={testimonial} />
              ))}
            </div>
          </div>

          {/* ── Tablet Layout (2-col grid) ──────────────────────────────── */}
          <div className="hidden md:grid lg:hidden grid-cols-2 gap-6">
            {TESTIMONIALS.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                testimonial={testimonial}
                featured={index < 2}
              />
            ))}
          </div>

          {/* ── Mobile Carousel ─────────────────────────────────────────── */}
          <div className="md:hidden">
            <div className="mb-6">
              <TestimonialCard
                testimonial={TESTIMONIALS[active]}
                featured={active < 2}
              />
            </div>

            {/* Carousel Controls */}
            <div className="flex items-center justify-center gap-4">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:border-navy-800 hover:text-navy-800 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <div className="flex gap-1.5">
                {TESTIMONIALS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === active
                        ? "bg-navy-800 w-6"
                        : "bg-gray-300 w-2 hover:bg-gray-400"
                    }`}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={next}
                className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:border-navy-800 hover:text-navy-800 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── Trust Banner + CTA ─────────────────────────────────────────── */}
      <section className="relative overflow-hidden" id="testimonials-cta">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-navy-800 via-navy-900 to-navy-950" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/5 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-navy-600/20 rounded-full translate-y-1/2 -translate-x-1/4 blur-3xl" />

        {/* Gold accent line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/50 to-transparent" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 text-center">
          {/* Trust icon */}
          <div className="w-14 h-14 rounded-xl bg-gold-500/20 flex items-center justify-center mx-auto mb-6">
            <Users className="w-7 h-7 text-gold-400" />
          </div>

          {/* Trust statement */}
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight mb-4">
            Trusted by Indian Families, Professionals,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-500">
              Entrepreneurs, and Business Owners.
            </span>
          </h3>

          {/* Subtext */}
          <p className="text-base md:text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto mb-8">
            Partner with Unovia to build wealth, optimize taxes, and achieve
            your financial goals with confidence.
          </p>

          {/* CTA Button */}
          <Button
            href="/contact"
            variant="secondary"
            size="lg"
            id="testimonials-cta-btn"
          >
            Schedule a Free Consultation
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </section>
    </>
  );
}
