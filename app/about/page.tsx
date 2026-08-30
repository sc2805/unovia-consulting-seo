import type { Metadata } from "next";
import {
  Shield,
  Target,
  Eye,
  BarChart2,
  FileText,
  Mail,
  TrendingUp,
  Users,
  Heart,
  Briefcase,
  Scale,
  Award,
  ArrowRight,
  Building2,
  Globe,
  Landmark,
  Sparkles,
  Handshake,
  LineChart,
  ClipboardCheck,
  BadgeCheck,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import CTABanner from "@/components/sections/CTABanner";
import Button from "@/components/ui/Button";

// =============================================================================
// About Page — Premium CA-led Wealth Management & Advisory Firm
// =============================================================================

export const metadata: Metadata = {
  title: "About Us — Your Trusted Financial Partner",
  description:
    "Unovia is a Chartered Accountant-led Wealth Management, Tax Advisory, and Business Consulting firm based in Kolkata. We help individuals and businesses build wealth, optimize taxes, and achieve long-term financial goals.",
  keywords: [
    "about unovia",
    "chartered accountant kolkata",
    "wealth management india",
    "tax advisory firm",
    "business consulting kolkata",
    "financial planning india",
    "CA firm india",
    "NRI tax advisory",
  ],
};

/* ── Data ────────────────────────────────────────────────────────────────── */

const EXPERTISE_AREAS = [
  {
    icon: LineChart,
    title: "Personal Financial Planning",
    description:
      "Goal-based financial roadmaps that align your income, savings, and investments with your life milestones — from buying your first home to planning for a secure retirement.",
    color: "from-blue-500 to-indigo-600",
  },
  {
    icon: TrendingUp,
    title: "Investment Strategy & Wealth Management",
    description:
      "Disciplined, research-backed portfolio strategies designed to grow, protect, and compound your wealth across market cycles — tailored to your unique risk profile.",
    color: "from-emerald-500 to-teal-600",
  },
  {
    icon: FileText,
    title: "Tax Planning & Compliance",
    description:
      "Proactive tax strategies that go beyond filing returns — we identify savings opportunities, ensure full compliance, and help you retain more of what you earn.",
    color: "from-amber-500 to-orange-600",
  },
  {
    icon: Briefcase,
    title: "Business Consulting",
    description:
      "Strategic guidance for startups, SMEs, and growing enterprises — from business structuring and market entry to operational efficiency and growth acceleration.",
    color: "from-violet-500 to-purple-600",
  },
  {
    icon: ClipboardCheck,
    title: "Financial Reporting & CFO Advisory",
    description:
      "Outsourced CFO services, MIS reporting, budgeting, and financial analysis that give you the clarity and control to make better business decisions.",
    color: "from-rose-500 to-pink-600",
  },
  {
    icon: Scale,
    title: "Regulatory Compliance",
    description:
      "End-to-end compliance management across GST, Company Law, and other regulatory frameworks — so you can focus on growth while we handle the complexity.",
    color: "from-cyan-500 to-blue-600",
  },
];

const CLIENT_SEGMENTS = [
  {
    icon: Users,
    label: "High-Net-Worth Individuals",
    detail: "Comprehensive wealth strategies for those who've built significant assets",
  },
  {
    icon: Briefcase,
    label: "Salaried Professionals",
    detail: "Tax-efficient planning and wealth-building for career-focused individuals",
  },
  {
    icon: Globe,
    label: "NRIs & Global Indians",
    detail: "Cross-border tax advisory, repatriation planning, and India investment support",
  },
  {
    icon: Sparkles,
    label: "Entrepreneurs & Startups",
    detail: "Financial structuring, fundraising advisory, and compliance from day one",
  },
  {
    icon: Building2,
    label: "Growing Businesses",
    detail: "Scalable financial systems, CFO advisory, and strategic business consulting",
  },
  {
    icon: Landmark,
    label: "Family Offices",
    detail: "Multi-generational wealth preservation, estate planning, and legacy advisory",
  },
];

const CORE_VALUES = [
  {
    icon: Shield,
    title: "Integrity & Transparency",
    description:
      "Every recommendation is grounded in honesty. We disclose, explain, and align — never sell. Your trust is the foundation of our relationship.",
  },
  {
    icon: Heart,
    title: "Client-First Philosophy",
    description:
      "We measure our success by the outcomes we create for you. Your goals drive our strategy, not product commissions or short-term incentives.",
  },
  {
    icon: Handshake,
    title: "Long-Term Partnerships",
    description:
      "We don't transact — we partner. Our relationships are built to last decades, growing alongside your evolving financial journey.",
  },
  {
    icon: Award,
    title: "Professional Excellence",
    description:
      "Led by qualified Chartered Accountants with deep domain expertise, we bring institutional-grade rigour to every engagement.",
  },
];

/* ── Component ───────────────────────────────────────────────────────────── */

export default function AboutPage() {
  return (
    <>
      {/* ── Hero ────────────────────────────────────────────────────────── */}
      <section
        id="about-hero"
        className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden"
      >
        {/* Background layers */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy-50/60 via-white to-white" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold-100/40 rounded-full -translate-y-1/3 translate-x-1/4 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-navy-100/30 rounded-full translate-y-1/3 -translate-x-1/4 blur-3xl" />

        <div className="relative container-tight px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-gold-600 mb-4">
              About Unovia
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy-800 leading-tight tracking-tight mb-6">
              Your Trusted Partner in{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-500 to-gold-600">
                Building Wealth
              </span>{" "}
              &{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-500 to-gold-600">
                Securing Futures
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-500 leading-relaxed max-w-2xl mb-8">
              A Chartered Accountant-led financial advisory firm helping
              individuals and businesses make smarter financial decisions —
              with clarity, confidence, and complete peace of mind.
            </p>
            {/* Pillars */}
            <div className="flex flex-wrap gap-3">
              {[
                "CA-Led Expertise",
                "Client-Centric",
                "Transparent",
                "Data-Driven",
              ].map((pill) => (
                <span
                  key={pill}
                  className="px-4 py-1.5 bg-navy-800 text-gold-400 text-xs font-bold tracking-[0.12em] uppercase rounded-full"
                >
                  {pill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Who We Are — Narrative ───────────────────────────────────────── */}
      <section id="who-we-are" className="section-padding bg-white">
        <div className="container-tight">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <SectionHeading
                eyebrow="Who We Are"
                title="Financial Advisory, Reimagined for the Modern World"
                align="left"
              />
              <div className="space-y-5 text-gray-500 leading-relaxed text-[15px] md:text-base">
                <p>
                  <strong className="text-navy-800">Unovia</strong> is a
                  Kolkata-based financial advisory firm founded by Chartered
                  Accountants who believe that sound financial guidance
                  shouldn&apos;t be a privilege — it should be a right for every
                  ambitious individual and business.
                </p>
                <p>
                  We combine the analytical rigour of chartered accountancy with
                  the strategic depth of modern wealth management to deliver
                  personalized, data-driven financial solutions. From tax
                  optimization and investment strategy to business structuring
                  and regulatory compliance — we serve as your complete
                  financial partner.
                </p>
                <p>
                  What sets us apart is our approach: we don&apos;t sell
                  products. We solve problems. Every strategy we build is
                  tailored to your unique circumstances, designed to optimize
                  your tax position, grow your wealth sustainably, and give you
                  the confidence to make bold financial decisions.
                </p>
              </div>
            </div>

            {/* Key differentiators — Visual card stack */}
            <div className="space-y-4">
              {[
                {
                  num: "01",
                  title: "Personalized, Not Packaged",
                  desc: "Every financial plan is built from scratch around your goals, risk appetite, and life stage — never off-the-shelf.",
                  accent: "bg-gradient-to-r from-blue-500 to-indigo-600",
                },
                {
                  num: "02",
                  title: "Data-Driven & Tax-Efficient",
                  desc: "We leverage deep tax expertise and market data to build strategies that are both growth-oriented and tax-optimized.",
                  accent: "bg-gradient-to-r from-gold-500 to-gold-600",
                },
                {
                  num: "03",
                  title: "End-to-End Financial Support",
                  desc: "From personal wealth to business growth — one trusted team that understands your complete financial picture.",
                  accent: "bg-gradient-to-r from-emerald-500 to-teal-600",
                },
              ].map((item) => (
                <div
                  key={item.num}
                  className="group relative bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-xl hover:border-gold-200 transition-all duration-300 hover:-translate-y-0.5 overflow-hidden"
                >
                  <div
                    className={`absolute top-0 left-0 w-1 h-full ${item.accent} rounded-l-2xl`}
                  />
                  <div className="pl-4 flex items-start gap-4">
                    <span className="text-3xl font-black text-navy-100 select-none flex-shrink-0 group-hover:text-gold-200 transition-colors duration-300">
                      {item.num}
                    </span>
                    <div>
                      <h3 className="font-bold text-navy-800 mb-1">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-500 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Mission & Vision ────────────────────────────────────────────── */}
      <section id="mission-vision" className="section-padding bg-gray-50/50">
        <div className="container-tight">
          <SectionHeading
            eyebrow="Our Purpose"
            title="Guided by Purpose, Driven by Impact"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {/* Mission */}
            <div className="relative p-8 md:p-10 bg-navy-800 rounded-2xl text-white overflow-hidden group hover:shadow-2xl transition-shadow duration-500">
              <div className="absolute top-0 right-0 w-48 h-48 bg-gold-500/5 rounded-full -translate-y-1/2 translate-x-1/3 blur-2xl group-hover:bg-gold-500/10 transition-colors duration-500" />
              <div className="relative">
                <div className="w-14 h-14 rounded-xl bg-gold-500/20 flex items-center justify-center mb-6">
                  <Target className="w-7 h-7 text-gold-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-gray-300 leading-relaxed text-[15px]">
                  To empower individuals and businesses with personalized,
                  transparent, and tax-efficient financial strategies that build
                  lasting wealth, optimize every rupee, and transform financial
                  complexity into confident clarity. We exist to be the trusted
                  advisor our clients turn to for every financial decision —
                  today, tomorrow, and for generations to come.
                </p>
              </div>
            </div>

            {/* Vision */}
            <div className="relative p-8 md:p-10 bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden group hover:shadow-xl transition-shadow duration-500">
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-navy-50/50 rounded-full translate-y-1/3 -translate-x-1/4 blur-2xl group-hover:bg-navy-100/50 transition-colors duration-500" />
              <div className="relative">
                <div className="w-14 h-14 rounded-xl bg-navy-50 flex items-center justify-center mb-6">
                  <Eye className="w-7 h-7 text-navy-700" />
                </div>
                <h3 className="text-2xl font-bold text-navy-800 mb-4">
                  Our Vision
                </h3>
                <p className="text-gray-500 leading-relaxed text-[15px]">
                  To become India&apos;s most trusted financial advisory firm —
                  where every client, regardless of the size of their portfolio,
                  receives institutional-quality guidance rooted in integrity,
                  expertise, and genuine care. We envision a world where every
                  Indian has access to the financial clarity needed to build the
                  life they aspire to.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Our Expertise ────────────────────────────────────────────────── */}
      <section id="our-expertise" className="section-padding bg-white">
        <div className="container-tight">
          <SectionHeading
            eyebrow="Our Expertise"
            title="Comprehensive Financial Solutions Under One Roof"
            subtitle="Six interlocking practice areas designed to address every dimension of your financial life — with the depth of specialist knowledge and the coherence of a unified strategy."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {EXPERTISE_AREAS.map((area, i) => (
              <div
                key={i}
                className="group bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-xl hover:border-gold-200 transition-all duration-300 hover:-translate-y-1"
              >
                <div
                  className={`h-1.5 bg-gradient-to-r ${area.color}`}
                />
                <div className="p-7">
                  <div className="w-12 h-12 rounded-xl bg-navy-50 flex items-center justify-center mb-5 group-hover:bg-navy-800 transition-colors duration-300">
                    <area.icon className="w-6 h-6 text-navy-700 group-hover:text-gold-400 transition-colors duration-300" />
                  </div>
                  <h3 className="text-lg font-bold text-navy-800 mb-3">
                    {area.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {area.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Who We Serve ─────────────────────────────────────────────────── */}
      <section id="who-we-serve" className="section-padding bg-gray-50/50">
        <div className="container-tight">
          <SectionHeading
            eyebrow="Who We Serve"
            title="Built for Ambitious Individuals & Forward-Thinking Businesses"
            subtitle="Whether you're planning your first investment or scaling a multi-crore enterprise, Unovia delivers the expertise and attention your goals deserve."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {CLIENT_SEGMENTS.map((segment, i) => (
              <div
                key={i}
                className="group flex items-start gap-4 p-5 bg-white border border-gray-100 rounded-xl hover:border-gold-200 hover:shadow-md transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-navy-50 flex items-center justify-center flex-shrink-0 group-hover:bg-navy-800 transition-colors duration-300">
                  <segment.icon className="w-5 h-5 text-navy-600 group-hover:text-gold-400 transition-colors duration-300" />
                </div>
                <div>
                  <h4 className="font-bold text-navy-800 text-sm mb-1">
                    {segment.label}
                  </h4>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    {segment.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Core Values ──────────────────────────────────────────────────── */}
      <section id="core-values" className="section-padding bg-navy-800">
        <div className="container-tight">
          <SectionHeading
            eyebrow="Our Values"
            title="Principles That Define Every Interaction"
            subtitle="These aren't just words on a wall. They are the commitments we live by in every client engagement, every recommendation, and every financial decision we help you make."
            dark={true}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CORE_VALUES.map((value, i) => (
              <div
                key={i}
                className="relative p-7 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-gold-500/20 flex items-center justify-center mb-5 group-hover:bg-gold-500/30 transition-colors duration-300">
                  <value.icon className="w-6 h-6 text-gold-400" />
                </div>
                <h3 className="text-base font-bold text-white mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── The 3-Step Process ──────────────────────────────────────────── */}
      <section id="our-process" className="section-padding bg-white">
        <div className="container-tight">
          <SectionHeading
            eyebrow="Getting Started"
            title="Your Journey to Financial Clarity Begins Here"
            subtitle="Three purposeful steps from first conversation to a fully personalized financial strategy — with Unovia by your side every step of the way."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                step: "01",
                title: "Discover",
                desc: "We begin with a confidential, no-obligation conversation to understand your financial position, aspirations, and concerns. No jargon, no pressure — just genuine listening.",
                icon: Mail,
              },
              {
                step: "02",
                title: "Strategize",
                desc: "Our team analyses your complete financial picture — income, investments, taxes, and risks — to design a comprehensive, tax-efficient strategy aligned with your goals.",
                icon: BarChart2,
              },
              {
                step: "03",
                title: "Execute & Grow",
                desc: "We implement your personalized plan with precision, provide ongoing monitoring, and adapt your strategy as your life evolves. Unovia becomes your long-term financial partner.",
                icon: TrendingUp,
              },
            ].map((step, i) => (
              <div
                key={i}
                className="relative group"
              >
                {/* Connector line (hidden on last card) */}
                {i < 2 && (
                  <div className="hidden md:block absolute top-12 right-0 translate-x-1/2 w-full h-px border-t-2 border-dashed border-gold-200 z-0" />
                )}
                <div className="relative p-8 bg-gray-50 border border-gray-100 rounded-2xl hover:shadow-lg hover:border-gold-200 transition-all duration-300 hover:-translate-y-1 z-10">
                  <span className="absolute top-6 right-6 text-5xl font-black text-navy-50 select-none group-hover:text-gold-100 transition-colors duration-300">
                    {step.step}
                  </span>
                  <div className="w-12 h-12 rounded-xl bg-navy-800 flex items-center justify-center mb-6">
                    <step.icon className="w-6 h-6 text-gold-400" />
                  </div>
                  <h3 className="text-lg font-bold text-navy-800 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Closing Statement ────────────────────────────────────────────── */}
      <section id="closing-statement" className="section-padding bg-gray-50/50">
        <div className="container-tight">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-16 h-16 rounded-2xl bg-navy-800 flex items-center justify-center mx-auto mb-8">
              <BadgeCheck className="w-8 h-8 text-gold-400" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-800 leading-tight tracking-tight mb-6">
              More Than Advisors.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-500 to-gold-600">
                Your Financial Partners.
              </span>
            </h2>
            <div className="space-y-4 text-gray-500 leading-relaxed text-[15px] md:text-base">
              <p>
                At Unovia, we understand that behind every financial decision is
                a dream — a child&apos;s education, a comfortable retirement, a
                business that changes the world. We take that responsibility
                seriously.
              </p>
              <p>
                Whether you&apos;re an entrepreneur charting your next phase of
                growth, a professional looking to build wealth systematically, or
                an NRI navigating complex cross-border taxation — Unovia brings
                the expertise, the integrity, and the genuine care that your
                financial journey deserves.
              </p>
              <p className="text-navy-800 font-semibold text-base md:text-lg">
                Because when your finances are in order, everything else falls
                into place. Let Unovia be the partner that makes it happen.
              </p>
            </div>
            <div className="mt-8">
              <Button href="/contact" variant="primary" size="lg" id="about-cta-consult">
                Start Your Journey
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA Banner ───────────────────────────────────────────────────── */}
      <CTABanner
        heading="Ready to Take Control of Your Financial Future?"
        subtext="Schedule a confidential, no-obligation consultation with our Chartered Accountant-led team. Let's build a financial strategy that works as hard as you do."
      />
    </>
  );
}
