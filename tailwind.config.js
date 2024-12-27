/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        bodoni:['Bodoni Moda', 'sans-serif']
      },
      backgroundImage:{
        'fondo-save' : "url('https://res.cloudinary.com/dfschbyq2/image/upload/v1735229051/_MG_2670-1_syiydx.jpg')",
        'fondo-save-desk' : "url('https://res.cloudinary.com/dfschbyq2/image/upload/v1735220904/Dise%C3%B1o_sin_t%C3%ADtulo-3_hm8hbi.png')"
      }
    },
  },
  plugins: [],
}

