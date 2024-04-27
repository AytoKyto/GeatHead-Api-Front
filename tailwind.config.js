/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      // Montserrat is the default font family
      sans: ["Inter", "sans-serif"],
    },
    fontSize: {
      xs: "0.6rem",
      sm: "0.7rem",
      base: "0.8rem",
      xl: "1rem",
      "2xl": "1.25rem",
      "3xl": "1.563rem",
      "4xl": "1.953rem",
      "5xl": "2.441rem",
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
