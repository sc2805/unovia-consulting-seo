"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Sparkles,
  X,
  Send,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  BookOpen,
  RefreshCw,
} from "lucide-react";
import { AIQueryResponse } from "@/app/api/ai-query/route";

const PRESET_QUERIES = [
  "Property Capital Gains Tax (Sec 54)",
  "New vs Old Tax Regime 2026-27",
  "GST Rule 37A ITC Reversal",
  "SIP vs Lumpsum Strategy",
  "NRI Tax & Sec 195 TDS",
];

export default function AIQueryModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<AIQueryResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async (userQuery: string) => {
    if (!userQuery.trim() || isLoading) return;
    setIsLoading(true);
    setError(null);
    setQuery(userQuery);

    try {
      const res = await fetch("/api/ai-query", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: userQuery }),
      });

      if (!res.ok) throw new Error("Failed to get AI advisory response");

      const data: AIQueryResponse = await res.json();
      setResult(data);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSearch(query);
  };

  return (
    <>
      {/* ── Floating AI Trigger Button (Bottom-Right) ────────────────── */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-24 z-40 flex items-center gap-2.5 px-4 py-3 bg-navy-900 text-gold-400 hover:text-white hover:bg-navy-800 rounded-full shadow-2xl border border-gold-400/40 hover:border-gold-300 transition-all duration-300 group hover:scale-105 active:scale-95"
        aria-label="Open AI Tax & Wealth Assistant"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-3 w-3 bg-gold-500" />
        </span>
        <Sparkles className="w-4 h-4 text-gold-400 group-hover:rotate-12 transition-transform" />
        <span className="text-xs font-bold uppercase tracking-wider hidden sm:inline">
          AI Tax & Wealth Advisor
        </span>
      </button>

      {/* ── Modal Backdrop & Dialog ─────────────────────────────────── */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/80 backdrop-blur-md animate-fadeIn">
          <div
            className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden flex flex-col max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="bg-navy-900 text-white p-6 sm:p-7 flex items-center justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
              <div className="flex items-center gap-3 z-10">
                <div className="w-10 h-10 rounded-2xl bg-gold-500/20 border border-gold-400/30 flex items-center justify-center text-gold-400">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white flex items-center gap-2">
                    Unovia AI Advisor
                    <span className="px-2 py-0.5 text-[10px] font-extrabold uppercase bg-gold-500 text-navy-950 rounded-md">
                      CA Verified
                    </span>
                  </h3>
                  <p className="text-xs text-gray-400">
                    Instant answers on Tax, GST, Capital Gains & Wealth Strategies
                  </p>
                </div>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white flex items-center justify-center transition-colors z-10"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable Content Area */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-1 text-slate-700">
              {/* Query Input Form */}
              <form onSubmit={handleSubmit} className="relative">
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Ask any question (e.g. Property tax Sec 54, GST Rule 37A...)"
                  className="w-full pl-5 pr-14 py-4 rounded-2xl border-2 border-gray-200 focus:border-navy-800 focus:ring-0 text-sm font-medium text-navy-900 placeholder-gray-400 transition-colors shadow-sm"
                />
                <button
                  type="submit"
                  disabled={isLoading || !query.trim()}
                  className="absolute right-2 top-2 bottom-2 px-4 bg-navy-900 hover:bg-navy-800 text-gold-400 hover:text-white disabled:opacity-40 rounded-xl flex items-center justify-center transition-all"
                >
                  {isLoading ? (
                    <RefreshCw className="w-4 h-4 animate-spin" />
                  ) : (
                    <Send className="w-4 h-4" />
                  )}
                </button>
              </form>

              {/* Preset Chips */}
              {!result && (
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">
                    Popular Queries:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {PRESET_QUERIES.map((preset, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleSearch(preset)}
                        className="px-3.5 py-2 bg-slate-100 hover:bg-navy-50 text-navy-800 hover:text-navy-900 border border-slate-200/80 hover:border-navy-200 rounded-xl text-xs font-semibold transition-all text-left"
                      >
                        {preset}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Error Message */}
              {error && (
                <div className="p-4 bg-rose-50 border border-rose-200 text-rose-800 text-xs rounded-xl font-medium">
                  ⚠️ {error}. Please try another question.
                </div>
              )}

              {/* AI Result View */}
              {result && (
                <div className="space-y-5 animate-fadeIn">
                  {/* Category Pill & Title */}
                  <div className="p-5 bg-navy-50/70 border border-navy-100 rounded-2xl">
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-gold-700 block mb-1">
                      AI Instant Advisory
                    </span>
                    <h4 className="text-xl font-bold text-navy-900 leading-snug">
                      {result.title}
                    </h4>
                  </div>

                  {/* Answer Text */}
                  <p className="text-sm md:text-base leading-relaxed text-slate-700 font-normal">
                    {result.answer}
                  </p>

                  {/* Key Takeaways */}
                  <div className="space-y-2 bg-slate-50 p-5 rounded-2xl border border-slate-200/60">
                    <p className="text-xs font-bold text-navy-900 uppercase tracking-wider flex items-center gap-1.5 mb-3">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      Key Takeaways & Actions
                    </p>
                    <ul className="space-y-2.5">
                      {result.keyTakeaways.map((point, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs md:text-sm text-slate-700">
                          <span className="w-1.5 h-1.5 rounded-full bg-gold-600 flex-shrink-0 mt-2" />
                          <span className="leading-relaxed">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Applicable Sections */}
                  {result.applicableSections && (
                    <div className="flex items-center gap-2 text-xs text-slate-500 font-medium px-2">
                      <BookOpen className="w-3.5 h-3.5 text-navy-800" />
                      <span>Reference: {result.applicableSections}</span>
                    </div>
                  )}

                  {/* CTA Footer Card */}
                  <div className="pt-4 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-2 text-xs text-navy-800 font-semibold">
                      <ShieldCheck className="w-4 h-4 text-emerald-600" />
                      Reviewed by Unovia CAs
                    </div>

                    <Link
                      href={result.recommendedService.href}
                      onClick={() => setIsOpen(false)}
                      className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-navy-900 text-gold-400 hover:text-white font-bold text-xs rounded-xl shadow-lg transition-all w-full sm:w-auto"
                    >
                      {result.ctaText}
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
