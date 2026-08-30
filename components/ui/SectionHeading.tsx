// =============================================================================
// SectionHeading — Consistent section titles with eyebrow + heading + subtitle
// =============================================================================

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  dark?: boolean;
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  dark = false,
}: SectionHeadingProps) {
  const alignment = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`max-w-3xl mb-14 md:mb-20 ${alignment}`}>
      {eyebrow && (
        <span
          className={`inline-block text-xs font-bold tracking-[0.2em] uppercase mb-4 px-4 py-1.5 rounded-full ${
            dark
              ? "text-gold-400 bg-gold-500/10"
              : "text-gold-600 bg-gold-50"
          }`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`text-4xl md:text-5xl lg:text-[3.25rem] font-bold leading-[1.1] tracking-tight mb-5 ${
          dark ? "text-white" : "text-navy-800"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-lg md:text-xl leading-relaxed ${
            dark ? "text-gray-300" : "text-gray-500"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
