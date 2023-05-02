/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '330px',
      md: '768px',
      lg: '1000px',
      xl: '1300px',
      xxl: '1500px',
    },
    extend: {
      colors: {
        primary: '#0A0A0A',
        accent: '#AA9454',
      },
    },
  },
  plugins: [],
};
