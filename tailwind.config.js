/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {

        customBlue: '#e6effa',
        customWhite: '#f6faff',
        lightBlue: '#ecf3fe',
        deepIndigo: '#3632a6',
        cyanBright: '#01e0ee',
        coral: '#f67459',
        mint: '#7ed1c2',
        darkRed: '#9b3938',
        lavender: '#a8aed2',
        tealBright: '#25cad2',
        softBlue: '#ebf2fb',
        mutedPurple: '#dde2f9',
        softPurple:'#abb0da'
        
      },
    },
  },
  plugins: [],
}

