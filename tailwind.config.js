/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      // Montserrat is the default font family
      sans: ["Inter", "sans-serif"],
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
