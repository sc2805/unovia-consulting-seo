import type { Metadata } from "next";
import SectionHeading from "@/components/ui/SectionHeading";
import DailyBriefList from "@/components/sections/DailyBriefList";
import { getNewsData } from "@/lib/daily-news-service";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Daily Market Brief",
  description: "Your daily dose of financial and business news, curated by Unovia Consulting. Stay updated with the latest trends from Indian markets.",
};

export default function DailyBriefPage() {
  const { lastUpdated, articles } = getNewsData();

  return (
    <main className="min-h-screen pt-32 pb-20">
      <div className="container-tight px-4">
        <SectionHeading
          eyebrow="Daily Briefing"
          title="Market News & Insights"
          subtitle="A curated feed of the most critical financial and market updates to keep you informed."
        />

        <DailyBriefList initialArticles={articles} initialLastUpdated={lastUpdated} />
      </div>
    </main>
  );
}
