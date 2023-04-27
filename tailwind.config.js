/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      keyframes: {
        primium: {
          '0%': { opacity: '0' },
          '50%': { opacity: '1' },
        }
      },
      animation: {
        'spin-slow': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) ',
        'load': 'primium 1s',
        'load-3': 'primium 5s',
      }
    },
  },
  plugins: [],
}

