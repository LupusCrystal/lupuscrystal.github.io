/** @type {import('tailwindcss').Config} */
export default {
  content: ["./pages/**/*.vue", "./components/**/*.vue", "./assets/css/*.css"],
  theme: {
    extend: {
      colors: {
        "primary": "#4D648D",
      },
      boxShadow: {
        'all-around': '0 0 8px #f16822',
        'all-around-mobile': '0 0 4px #f16822',
      }
    },
  },
  plugins: [
    
  ],
}

