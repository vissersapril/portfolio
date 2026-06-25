/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#172033',
        steel: '#526070',
        line: '#d9e0e8',
        mist: '#f7f9fb',
        signal: '#1c7c8a',
        graphite: '#2f3642',
        mint: '#d9efe9',
        amber: '#f4b860',
      },
      boxShadow: {
        soft: '0 18px 55px rgba(23, 32, 51, 0.10)',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'Segoe UI', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
