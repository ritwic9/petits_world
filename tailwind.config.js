/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    fontFamily: {
      sans: ['"Athiti"', "sans-serif"],
    },
    fontSize: {
      xl: "48px",
      lg: "32px",
      md: "24px",
      sm: "20px",
    },
    screens: {
      sm: "576px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    colors: {
      primary: "#f5e5dc",
      button: "#F15956",
      white: "#FFFFFF",
      black: "#000000",
      text: "#282269",
    },

    extend: {
      spacing: {
        1: "8px",
        2: "16px",
        3: "24px",
        4: "32px",
        5: "40px",
        6: "48px",
        7: "56px",
        8: "64px",
        9: "72px",
        10: "80px",
      },
      margin: {
        1: "8px",
        2: "16px",
        3: "24px",
        4: "32px",
        5: "40px",
        6: "48px",
        7: "56px",
        8: "64px",
        9: "72px",
        10: "80px",
        max: "128px",
      },
      borderRadius: {
        sm: "20px",
        lg: "50px",
      },
    },
  },
  plugins: [],
};
