import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        sand: "#f6efe1",
        saffron: "#d28b2f",
        sunset: "#e7b15c",
        navy: "#16314f",
        sky: "#dceaf4",
        leaf: "#57724f",
        rose: "#f5dfd6",
      },
      boxShadow: {
        glow: "0 20px 50px rgba(22, 49, 79, 0.12)",
      },
      backgroundImage: {
        halo:
          "radial-gradient(circle at top, rgba(231, 177, 92, 0.35), transparent 38%)",
      },
      fontFamily: {
        sans: [
          "var(--font-inter)",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};

export default config;
