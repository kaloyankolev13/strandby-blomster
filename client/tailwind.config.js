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
        accent: '#AA9454',
      },
    },
  },
  plugins: [],
};
