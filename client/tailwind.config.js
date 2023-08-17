/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,vue}"],
  theme: {
    extend: {
      colors:{
        "deep-dark-300":"#4e4e4e",
        "deep-dark-400":"#3e3e3e",
        "deep-dark-500":"#2e2e2e",
        "deep-dark-600":"#1e1e1e",
      },
    },
  },
  plugins: [],
}