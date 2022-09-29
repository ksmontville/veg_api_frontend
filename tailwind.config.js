/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      'index.html',
      './src/App.vue',
      './src/components/NavbarComponent.vue',
      './src/components/SearchComponent.vue',
      './src/components/ResultsComponent.vue',
      './src/components/AddComponent.vue',
  ],
  theme: {
    extend: {},
  },
  plugins: [
      require('@tailwindcss/forms'),
  ],
}
