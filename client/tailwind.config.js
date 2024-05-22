/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      mb: "360px",
      tb: "480px",
      lp: "768px",
      ds: "1200px",
    },
    extend: {
      colors: {
        "header-link": "",
        "header-link_active": "",
        "admin-side-bg": "#F1F2F7",
        "admin-menu-color": "#082431",
      },
      fontFamily: {
        "header-link": ["Gotchic"],
      },
    },
    container: {},
  },
  plugins: [],
};
