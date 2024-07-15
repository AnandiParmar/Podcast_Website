/** @type {import('tailwindcss').Config} */
export default {
  content: [
  "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        "slide-in-right":
         {
          "0%": 
          {
            visibility: "visible",
            transform: "translate3d(100%, 0, 0)",
          },
          "100%": 
          {
            transform: "translate3d(0, 0, 0)",
          },
        },
      },
    },
  },
  plugins: [],
}

