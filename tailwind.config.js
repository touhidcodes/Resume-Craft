/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1976d2",
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

  plugins: [],
};
