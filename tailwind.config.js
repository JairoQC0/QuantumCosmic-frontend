/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
  extend: {
    keyframes: {
      stars: {
        "0%": { backgroundPosition: "0 0" },
        "100%": { backgroundPosition: "10000px 10000px" },
      },
    },
    animation: {
      stars: "stars 200s linear infinite",
    },
  },
};
