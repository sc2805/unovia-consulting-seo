import { ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";

// =============================================================================
// CTABanner — Full-width CTA with gradient background
// =============================================================================

interface CTABannerProps {
  heading?: string;
  subtext?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export default function CTABanner({
  heading = "Ready to Secure Your Financial Future?",
  subtext = "Schedule a confidential consultation with our experts. No obligations — just clear, actionable insights tailored to your situation.",
  primaryLabel = "Book a Consultation",
  primaryHref = "/contact",
  secondaryLabel = "Call Us Now",
  secondaryHref = "tel:+919876543210",
}: CTABannerProps) {
  return (
    <section className="relative overflow-hidden" id="cta-banner">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-800 via-navy-900 to-navy-950" />

      {/* Decorative */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-gold-500/5 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-navy-600/30 rounded-full translate-y-1/2 -translate-x-1/4 blur-3xl" />

      {/* Gold accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold-500 to-transparent" />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-5">
          {heading}
        </h2>
        <p className="text-base md:text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto mb-10">
          {subtext}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button href={primaryHref} variant="secondary" size="lg" id="cta-primary">
            {primaryLabel}
            <ArrowRight className="w-5 h-5" />
          </Button>
          <Button
            href={secondaryHref}
            variant="ghost"
            size="lg"
            className="text-gray-300 hover:bg-white/5 hover:text-white"
            id="cta-secondary"
          >
            {secondaryLabel}
          </Button>
        </div>
      </div>
    </section>
  );
}
