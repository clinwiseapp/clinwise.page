import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    container: { center: true, padding: "1.75rem", screens: { "2xl": "1200px" } },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--border))",
        ring: "hsl(var(--signal))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: { DEFAULT: "hsl(var(--card))", foreground: "hsl(var(--foreground))" },
        muted: { DEFAULT: "hsl(var(--muted))", foreground: "hsl(var(--muted-foreground))" },
        subtle: "hsl(var(--subtle))",
        primary: { DEFAULT: "hsl(var(--primary))", foreground: "hsl(var(--primary-foreground))" },
        signal: "hsl(var(--signal))",
        // fixed brand colors (same in both themes)
        brand: { DEFAULT: "#009B9E", bright: "oklch(0.72 0.12 195)" },
        ink: "#10171C",
        paper: "#F7F8F7",
        record: "#D24D42",
        danger: "#A43C2F",
      },
      borderRadius: { lg: "var(--radius)", md: "calc(var(--radius) - 2px)", sm: "calc(var(--radius) - 4px)" },
      fontFamily: {
        sans: ["var(--font-instrument)", "Helvetica", "sans-serif"],
        display: ["var(--font-bricolage)", "Helvetica", "sans-serif"],
        mono: ["var(--font-plex-mono)", "ui-monospace", "monospace"],
      },
      keyframes: {
        bar: { from: { transform: "scaleY(0.35)" }, to: { transform: "scaleY(1)" } },
        "pulse-dot": { "0%,100%": { opacity: "1" }, "50%": { opacity: "0.25" } },
        "accordion-down": { from: { height: "0" }, to: { height: "var(--radix-accordion-content-height)" } },
        "accordion-up": { from: { height: "var(--radix-accordion-content-height)" }, to: { height: "0" } },
      },
      animation: {
        "pulse-dot": "pulse-dot 1.4s ease-in-out infinite",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
