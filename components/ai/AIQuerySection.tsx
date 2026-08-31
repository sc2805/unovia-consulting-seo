"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Sparkles,
  Search,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  BookOpen,
  RefreshCw,
} from "lucide-react";
import { AIQueryResponse } from "@/app/api/ai-query/route";

const QUICK_PROMPTS = [
  "Capital Gains Tax on Property Sale",
  "New vs Old Tax Regime 2026",
  "GST Rule 37A ITC Reversal",
  "SIP vs Lumpsum Mutual Funds",
];

export default function AIQuerySection() {
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<AIQueryResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async (searchQuery: string) => {
    if (!searchQuery.trim() || isLoading) return;
    setIsLoading(true);
    setError(null);
    setQuery(searchQuery);

    try {
      const res = await fetch("/api/ai-query", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: searchQuery }),
      });

      if (!res.ok) throw new Error("Failed to process query");

      const data: AIQueryResponse = await res.json();
      setResult(data);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Search failed");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSearch(query);
  };

  return (
    <section className="py-12 bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950 text-white relative overflow-hidden my-12 rounded-3xl mx-4 sm:mx-6 lg:mx-8 border border-gold-400/20 shadow-2xl">
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-navy-600/30 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-gold-500/20 text-gold-400 text-xs font-bold uppercase tracking-widest rounded-full border border-gold-400/30 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Instant AI Advisory
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Have a Specific Financial or Tax Query?
          </h2>
          <p className="text-sm md:text-base text-gray-300 max-w-2xl mx-auto mt-2">
            Ask any question on Tax Slabs, Capital Gains, GST Rules, or Wealth Allocation to receive instant AI guidance.
          </p>
        </div>

        {/* Search Bar */}
        <form onSubmit={handleSubmit} className="relative max-w-2xl mx-auto mb-6">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type your query (e.g. Property tax Section 54, GST Rule 37A...)"
            className="w-full pl-12 pr-32 py-4 rounded-2xl bg-white text-navy-900 placeholder-gray-400 font-medium text-sm md:text-base shadow-2xl border-2 border-transparent focus:border-gold-400 focus:outline-none transition-all"
          />
          <Search className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
          <button
            type="submit"
            disabled={isLoading || !query.trim()}
            className="absolute right-2 top-2 bottom-2 px-5 bg-navy-900 hover:bg-navy-800 text-gold-400 hover:text-white font-bold text-xs md:text-sm rounded-xl transition-all disabled:opacity-50 flex items-center gap-2 border border-gold-400/30"
          >
            {isLoading ? (
              <>
                <RefreshCw className="w-4 h-4 animate-spin" />
                Analyzing...
              </>
            ) : (
              "Ask AI"
            )}
          </button>
        </form>

        {/* Quick Prompts */}
        {!result && (
          <div className="flex flex-wrap items-center justify-center gap-2 text-xs text-gray-400">
            <span className="font-semibold text-gray-300">Try asking:</span>
            {QUICK_PROMPTS.map((prompt, i) => (
              <button
                key={i}
                onClick={() => handleSearch(prompt)}
                className="px-3 py-1 bg-white/10 hover:bg-white/20 text-gray-200 hover:text-gold-300 rounded-lg transition-all"
              >
                {prompt}
              </button>
            ))}
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="mt-6 p-4 bg-rose-950/80 border border-rose-500/40 text-rose-200 text-xs rounded-xl text-center">
            ⚠️ {error}
          </div>
        )}

        {/* AI Result Card */}
        {result && (
          <div className="mt-8 bg-white text-slate-800 p-6 sm:p-8 rounded-3xl shadow-2xl space-y-6 text-left animate-fadeIn">
            {/* Title & Badge */}
            <div className="flex items-start justify-between gap-4 pb-4 border-b border-gray-100">
              <div>
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-gold-700 block mb-1">
                  AI Financial Analysis
                </span>
                <h3 className="text-xl md:text-2xl font-bold text-navy-900">
                  {result.title}
                </h3>
              </div>
              <span className="px-3 py-1 bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-bold rounded-full flex items-center gap-1 flex-shrink-0">
                <ShieldCheck className="w-3.5 h-3.5" />
                CA Verified
              </span>
            </div>

            {/* Answer */}
            <p className="text-sm md:text-base text-slate-700 leading-relaxed">
              {result.answer}
            </p>

            {/* Key Takeaways */}
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200/80">
              <p className="text-xs font-bold text-navy-900 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                Actionable Insights
              </p>
              <ul className="space-y-2.5 text-xs md:text-sm text-slate-700">
                {result.keyTakeaways.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold-600 flex-shrink-0 mt-2" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Applicable Sections */}
            {result.applicableSections && (
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <BookOpen className="w-3.5 h-3.5 text-navy-800" />
                <span>Statutory Reference: {result.applicableSections}</span>
              </div>
            )}

            {/* CTA */}
            <div className="pt-4 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-slate-500">
                Need personalized tax optimization or investment planning?
              </span>
              <Link
                href={result.recommendedService.href}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-navy-900 text-gold-400 hover:text-white font-bold text-xs md:text-sm rounded-xl transition-all shadow-lg w-full sm:w-auto"
              >
                {result.ctaText}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
