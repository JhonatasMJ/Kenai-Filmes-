// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", 
  ],
  theme: {
    extend: {
      colors: {
        cinza: '#121214',
        amarelo: '#FFA634',
        input: '#181818'
      },
      backgroundImage: {
        'fundo':  "url('./src/assets/fundo.png')",
    }
  },
  plugins: [],
  }
}