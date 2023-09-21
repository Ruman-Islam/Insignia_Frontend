/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        brand__font__size__xs: "12px",
        brand__font__size__sm: "14px",
        brand__font__size__base: "16px",
        brand__font__size__md: "20px",
        brand__font__size__lg: "24px",
        brand__font__size__xl: "52px",
        brand__font__size__2xl: "74px",
      },
      fontFamily: {
        brand__font__family__fancy: "El Messiri",
        brand__font__family__regular: "Karla",
      },
      fontWeight: {
        brand__font__light: "300",
        brand__font__regular: "400",
        brand__font__semibold: "600",
        brand__font__bold: "700",
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
        brand__warm__white: "#FFFAED",
        brand__sky__blue: "#D1E4F5",
        bg__gray: "rgba(255, 255, 255, 0.3)",
        brand__bg__hover: "#EEEEEE",
        brand__gray__border: "#ffffff4d",
      },
      padding: {
        content__padding: "0 10px",
      },
      keyframes: {
        zoomIn: {
          "0%": {
            transform: "scale(1)",
          },
          "95%": {
            filter: "blur(0px)",
          },
          "100%": {
            filter: "blur(20px)",
            transform: "scale(1.5)",
          },
        },
      },
      animation: {
        zoom__in: "zoomIn 15s linear 1",
      },
      backgroundImage: {
        not__found: "url('../src/assets/svg/image-error-404.f7a6f4a6.svg')",
        landing__masking__title:
          "url('../src/assets/images/masking/text__clipping.jpg')",
        foreigner__background:
          "url('../src/assets/images/background/foreigner__bg.jpg')",
        popular__destination__background:
          "url('../src/assets/images/background/13237371_BG-6.jpg')",
        faq__background: "url('../src/assets/images/background/faq__bg.webp')",
      },
    },
  },
  plugins: [],
};
