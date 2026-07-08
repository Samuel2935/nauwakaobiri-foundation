import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      colors: {
        // Brand — deep forest green as primary
        brand: {
          50:  "#ecfdf5",
          100: "#d1fae5",
          200: "#a7f3d0",
          300: "#6ee7b7",
          400: "#34d399",
          500: "#10b981",
          600: "#059669",
          700: "#047857",
          800: "#065f46",
          900: "#064e3b",
          950: "#022c22",
        },
      },
      typography: {
        DEFAULT: {
          css: {
            fontFamily: "var(--font-body)",
            h1: { fontFamily: "var(--font-display)", fontWeight: "900" },
            h2: { fontFamily: "var(--font-display)", fontWeight: "900" },
            h3: { fontFamily: "var(--font-display)", fontWeight: "700" },
          },
        },
      },
    },
  },
  plugins: [],
};

export default config;
