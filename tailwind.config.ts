import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#08090C",
        foreground: "#EDEDED",
        cinema: {
          950: "#08090C",
          900: "#0E1015",
          850: "#14171E",
          800: "#1C202A",
          750: "#252B38",
          700: "#323A4B",
          600: "#444E64",
          500: "#5F6C87",
          400: "#8590A6",
          300: "#B0B9CA",
          200: "#D6DCE6",
          100: "#F1F4F9",
        },
        gold: {
          DEFAULT: "#D4AF37",
          light: "#E8CB6A",
          dark: "#B28F22",
          champagne: "#DFC087",
          50: "#FAF7EE",
          100: "#F5EED8",
          200: "#EBDDB2",
          300: "#DFC087",
          400: "#D4AF37",
          500: "#C5A028",
          600: "#A6841B",
          700: "#7F6311",
          800: "#554109",
          900: "#2E2203",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Plus Jakarta Sans", "Inter", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
        serif: ["var(--font-serif)", "Playfair Display", "Georgia", "serif"],
        display: ["Plus Jakarta Sans", "Inter", "sans-serif"],
      },
      boxShadow: {
        "gold-subtle": "0 4px 20px -2px rgba(212, 175, 55, 0.2)",
        "gold-glow": "0 0 30px rgba(212, 175, 55, 0.25)",
        "card-clean": "0 8px 30px rgba(0, 0, 0, 0.45)",
      },
    },
  },
  plugins: [],
};

export default config;
