/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "300px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      colors: {
        color__brand: "#A3238D",
      },
      keyframes: {
        zoomIn: {
          "0%": {
            opacity: "0",
            filter: "blur(20px)",
            transform: "translateX(50%) scaleX(3)",
          },
          "5%": {
            opacity: "1",
            filter: "blur(0px)",
            transform: "translateX(0) scaleX(1)",
          },
          "100%": {
            opacity: "0.6",
            transform: "scale(1.5, 1.5)",
          },
        },
      },
      animation: {
        zoom__in: "zoomIn 15s linear infinite",
      },
    },
  },
  plugins: [],
};
