module.exports = {
  content: ["./*.html"], // Scan HTML files for classes
  theme: {
    extend: {
      fontFamily: {
        vazirmatn: ["Vazirmatn", "sans-serif"],
      },
      fontSize: {
        "custom-lg": "16px",
        "custom-sm": "10px",
      },
      borderRadius: {
        20: "20px", // Custom border-radius of 20px
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
