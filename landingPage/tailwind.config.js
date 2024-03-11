/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors:{
        "color-primario":"#01051e",
        "color-primario-light":"#020726",
        "color-primario-dark":"#010417e",
        "color-segundario":"#ff7d3b",
        "color-gris":"#333",
        "color-white":"#fff",
        "color-gota":"#a427df",
      }
    },
    container:{
      center: true,
      padding:{
        default:"20px",
        md:"50px"
      }
    }
  },
  plugins: [],
}

