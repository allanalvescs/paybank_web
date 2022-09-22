/** @type {import('tailwindcss').Config} */


module.exports = {
  content: [
    './src/**/*.tsx',
    '/index.html'
  ],
  theme: {
    extend: {
      backgroundImage: {
        "default-page": "linear-gradient(90deg, #256AFC 60%, #fff 40%)",
      }
    },
  },
  plugins: [],
}
