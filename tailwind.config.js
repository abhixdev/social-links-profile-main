/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
    extend: {
      colors: {
        offBlack: "#141414",
        darkGray: "#1f1f1f",
        normalGray: "#333333",
        primaryColor: "#c5f82a",
      },
    },
  },
  plugins: [],
};
