/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: { 
    extend: {screens: {
      'tablet': '860px',
    'laptop': '1120px',
      'media975':'975px',
    'media360':'360px'},},
  },
  plugins: [],
  
}

