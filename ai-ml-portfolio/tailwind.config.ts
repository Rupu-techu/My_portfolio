import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg:              "#F5F0EB",
        surface:         "#FFFFFF",
        primary:         "#7C5C45",
        secondary:       "#A67C52",
        ink:             "#1E1A17",
        muted:           "#7A6B5D",
        border:          "#E2D6CC",
        accent:          "#F0E6DC",
        "accent-border": "#D4B8A5",
      },
      fontFamily: {
        serif: ["var(--font-dm-serif)", "Georgia", "serif"],
        sans:  ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        card: "14px",
        pill: "100px",
      },
      boxShadow: {
        card:        "0 2px 12px rgba(124,92,69,0.07), 0 1px 3px rgba(0,0,0,0.04)",
        "card-md":   "0 6px 24px rgba(124,92,69,0.10), 0 2px 6px rgba(0,0,0,0.04)",
        "card-hover":"0 16px 48px rgba(124,92,69,0.15), 0 4px 12px rgba(0,0,0,0.06)",
      },
      animation: {
        "pulse-dot": "pulseDot 2.5s ease-in-out infinite",
      },
      keyframes: {
        pulseDot: {
          "0%,100%": { opacity: "1", transform: "scale(1)" },
          "50%":     { opacity: "0.4", transform: "scale(0.85)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
