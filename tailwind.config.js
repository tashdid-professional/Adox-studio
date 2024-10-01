/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/*.{html,js}",
    "./public/*.{html,js}"
  ],
  safelist: [
    '!duration-[0ms]',
    '!delay-[0ms]',
    'html.js :where([class*="taos:"]:not(.taos-init))'
  ],
  theme: {
    extend: {
      fontFamily: {
        archivo: ['Archivo Narrow', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('taos/plugin')
  ],
  
};
