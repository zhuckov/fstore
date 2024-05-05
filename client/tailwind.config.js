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
      screens: {
        mb: "360px",
        tb: "480px",
        lp: "768px",
        ds: "1200px",
      },
    },
    container: {},
  },
  plugins: [],
};
