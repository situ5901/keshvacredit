/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // Enables class-based dark mode
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {}
  },
  corePlugins: {
    preflight: true, // Ensures Tailwind resets are applied
  },
  future: {
    hoverOnlyWhenSupported: false, // Ensures legacy hover behavior
  },
  plugins: []
};
