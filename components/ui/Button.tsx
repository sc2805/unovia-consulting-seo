import Link from "next/link";

// =============================================================================
// Button — Reusable CTA button with multiple variants
// =============================================================================

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
  id?: string;
}

const variants = {
  primary:
    "bg-navy-800 text-white hover:bg-navy-700 shadow-lg shadow-navy-800/20 hover:shadow-navy-800/30 hover:shadow-xl",
  secondary:
    "bg-gold-500 text-navy-900 hover:bg-gold-400 shadow-lg shadow-gold-500/20 hover:shadow-gold-500/30 hover:shadow-xl",
  outline:
    "border-2 border-navy-800 text-navy-800 hover:bg-navy-800 hover:text-white hover:shadow-lg hover:shadow-navy-800/20",
  ghost:
    "text-navy-700 hover:bg-navy-50 hover:text-navy-800",
};

const sizes = {
  sm: "px-5 py-2.5 text-sm",
  md: "px-7 py-3.5 text-sm",
  lg: "px-9 py-4.5 text-base",
};

export default function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
  type = "button",
  disabled = false,
  id,
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none focus-ring";

  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes} id={id}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
      id={id}
    >
      {children}
    </button>
  );
}
