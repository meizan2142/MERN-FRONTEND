/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'mobileS': '320px',
      'mobileM': '375px',
      'mobileL': '425px',
      'md': '768px',
      'lg': '1024px',
      'laptopL': '1440px',
      'desktop': '1880px',
    },
  },
  plugins: [
  ],
}