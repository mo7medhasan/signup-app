/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
 
  theme: {
     extend: {colors: {
      primary: '#7244C8',
      black:'#344054',
      perGreen:"#12B76A"
    },},
  },
  variants: {
     extend: {},
  },
  plugins:  [],
 }