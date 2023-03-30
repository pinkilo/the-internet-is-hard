/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["layouts/**/*.html"],
  content: [],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
