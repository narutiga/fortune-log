/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "src/pages/**/*.{js,ts,jsx,tsx}",
    "src/pages-component/**/*.{js,ts,jsx,tsx}",
    "src/component/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        22: "5.5rem",
        26: "6.5rem",
      },
    },
  },
  plugins: [],
};
