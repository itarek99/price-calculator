/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: '#44C36F',
        },
        secondary: {
          DEFAULT: '#FF8643',
        },
        grey: {
          DEFAULT: '#969696',
        },
      },
      scale: {
        '-100': '-1',
      },
    },
  },
  plugins: [],
};
