const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        //'sans': ['Work Sans', ...defaultTheme.fontFamily.sans],
        'serif': ['EB Garamond', ...defaultTheme.fontFamily.serif],
      },
    },
  },
  plugins: [],
};

