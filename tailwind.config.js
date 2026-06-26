/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#241022',
        steel: '#725069',
        line: '#f3b9d8',
        mist: '#fff0f8',
        signal: '#ff2f92',
        graphite: '#3f2438',
        mint: '#ffe0f1',
        amber: '#00c2d1',
      },
      boxShadow: {
        soft: '0 18px 55px rgba(255, 47, 146, 0.18)',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'Segoe UI', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
