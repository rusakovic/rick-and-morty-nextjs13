/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('/images/tile.jpeg')",
        searchresult: "url('/images/search-result/background.png')",
      },
      colors: {
        "royal-blue": "#753EEF",
        "electric-violet": "#b908f6",
      },

      minHeight: {
        "sign-in-min-height": "44px",
      },
      minWidth: {
        "sign-in-min-width": "144px",
      },
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
