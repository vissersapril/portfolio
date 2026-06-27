/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#2C2C31',
        steel: '#6B7280',
        line: '#eadfdc',
        mist: '#FAF8F6',
        signal: '#D97998',
        graphite: '#404045',
        mint: '#EFF5EA',
        amber: '#93A889',
        accent: '#F6D4DD',
      },
      boxShadow: {
        soft: '0 16px 48px rgba(44, 44, 49, 0.08)',
      },
      fontFamily: {
        sans: ['Inter', 'Aptos', 'Segoe UI', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
