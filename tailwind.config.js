/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
   theme: {
    extend: {
      fontFamily: {
        satoshi: ['Manrope', 'sans-serif'], // 👈 use your custom name and fallback
        CF: ['Anton', 'sans-serif']
      },
    },
  },
  plugins: [],
}

