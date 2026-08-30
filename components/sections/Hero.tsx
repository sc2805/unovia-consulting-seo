import { ArrowRight, ChevronDown } from "lucide-react";
import Button from "@/components/ui/Button";

// =============================================================================
// Hero — Full-width gradient hero with headline, subtitle, and dual CTAs
// =============================================================================

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden" id="hero">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-950" />

      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Abstract circles */}
        <div className="absolute -top-24 -right-24 w-[500px] h-[500px] bg-gold-500/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-navy-600/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-gold-500/3 rounded-full blur-3xl" />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/5 border border-white/10 rounded-full mb-8 animate-fade-in" style={{ marginTop: "2mm" }}>
            <div className="w-1.5 h-1.5 bg-gold-500 rounded-full animate-pulse" />
            <span className="text-gold-400 text-xs font-semibold tracking-wide uppercase">
              Powered by Expert CA<span style={{ fontSize: "0.7em" }}>s</span> &amp; MBA<span style={{ fontSize: "0.7em" }}>s</span>
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.08] tracking-tight mb-6 animate-fade-in-up">
            Strategic Financial
            <br />
            Advisory for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-500">
              Sustainable Growth
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-xl mb-10 animate-fade-in-up stagger-2 opacity-0">
            Expert wealth management, tax planning, GST advisory, and business
            consulting — tailored to your unique goals.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up stagger-3 opacity-0">
            <Button href="/contact" variant="secondary" size="lg" id="hero-cta-primary">
              Book a Consultation
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button href="/services" variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10 hover:text-white" id="hero-cta-secondary">
              Explore Our Services
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
        <ChevronDown className="w-6 h-6 text-white/30" />
      </div>
    </section>
  );
}
