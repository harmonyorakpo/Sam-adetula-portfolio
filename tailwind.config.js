/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      spacing: {
        98: "25rem",
        100: "26rem",
        114: "30rem",
        128: "32rem",
        136: "34rem",
      },
      fontSize: {
        'xxs': '0.35rem',
        'ss': '0.65rem'
      },
      colors: {
        cardBorder: "#141414",
        whiteCard: "#F7F5FF",
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

// h-96	height: 24rem; /* 384px */