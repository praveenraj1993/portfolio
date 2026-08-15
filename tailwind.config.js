/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: "#FAFAFC",
        panel: "#FFFFFF",
        ink: "#14141F",
        inkMuted: "#5B5B6B",
        inkFaint: "#9C9CAE",
        border: "#ECECF3",
        indigo: { DEFAULT: "#6366F1", soft: "#EEF0FE" },
        violet: { DEFAULT: "#A855F7", soft: "#F6EEFE" },
        teal: { DEFAULT: "#14B8A6", soft: "#E9FBF8" },
        coral: { DEFAULT: "#FB7185", soft: "#FFEFF1" },
      },
      fontFamily: {
        display: ["var(--font-sora)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-plex-mono)", "monospace"],
      },
      keyframes: {
        floaty: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        floaty: "floaty 6s ease-in-out infinite",
        fadeUp: "fadeUp 0.7s ease-out forwards",
      },
    },
  },
  plugins: [],
};
