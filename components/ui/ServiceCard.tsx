import Link from "next/link";
import { TrendingUp, FileText, Shield, Briefcase, Stamp, PieChart, ArrowRight } from "lucide-react";

// =============================================================================
// ServiceCard — Interactive card linking to individual service pages
// =============================================================================

const iconMap = {
  TrendingUp,
  FileText,
  Shield,
  Briefcase,
  Stamp,
  PieChart,
} as const;

interface ServiceCardProps {
  slug: string;
  title: string;
  shortDescription: string;
  icon: keyof typeof iconMap;
  color: string;
}

export default function ServiceCard({
  slug,
  title,
  shortDescription,
  icon,
  color,
}: ServiceCardProps) {
  const Icon = iconMap[icon];

  return (
    <Link
      href={`/services/${slug}`}
      className="group block"
      id={`service-card-${slug}`}
    >
      <div className="relative h-full p-7 md:p-8 bg-white border border-gray-100 rounded-2xl transition-all duration-500 hover:shadow-2xl hover:shadow-navy-800/8 hover:-translate-y-1 hover:border-gold-200 overflow-hidden">
        {/* Gradient accent on hover */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-[0.04] transition-opacity duration-500`}
        />

        {/* Icon */}
        <div
          className={`relative w-14 h-14 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-lg`}
        >
          <Icon className="w-7 h-7 text-white" strokeWidth={1.5} />
        </div>

        {/* Content */}
        <h3 className="relative text-xl font-bold text-navy-800 mb-3 group-hover:text-navy-700 transition-colors">
          {title}
        </h3>
        <p className="relative text-gray-500 text-sm leading-relaxed mb-6">
          {shortDescription}
        </p>

        {/* Arrow link */}
        <div className="relative flex items-center gap-2 text-sm font-semibold text-navy-700 group-hover:text-gold-600 transition-colors">
          <span>Learn More</span>
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
        </div>
      </div>
    </Link>
  );
}
