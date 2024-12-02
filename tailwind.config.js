/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        primary: "#1222FE",
      },
      screens: {
        xs: 0,
        sm: "480px",
        md: "768px",
        lg: "1024px",
        xl: "1440px",
      },
      maxWidth: {
        container: "1170px",
      },

      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
    },
    keyframes: {
      scroll: {
        to: { transform: "translateX(-100%)" },
      },
    },
    animation: {
      scroll: "scroll 45s linear infinite",
    },
  },

  plugins: [require("@tailwindcss/typography")],
};
