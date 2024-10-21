module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      fontFamily: {
        vazirmatn: ["Vazirmatn", "sans-serif"],
        nastaliq: ["IranNastaliq", "sans-serif"],
        yekan: ["YekanBakh", "sans-serif"],
      },
      fontSize: {
        "custom-lg": "16px",
        "custom-sm": "10px",
      },
      borderRadius: {
        20: "20px",
        10: "10px",
        15: "15px",
      },
      boxShadow: {
        "inner-shadow": "inset 0 4px 6px rgba(0, 0, 0, 0.1)",
      },
      colors: {
        "primary-color": "#D1AD76",
        "gradient-light": "#485A75",
        "gradient-dark": "#293A51",
      },
      width: {
        "social-icon-width": "42px",
      },
      height: {
        "social-icon-height": "42px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("tailwindcss-textshadow")],
};
