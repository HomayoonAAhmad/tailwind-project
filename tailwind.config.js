module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      fontFamily: {
        vazirmatn: ["Vazirmatn", "sans-serif"],
        yekan: ["YekanBakh", "sans-serif"],
        yekanBold: ["YekanBakh-bold", "sans-serif"],
      },

      boxShadow: {
        "inner-shadow": "inset 0 4px 6px rgba(0, 0, 0, 0.1)",
      },
      colors: {
        "primary-color": "#D1AD76",
        "gradient-light": "#485A75",
        "gradient-dark": "#293A51",
      },
      maxWidth: {
        1200: "1200px", // Adds a custom max-width of 1200px
      },
      boxShadow: {
        "inner-shadow":
          "inset 0px 8px 16px rgba(0, 0, 0, 0.1),inset 0px 4px 8px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
