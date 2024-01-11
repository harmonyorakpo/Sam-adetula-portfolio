/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      spacing: {
        '100':'26rem',
        '114':'30rem',
        '128': '32rem',
        '136': '34rem',
      }
    },
  },
  plugins: [],
}