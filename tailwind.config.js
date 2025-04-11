/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#F0F9F7",
          100: "#6CC4AF",
          200: "#B2D8CF",
          300: "#4DAD96",
          400: "#6AA396",
          500: "#32977F",
          600: "#2D8873",
          700: "#287A67",
          800: "#236B5B",
          900: "#1E5D4F",
        },
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        league: ['"League Spartan"', 'sans-serif'],
      },
    },
  },
  plugins: [],

};
