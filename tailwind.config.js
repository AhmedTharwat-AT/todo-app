/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
      },
      screens: {
        sm: "640px",
        md: "768px",
      },
    },
    extend: {
      screens: {
        bp: "542px",
      },
      backgroundImage: {
        "check-background":
          "linear-gradient(hsl(192, 100%, 67%), hsl(280, 87%, 65%))",

        "desk-dark": "url('/assets/bg-desktop-dark.jpg')",
        "desk-light": "url('/assets/bg-desktop-light.jpg')",
        "mobile-dark": "url('/assets/bg-mobile-dark.jpg')",
        "mobile-light": "url('/assets/bg-mobile-light.jpg')",

        "icon-light": "url('/assets/icon-moon.svg')",
        "icon-dark": "url('/assets/icon-sun.svg')",
        "icon-check": "url('/assets/icon-check.svg')",
        "icon-cross": "url('/assets/icon-cross.svg')",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
