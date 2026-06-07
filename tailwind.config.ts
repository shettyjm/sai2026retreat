import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        sand: "#ecfae5",
        saffron: "#b0db9c",
        sunset: "#cae8bd",
        navy: "#1d3a23",
        sky: "#ddf6d2",
        leaf: "#cae8bd",
        rose: "#ecfae5",
        bark: "#14291a",
      },
      boxShadow: {
        glow: "0 20px 50px rgba(22, 49, 79, 0.12)",
      },
      keyframes: {
        rise: {
          from: { opacity: "0", transform: "translateY(6px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        rise: "rise 0.3s ease both",
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
