import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        celestial: {
          950: "#06020c",
          900: "#0c0418",
          850: "#130725",
          800: "#1b0a34",
          700: "#270f4a",
          600: "#381768",
        },
        gold: {
          50: "#fdfbf4",
          100: "#faf4e2",
          200: "#f4e6bb",
          300: "#ecd28d",
          400: "#e5b869",
          500: "#d49e42",
          600: "#b97f2e",
          700: "#925f24",
          800: "#774c22",
          900: "#633f20",
        },
        wine: {
          950: "#240308",
          900: "#3d040e",
          800: "#5c0817",
          700: "#7c0d21",
          600: "#a1132d",
          500: "#c71b39",
          400: "#e23755",
        },
        sacred: {
          saffron: "#ff7700",
          amber: "#f59e0b",
          vermilion: "#e63946",
          parchment: "#fbf8ef",
          cream: "#fff8ee",
        },
        astrotalk: {
          yellow: "#F1E135",
          yellowHover: "#E8D420",
          yellowLight: "#FEFBE8",
          yellowBright: "#FFEC4D",
          amber: "#F59E0B",
          dark: "#161209",
          darker: "#0d0903",
          border: "rgba(241, 225, 53, 0.25)",
        },
      },
      fontFamily: {
        sans: ["var(--font-poppins)", "Poppins", "var(--font-manrope)", "Manrope", "system-ui", "sans-serif"],
        serif: ["var(--font-dm-serif)", "DM Serif Display", "var(--font-cinzel)", "Cinzel", "Georgia", "serif"],
        display: ["var(--font-dm-serif)", "DM Serif Display", "var(--font-cinzel)", "Cinzel", "serif"],
        cinzel: ["var(--font-cinzel)", "Cinzel", "serif"],
      },
      animation: {
        "celestial-spin": "spin 60s linear infinite",
        "reverse-spin": "reverseSpin 45s linear infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 6s ease-in-out infinite",
        "shimmer": "shimmer 2.5s linear infinite",
      },
      keyframes: {
        reverseSpin: {
          from: { transform: "rotate(360deg)" },
          to: { transform: "rotate(0deg)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      boxShadow: {
        "celestial": "0 20px 60px -15px rgba(229, 184, 105, 0.15)",
        "gold-glow": "0 0 35px -5px rgba(229, 184, 105, 0.35)",
        "wine-glow": "0 10px 40px -10px rgba(124, 13, 33, 0.45)",
      },
    },
  },
  plugins: [],
};

export default config;
