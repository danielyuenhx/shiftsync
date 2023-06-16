/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif']
    },
    extend: {
      colors: {
        'primary': '#19c89c',
        'secondary': '#5cebc7',
        'black': '#1f1e1e',
        'white': '#f8f7f9',
      },
    },
  },
  plugins: [],
  prefix: 'tw-',
}