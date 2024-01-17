/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'background-gta': "url('/assets/backgrand-gta.jpg')",
        'logo-rockstar': "url('/assets/logo.jpg')",
      }
    },
  },
  plugins: [],
}

