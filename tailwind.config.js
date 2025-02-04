/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#fafbff",
        secondary: "#aaa6c3",
        tertiary: "#2580cf",
        quartiary: "#133b5c",
        txtColor: "#14181c",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
        "red-100": "red",
      },
      boxShadow: {
        miniCard: "0px 0px 4px 2px rgba(0, 0, 0, 0.08)",
        card: "0px 4px 45px rgba(0, 0, 0, 0.06)",

      },
      screens: {
        xs: "450px",
        ss: "280px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
    },
  },
  plugins: [],
};
