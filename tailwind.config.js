module.exports = {
  content: ["./*.html"], // Scan HTML files for classes
  theme: {
    extend: {
      fontFamily: {
        vazirmatn: ["Vazirmatn", "sans-serif"],
        nastaliq: ["IranNastaliq", "sans-serif"], // Fallback to sans-serif
        yekan: ["Yekan", "sans-serif"], // Fallback to sans-serif
      },
      fontSize: {
        "custom-lg": "16px",
        "custom-sm": "10px",
      },
      borderRadius: {
        20: "20px", // Custom border-radius of 20px
        10: "10px",
      },
      textShadow: {
        nastaliq: "0 4px 4px rgba(0, 0, 0, 0.25)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("tailwindcss-textshadow")],
};
