/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      spacing: {
        100: "26rem",
        114: "30rem",
        128: "32rem",
        136: "34rem",
      },
      colors: {
        cardBorder: "#141414",
        sunEffect: "#FFAD0F"
      },
      blur: {
        '4xl': '72px',
        '5xl': '84px',
        '6xl': '96px',
      }
    },
  },
  plugins: [],
};
