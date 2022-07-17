/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      linearBorderGradients: ({ theme }) => ({
        colors: {
          "light-blue": theme("colors.blue.500"),
        },
        background: theme("colors"),
      }),
      backgroundImage: {
        "login-background": 'url("/static/background/login-background.png")',
        "footer-b-background":
          'url("/static/background/bottom-background.svg")',
        "top-background": 'url("/static/background/dark-main-background.jpg")',
        "main-l-blob": 'url("/static/background/left-blob-background.svg")',
        "main-r-blob":
          'url("/static/background/main-right-blob-background.svg")',
        "main-b-circle": 'url("/static/background/main-b-circle.svg")',
        "main-tr-circle": 'url("/static/background/main-tr-circle.svg")',
        "main-gradient-rectangle":
          'url("/static/background/main-gradient-rectangle.svg")',
      },
    },
    animation: {
      blob: "blob 7s infinite",
      text: "text 5s ease infinite",
    },
    keyframes: {
      blob: {
        "0%": {
          transform: "translate(0px, 0px) scale(1)",
        },
        "33%": {
          transform: "translate(30px, -50px) scale(1.1)",
        },
        "66%": {
          transform: "translate(-20px, 20px) scale(0.9)",
        },
        "100%": {
          transform: "tranlate(0px, 0px) scale(1)",
        },
      },
      text: {
        "0%, 100%": {
          "background-size": "200% 200%",
          "background-position": "left center",
        },
        "50%": {
          "background-size": "200% 200%",
          "background-position": "right center",
        },
      },
    },
  },
  plugins: [require("tailwindcss-border-gradient-radius")],
};
