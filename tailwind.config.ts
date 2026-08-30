import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: "#EBF0F7",
          100: "#C9D5E8",
          200: "#A3B7D6",
          300: "#7D99C4",
          400: "#5F82B6",
          500: "#416BA8",
          600: "#305390",
          700: "#1E3F78",
          800: "#0F2B5B",
          900: "#091C3D",
          950: "#040E1F",
        },
        gold: {
          50: "#FDF8EE",
          100: "#F7ECCE",
          200: "#F0DBA8",
          300: "#E5C77E",
          400: "#D9B566",
          500: "#C5A55A",
          600: "#A88B40",
          700: "#876F33",
          800: "#665427",
          900: "#46391A",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "-apple-system", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "fade-in-up": "fadeInUp 0.6s ease-out forwards",
        "slide-in-left": "slideInLeft 0.6s ease-out forwards",
        "slide-in-right": "slideInRight 0.6s ease-out forwards",
        "count-up": "countUp 2s ease-out forwards",
        "animate-in": "animateIn 0.6s ease-out forwards",
        "float": "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideInLeft: {
          "0%": { opacity: "0", transform: "translateX(-32px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(32px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        animateIn: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
      backgroundImage: {
        "mesh-navy": "radial-gradient(at 0% 0%, rgba(197, 165, 90, 0.15) 0px, transparent 50%), radial-gradient(at 100% 100%, rgba(15, 43, 91, 0.3) 0px, transparent 50%), radial-gradient(at 50% 50%, rgba(197, 165, 90, 0.05) 0px, transparent 50%)",
        "mesh-light": "radial-gradient(at 100% 0%, rgba(15, 43, 91, 0.03) 0px, transparent 50%), radial-gradient(at 0% 100%, rgba(197, 165, 90, 0.05) 0px, transparent 50%)",
      },
    },
  },
  plugins: [],
};

export default config;
