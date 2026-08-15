import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: "#F5F7FA",
        sand: "#EAF0F6",
        card: "#FFFFFF",
        ink: "#1C2733",
        ink2: "#54677A",
        muted: "#92A2B2",
        accent: "#2F5C82",
        "accent-dark": "#1D3D57",
        clay: "#B08968",
        border: "#DFE6ED",
      },
      fontFamily: {
        serif: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-body)", "Helvetica", "Arial", "sans-serif"],
      },
      maxWidth: {
        content: "1240px",
      },
      boxShadow: {
        soft: "0 2px 10px rgba(39, 39, 35, 0.04)",
        card: "0 8px 30px rgba(39, 39, 35, 0.06)",
        lift: "0 14px 40px rgba(39, 39, 35, 0.10)",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards",
        "fade-in": "fade-in 0.6s ease forwards",
      },
    },
  },
  plugins: [],
};

export default config;
