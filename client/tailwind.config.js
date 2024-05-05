/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "header-link": "",
        "header-link_active": "",
      },
      fontFamily: {
        "header-link": ["Gotchic"],
      },
    },
    container: {},
  },
  plugins: [],
};
