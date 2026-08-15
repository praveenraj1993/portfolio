/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        blueprint: {
          bg: "#0A1F2E",
          panel: "#0F2A3D",
          line: "#1C3E52",
          lineFaint: "#15304199",
          text: "#E8EEF2",
          muted: "#8FA8B8",
          mutedDim: "#5F7B8C",
        },
        copper: {
          DEFAULT: "#FF8A3D",
          dim: "#C96A2E",
        },
        teal: {
          DEFAULT: "#4FD1C5",
          dim: "#3AA89D",
        },
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-plex-mono)", "monospace"],
      },
      backgroundImage: {
        grid: "linear-gradient(#1C3E5240 1px, transparent 1px), linear-gradient(90deg, #1C3E5240 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "32px 32px",
      },
      keyframes: {
        "pulse-line": {
          "0%": { strokeDashoffset: "240" },
          "100%": { strokeDashoffset: "0" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.2" },
        },
      },
      animation: {
        "pulse-line": "pulse-line 2.4s linear infinite",
        fadeUp: "fadeUp 0.6s ease-out forwards",
        blink: "blink 1.6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
