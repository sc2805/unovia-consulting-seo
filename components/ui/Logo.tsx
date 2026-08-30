"use client";

// =============================================================================
// Logo Component — Smart fallback: image if available, styled text otherwise
// =============================================================================
// To replace with your logo:
//   1. Drop your logo file into /public/logo.png (or .svg)
//   2. Set USE_IMAGE_LOGO = true below
//   3. That's it — zero other code changes needed.
// =============================================================================

import Image from "next/image";
import Link from "next/link";

const USE_IMAGE_LOGO = true; // Logo file is now available at /public/logo.png
const LOGO_PATH = "/logo.png"; // ← Update path if needed

interface LogoProps {
  variant?: "light" | "dark";
  className?: string;
}

export default function Logo({ variant = "dark", className = "" }: LogoProps) {
  const textColor = variant === "light" ? "text-white" : "text-navy-800";
  const accentColor = variant === "light" ? "text-gold-400" : "text-gold-600";

  return (
    <Link href="/" className={`flex items-center gap-2.5 group ${className}`} id="logo">
      {USE_IMAGE_LOGO ? (
        <Image
          src={LOGO_PATH}
          alt="Unovia Consulting"
          width={180}
          height={48}
          className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          priority
        />
      ) : (
        <span className={`text-xl sm:text-2xl font-bold tracking-tight ${textColor}`}>
          Unovia
          <span className={`${accentColor} transition-colors duration-300 group-hover:text-gold-500`}>
            {" "}Consulting
          </span>
        </span>
      )}
    </Link>
  );
}
