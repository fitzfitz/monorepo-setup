const colors = require("tailwindcss/colors");

module.exports = {
  content: [`src/**/*.{js,ts,jsx,tsx}`],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        success: {
          DEFAULT: "#10b981",
          focus: "#059669",
        },
        warning: {
          DEFAULT: "#ff9800",
          focus: "#e68200",
        },
        info: {
          DEFAULT: "#0ea5e9",
          focus: "#0284c7",
        },
        secondary: {
          DEFAULT: "#f000b9",
          focus: "#bd0090",
          light: "#ff57d8",
        },
        error: {
          DEFAULT: "#d7001b",
          focus: "#eb052f",
        },
        primary: {
          DEFAULT: "#4f46e5",
          focus: "#4338ca",
        },
        accent: {
          DEFAULT: "#5f5af6",
          focus: "#4d47f5",
          light: "#818cf8",
        },

        // Base Colors
        // Color Tailwind
        slate: {
          50: "#f8fafc",
          100: "#f1f5f9",
          150: "#e9eef5",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#64748b",
          600: "#475569",
          700: "#334155",
          800: "#1e293b",
          900: "#0f172a",
        },
        zinc: {
          50: "#fafafa",
          100: "#f4f4f5",
          200: "#e4e4e7",
          300: "#d4d4d8",
          400: "#a1a1aa",
          500: "#71717a",
          600: "#52525b",
          700: "#3f3f46",
          800: "#27272a",
          900: "#18181b",
        },
        neutral: {
          50: "#fafafa",
          100: "#f5f5f5",
          200: "#e5e5e5",
          300: "#d4d4d4",
          400: "#a3a3a3",
          500: "#737373",
          600: "#525252",
          700: "#404040",
          800: "#262626",
          900: "#171717",
        },
        stone: {
          50: "#fafaf9",
          100: "#f5f5f4",
          200: "#e7e5e4",
          300: "#d6d3d1",
          400: "#a8a29e",
          500: "#78716c",
          600: "#57534e",
          700: "#44403c",
          800: "#292524",
          900: "#1c1917",
        },
        emerald: {
          50: "#ecfdf5",
          100: "#d1fae5",
          200: "#a7f3d0",
          300: "#6ee7b7",
          400: "#34d399",
          500: "#10b981",
          600: "#059669",
          700: "#047857",
          800: "#065f46",
          900: "#064e3b",
        },
        sky: {
          50: "#f0f9ff",
          100: "#e0f2fe",
          200: "#bae6fd",
          300: "#7dd3fc",
          400: "#38bdf8",
          500: "#0ea5e9",
          600: "#0284c7",
          700: "#0369a1",
          800: "#075985",
          900: "#0c4a6e",
        },
        indigo: {
          50: "#eef2ff",
          100: "#e0e7ff",
          200: "#c7d2fe",
          300: "#a5b4fc",
          400: "#818cf8",
          500: "#6366f1",
          600: "#4f46e5",
          700: "#4338ca",
          800: "#3730a3",
          900: "#312e81",
        },
        violet: {
          50: "#f5f3ff",
          100: "#ede9fe",
          200: "#ddd6fe",
          300: "#c4b5fd",
          400: "#a78bfa",
          500: "#8b5cf6",
          600: "#7c3aed",
          700: "#6d28d9",
          800: "#5b21b6",
          900: "#4c1d95",
        },
        fuchsia: {
          50: "#fdf4ff",
          100: "#fae8ff",
          200: "#f5d0fe",
          300: "#f0abfc",
          400: "#e879f9",
          500: "#d946ef",
          600: "#c026d3",
          700: "#a21caf",
          800: "#86198f",
          900: "#701a75",
        },
        rose: {
          50: "#fff1f2",
          100: "#ffe4e6",
          200: "#fecdd3",
          300: "#fda4af",
          400: "#fb7185",
          500: "#f43f5e",
          600: "#e11d48",
          700: "#be123c",
          800: "#9f1239",
          900: "#881337",
        },
        navy: {
          50: "#f8fafc",
          300: "#697a9b",
          400: "#5c6b8a",
          450: "#465675",
          500: "#384766",
          600: "#313e59",
          700: "#26334d",
          750: "#222e45",
          800: "#202b40",
          900: "#192132",
        },

        // Base Color From Preset
        brandblue: colors.blue[500],
        brandred: colors.red[500],
      },
      keyframes: {
        "progress-increase": {
          "0%": { left: "-5%", width: "5%" },
          "100%": { left: "125%", width: "100%" },
        },
        "spinner-grow": {
          "0%, to": { transform: "scale(0)" },
          "50%": { transform: "scale(1.1)" },
        },
      },
      animation: {
        "spinner-grow": "spinner-grow 1.5s ease-in-out infinite",
        "spin-slow": "spin 3s linear infinite",
        "is-indeterminate":
          "progress-increase 2s cubic-bezier(.4,0,.2,1) infinite",
      },
    },
  },
  plugins: [],
};
