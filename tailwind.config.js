/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",'./node_modules/bootstrap/dist/**/*.css' ],
  theme: {
    extend: {
      colors: {
        nyanza: "#C4E7D4",
        ashGray: "#C4DACF",
        frenchGray: "#B9C0DA",
        roseQuartz: "#998DA0",
        wenge: "#63585E",
        cyan: "#00B4D8",
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};
