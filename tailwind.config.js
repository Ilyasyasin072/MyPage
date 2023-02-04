/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    // menimpa 
    container: {
      center: true,
      padding: '25px',
    },
    extend: {
      colors: {
        // primary: '#14b8a6',
        primary: '#00337C ',
        title: '#FFFFFF ',
        dark : '#0f172a',
        secondary: '#64748b',
      },
      screens: {
        '2xl' : '1320px'
      }
    },
  },
  plugins: [],
}
