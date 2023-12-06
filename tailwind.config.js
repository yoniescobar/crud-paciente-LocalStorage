/** @type {import('tailwindcss').Config} */
module.exports = {
  //content: ["./src/**/*.html", "./src/**/*.vue", "./src/**/*.jsx"],
  purge: ["html", "./src/**/*.vue", "./src/**/*.jsx"],
  theme: {
    extend: {
      colors: {
        primary: "#047E0D",
        secondary: "#ff5722",
        success: "#4caf50",
        info: "#2196f3",
        warning: "#ff9800",
        danger: "#f44336",
      },
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
        serif: ['Roboto Slab', 'serif'],
      },
    },
  },
  plugins: [],
}
