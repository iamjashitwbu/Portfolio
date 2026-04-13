/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#090909",
        "bg-soft": "#111111",
        text: "#f3eee6",
        muted: "#aea69a",
        accent: "#d78d1f",
        "accent-soft": "rgba(215, 141, 31, 0.18)",
        rule: "rgba(243, 238, 230, 0.14)",
      },
      fontFamily: {
        sans: ["Space Grotesk", "sans-serif"],
        mono: ["IBM Plex Mono", "monospace"],
      },
      letterSpacing: {
        eyebrow: "0.12em",
      },
    },
  },
  plugins: [],
}
