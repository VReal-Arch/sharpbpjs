import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
        mono: [
          "JetBrains Mono",
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Consolas",
          "monospace",
        ],
      },
      colors: {
        base: {
          DEFAULT: "#0a0f0e",
          surface: "#0c1413",
          card: "#101816",
          raised: "#131c1a",
          border: "#1d2b28",
          hairline: "#16201e",
        },
        ink: {
          DEFAULT: "#e9f1ee",
          soft: "#a9bcb7",
          muted: "#6c8682",
          faint: "#3f5450",
        },
        teal: {
          glow: "#5eead4",
          DEFAULT: "#2dd4bf",
          deep: "#0f9c8c",
          soft: "rgba(45, 212, 191, 0.12)",
        },
        amber: {
          DEFAULT: "#fbbf24",
          soft: "rgba(251, 191, 36, 0.12)",
        },
        rose: {
          DEFAULT: "#f87171",
          deep: "#ef4444",
          soft: "rgba(248, 113, 113, 0.12)",
        },
        indigo: {
          DEFAULT: "#818cf8",
          soft: "rgba(129, 140, 248, 0.12)",
        },
      },
      borderRadius: {
        xl2: "1.1rem",
      },
      boxShadow: {
        card: "0 1px 0 0 rgba(255,255,255,0.02) inset, 0 8px 24px -12px rgba(0,0,0,0.6)",
        glow: "0 0 0 1px rgba(45,212,191,0.4), 0 0 24px -4px rgba(45,212,191,0.45)",
      },
      backgroundImage: {
        "grid-fade":
          "linear-gradient(to bottom, rgba(45,212,191,0.05), transparent 60%)",
      },
    },
  },
  plugins: [],
};

export default config;
