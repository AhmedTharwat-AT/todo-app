/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      // padding: {
      //   DEFAULT: "3rem",
      //   sm: "2rem",
      //   md: "7rem",
      // },
      screens: {
        sm: "640px",
        md: "768px",
        // lg: "1044px",
        // xl: "1300px",
        // "2xl": "1556px",
      },
    },
    extend: {
      backgroundImage: {
        "check-background":
          "linear-gradient(hsl(192, 100%, 67%), hsl(280, 87%, 65%))",
        "desk-dark": "url('assets/bg-desktop-dark.jpg')",
        "desk-lign": "url('assets/bg-desktop-ligh.jpg')",
        "mobile-dark": "url('assets/bg-mobile-dark.jpg')",
        "mobile-light": "url('assets/bg-mobile-light.jpg')",
        "icon-light": "url('assets/icon-moon.svg')",
        "icon-dark": "url('assets/icon-sun.svg')",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
