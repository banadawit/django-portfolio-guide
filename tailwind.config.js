/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
        colors: {
        // Ensure you have these colors
        blue: { 600: '#2563eb' },
        purple: { 600: '#9333ea' },
        emerald: { 600: '#059669' },
        amber: { 600: '#d97706' },
        rose: { 600: '#e11d48' },
        indigo: { 600: '#4f46e5' }
      }
    },
  },
  plugins: [],
  darkMode: "class", // only if you're using class-based dark mode
};
