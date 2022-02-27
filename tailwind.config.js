module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBlack: "#2C061F",
        darkGray: "#374045",
        darkOrange: "#D89216",
        darkCream: "#E1D89F",
      },
      fontFamily: {
        rightenous: ["Righteous"],
        acme: ["Acme"],
      },
    },
  },
  plugins: [],
};
