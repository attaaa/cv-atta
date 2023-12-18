const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        primary: '#286F6C',
        'primary-dark': '#0D2F3F',
        accent: '#F26440',
      },
      textColor: {
        default: '#0D2F3F',
      },
      backgroundColor: {
        default: '#F8F7F1',
      },
      fontFamily: {
        sans: ["'Cal Sans'", ...defaultTheme.fontFamily.sans],
        body: ["'Poppins'", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
