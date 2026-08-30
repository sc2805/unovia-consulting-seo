import type { Metadata } from "next";
import Link from "next/link";
import { Calculator, Target, Lightbulb, ArrowRight } from "lucide-react";
import InvestmentCalculator from "@/components/calculators/InvestmentCalculator";
import CTABanner from "@/components/sections/CTABanner";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

export const metadata: Metadata = {
  title: "SIP & Lumpsum Investment Calculator",
  description:
    "Calculate the future value of your SIP and Lumpsum investments. See the power of compounding with Unovia's financial tools.",
};

export default function CalculatorPage() {
  return (
    <>
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-gray-50/50">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-50/50 to-transparent" />
        <div className="absolute inset-0 bg-mesh-light" />

        <div className="relative container-tight px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Resources", href: "/insights" },
              { label: "SIP & Lumpsum Calculator", href: "/calculators/sip-lumpsum" },
            ]}
          />

          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-gold-50 text-gold-700 text-xs font-semibold rounded-full mb-6 uppercase tracking-wide">
              <Calculator className="w-3.5 h-3.5" />
              Financial Tools
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-navy-800 leading-tight mb-6">
              SIP & Lumpsum Calculator
            </h1>
            <p className="text-lg text-gray-500 leading-relaxed max-w-2xl mx-auto">
              Plan your financial future. Use our calculator to see how disciplined investing and the power of compounding can grow your wealth over time.
            </p>
          </div>

          <div className="mb-20">
            <InvestmentCalculator />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-2xl border border-gray-100/80 hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-navy-50 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-navy-700" />
              </div>
              <h3 className="text-xl font-bold text-navy-800 mb-3">Why SIP?</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">
                Systematic Investment Plans (SIP) help you build wealth by investing a fixed amount regularly. It averages out market volatility and instills financial discipline.
              </p>
              <Link href="/insights/wealth-creation-discipline-over-returns" className="text-sm font-semibold text-gold-600 hover:text-gold-700 flex items-center gap-1 group">
                Read about SIP Discipline <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-gray-100/80 hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-gold-50 rounded-xl flex items-center justify-center mb-6">
                <Lightbulb className="w-6 h-6 text-gold-600" />
              </div>
              <h3 className="text-xl font-bold text-navy-800 mb-3">Lumpsum Strategy</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">
                Lumpsum investments are ideal when you have surplus cash from a bonus or asset sale. Time in the market is more critical than timing the market for lumpsum.
              </p>
              <Link href="/insights/asset-allocation-foundation-investing" className="text-sm font-semibold text-gold-600 hover:text-gold-700 flex items-center gap-1 group">
                Learn Asset Allocation <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        heading="Ready to Start Your Investment Journey?"
        subtext="Our wealth management experts can help you design a customized portfolio based on your risk profile and financial goals."
        primaryLabel="Schedule a Free Consultation"
      />
    </>
  );
}
