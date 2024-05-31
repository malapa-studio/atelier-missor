/** @type {import('tailwindcss').Config} */
export default {
  content: [
      "./index.html",
      "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
        colors: {
            'missor-primary': '#f5e1a4'
        }
    },
  },
  plugins: [
      require('daisyui')
  ],
}

