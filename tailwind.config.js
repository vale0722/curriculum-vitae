/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontSize: {
        sm: '14px',
      },
      colors: {
        gray: {
          50: '#F4F4F4',
          100: '#EEEEEE',
          200: '#F2F2F2',
          300: '#8E9C9D',
          400: '#97A6BA',
          700: '#364152',
        },
        primary: {
          50: '#E5F4F5',
          70: '#DFF9FC',
          100: '#CCE3E4',
          200: '#C4E7EA',
          300: '#8AD2D7',
        },
        yellow: {
          500: '#FACA15',
        },
      },
    },
  },
  plugins: [],
};
