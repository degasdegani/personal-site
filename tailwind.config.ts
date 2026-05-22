import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      colors: {
        background: "#080808",
        surface: "#111111",
        "surface-2": "#161616",
        border: "#1f1f1f",
        muted: "#404040",
        subtle: "#777777",
        primary: "#e63232",
        "primary-dim": "rgba(230, 50, 50, 0.12)",
        foreground: "#f0f0f0",
        "foreground-dim": "#888888",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["ui-monospace", "monospace"],
      },
      fontSize: {
        "display-xl": [
          "clamp(3rem, 8vw, 7rem)",
          { lineHeight: "1.0", letterSpacing: "-0.04em" },
        ],
        "display-lg": [
          "clamp(2rem, 5vw, 4.5rem)",
          { lineHeight: "1.05", letterSpacing: "-0.03em" },
        ],
        "display-md": [
          "clamp(1.25rem, 3vw, 2rem)",
          { lineHeight: "1.15", letterSpacing: "-0.02em" },
        ],
        "body-lg": ["1.125rem", { lineHeight: "1.7" }],
        "body-md": ["1rem", { lineHeight: "1.65" }],
        label: ["0.75rem", { lineHeight: "1", letterSpacing: "0.1em" }],
      },
      animation: {
        "glow-pulse": "glowPulse 4s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        glowPulse: {
          "0%, 100%": { opacity: "0.3" },
          "50%": { opacity: "0.7" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
