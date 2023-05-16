/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '630px',
      md: '768px',
      lg: '1000px',
      xl: '1300px',
      xxl: '1500px',
    },
    extend: {
      colors: {
        primary: '#BECCA5',
        accent: '#5D713B',
        dark: '#333',
        pink: '#E2C9DB',
      },
      rotate: {
        30: '30deg',
      },

      scale: {
        175: '1.75',
      },
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
};
