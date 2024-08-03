/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      borderRadius:{
        'custom':'10% 0 10% 0'
      },
      backgroundColor:{
        'app-bg-blue':'#ffffff',
        'app-bg-head':'#450920',
        'footer':'#02c39a'

      },
      colors:{
        'primary':'#231942',
        'secondary':'red',
        'tertiary':'green',
        'textc':'#001d3d',
        'card':'#0b1a30',
        'gray':'#1a659e',
        'skill':'#003459',
        'edu':'#004e64',
        'contact':'#0b2545',
      }
    },
  },
  plugins: [],
}