/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        icon_Bg: 'rgba(115, 103, 240, 0.08)',
        primary: '#4078BC',
        secondary: '#6f6b7d',
        lightBlue: '#e8eff7',
        statText: '#5d596c',
      },
      boxShadow: {
        "bs-4-18":"0px 4px 18px 0px rgba(75, 70, 92, 0.10)",
        "bs-l-g-4-18":"var(--light-gray-card-box-shadow,  0px 4px 18px 0px rgba(75, 70, 92, 0.10))"
      }
    },
  },
  plugins: [],
};
