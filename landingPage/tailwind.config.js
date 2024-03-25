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
        "color-primario-dark":"#010417",
        "color-segundario":"#ff7d3b",
        "color-gris":"#333",
        "color-white":"#fff",
        "color-gota":"#A427DF",
        "color-indigo":"#4338CA",
        "color-lima":"#84CC16",
        "color-rosa":"#BE123C",
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

