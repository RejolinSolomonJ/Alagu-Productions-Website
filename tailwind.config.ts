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
        background: "#050608",
        foreground: "#EDEDED",
        cinema: {
          950: "#050608",
          900: "#090B0F",
          850: "#0F1218",
          800: "#161B24",
          750: "#1E2532",
          700: "#273042",
          600: "#3B475E",
          500: "#5D6D8A",
          400: "#8B9BB4",
          300: "#B8C4D6",
          200: "#E2E7EF",
          100: "#F3F5F9",
        },
        gold: {
          DEFAULT: "#C89D3C",
          light: "#E4BA5D",
          dark: "#9E7824",
          50: "#FAF7EE",
          100: "#F3ECD7",
          200: "#E7D8AF",
          300: "#DBC286",
          400: "#D0AF5C",
          500: "#C89D3C",
          600: "#A8812C",
          700: "#7F601E",
          800: "#553F12",
          900: "#2B1E07",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Cinzel", "Playfair Display", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Inter", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
      },
      boxShadow: {
        "gold-subtle": "0 1px 20px -2px rgba(200, 157, 60, 0.15)",
        "card-clean": "0 4px 20px -2px rgba(0, 0, 0, 0.5)",
      },
    },
  },
  plugins: [],
};

export default config;
