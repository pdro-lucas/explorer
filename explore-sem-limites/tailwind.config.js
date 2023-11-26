/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Mulish', 'sans-serif']
      },
      backgroundImage: {
        gradient: 'linear-gradient(96deg, #343193 0%, #302C63 99.68%)'
      }
    }
  },
  plugins: []
}
