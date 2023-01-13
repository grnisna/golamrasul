/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  themes: [
    {
      mytheme: {
        primary: "#36D399",

        secondary: "#F000B8",

        accent: "#36D399",

        neutral: "#3D4451",

        "base-100": "#FFFFFF",

        info: "#3ABFF8",

        success: "#36D399",

        warning: "#FBBD23",

        error: "#F87272",

        deepBlack:"#000000"
      },
    },
  ],
  plugins: [require('daisyui')],
};
