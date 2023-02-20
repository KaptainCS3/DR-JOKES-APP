/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: "class",
  theme: {
    extend: {
      // transitionProperty: {
      //   height: "width",
      // },
    },
    screens: {
      sm: { min: "200px", max: "475px" },
      // => @media (min-width: 200px and max-width: 475px) { ... }

      md: { min: "476px", max: "768px" },
      // => @media (min-width: 476px and max-width: 768px) { ... }

      lg: { min: "769px" },
      // => @media (min-width: 769px ) { ... }
    },
  },
  plugins: [],
};
