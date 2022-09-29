/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./index.html",
      "./src/components/AddComponent.vue",
      "./src/components/ResultsComponent.vue",
      "./src/components/SearchComponent.vue",
      "./src/App.vue"
  ],
  theme: {
    extend: {},
  },
  plugins: [
      require('@tailwindcss/forms'),
  ],
}
