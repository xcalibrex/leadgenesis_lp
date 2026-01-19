/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          black: '#000000',
          dark: '#050505',
          card: '#0D0D0D',
          cyan: '#4CB6C6',
          muted: '#999999',
        }
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'cyan-gradient': 'linear-gradient(135deg, #4CB6C6 0%, #2E8B99 100%)',
      }
    },
  },
  plugins: [],
}
