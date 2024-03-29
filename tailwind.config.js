/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      borderRadius: { extraLarge: "10rem" },
      blur: { xs: "2px" },
    },
  },
  plugins: [],
};
