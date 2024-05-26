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
        "card-not-active": "#F9F9F9",
        "admin-menu-color": "#082431",
        "admin-active-bg": "rgba(112, 127, 221, 0.1)",
        "admin-active-link": "#5A6ACF",
      },
      fontFamily: {
        "header-link": ["Gotchic"],
      },
    },
    container: {},
  },
  plugins: [],
};
