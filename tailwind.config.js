/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          "Helvetica Neue",
          "Arial",
          '"Noto Sans"',
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
        serif: [
          "ui-serif",
          "Georgia",
          "Cambria",
          '"Times New Roman"',
          "Times",
          "serif",
        ],
        mono: [
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "Consolas",
          '"Liberation Mono"',
          '"Courier New"',
          "monospace",
        ],
        saira: ["Saira"],
      },
      screens: {
        xs: "300px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      colors: {
        brand__white: "#FAF7F5",
        brand__cyan: "#007186",
        brand__light__cyan: "#08787F",
        bg__gray: "rgba(255, 255, 255, 0.3)",
        brand__bg__hover: "#EEEEEE",
        brand__gray__border: "#9ca3af",
      },
      fontWeight: {
        font__thin: "300",
        font__semibold: "600",
        font__bold: "700",
      },
      padding: {
        content__padding: "0 10px",
      },
      keyframes: {
        zoomIn: {
          "0%": {
            filter: "blur(0px)",
            transform: "scaleX(1)",
          },
          "97%": {
            filter: "blur(0px)",
          },
          "100%": {
            filter: "blur(20px)",
            transform: "scale(1.5)",
          },
        },
      },
      animation: {
        zoom__in: "zoomIn 10s linear infinite",
      },
      backgroundImage: {
        not__found: "url('../src/assets/svg/image-error-404.f7a6f4a6.svg')",
      },
    },
  },
  plugins: [],
};
