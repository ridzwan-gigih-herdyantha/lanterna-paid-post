import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx,js,jsx,mdx}"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: { "2xl": "1200px" },
    },
    extend: {
      colors: {
        ink: {
          950: "#0b0d12",
          900: "#111319",
          800: "#171a22",
          700: "#1f232d",
          600: "#2a2f3b",
          500: "#3a4150",
          400: "#5a6273",
          300: "#8a93a6",
          200: "#b7bdca",
          100: "#dfe3ec",
        },
        ember: {
          50: "#fff8ec",
          100: "#ffeec9",
          200: "#ffd98a",
          300: "#ffbd4e",
          400: "#ffa320",
          500: "#f58907",
          600: "#d96a03",
          700: "#b34e07",
          800: "#8f3e0c",
          900: "#75330f",
        },
      },
      fontFamily: {
        sans: ["ui-sans-serif", "system-ui", "-apple-system", "Segoe UI", "Roboto", "sans-serif"],
        display: ["ui-serif", "Georgia", "Cambria", "Times New Roman", "serif"],
      },
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        shimmer: "shimmer 2.4s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
