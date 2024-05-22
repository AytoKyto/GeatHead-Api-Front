/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backdropFilter: { 'none': 'none', 'blur': 'blur(20px)' },
    },
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
    colors: {
      // default colors from tailwind
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.slate,
      green: colors.emerald,
      purple: colors.violet,
      yellow: colors.amber,
      pink: colors.fuchsia,
      red: colors.red,
      slate: colors.slate,
      blue: colors.blue,
      indigo: colors.indigo,
      zinc: colors.zinc,
      custom: {
        50: "#E3E3ED",
        100: "#C7C7DB",
        200: "#9292B9",
        300: "#5D5D92",
        400: "#3A3A5A",
        450: "#2E2E48",
        500: "#171724",
        600: "#12121C",
        700: "#0E0E16",
        800: "#0A0A10",
        900: "#040406",
        950: "#020203",
      },
      custom_black: "#0d0d0d",
      custom_gray: "#1b1b1b",
    },
  },
  plugins: [require("@tailwindcss/forms")],
  
};
