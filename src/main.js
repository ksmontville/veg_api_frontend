import { createApp } from 'vue'
import App from './App.vue'
import NavbarComponent from './components/NavbarComponent.vue'
import SearchComponent from './components/SearchComponent.vue'
import ResultsComponent from './components/ResultsComponent.vue'
import AddComponent from './components/AddComponent.vue'
import './index.css'
import './assets/main.css'

const app = createApp(App)

app
    .component("NavbarComponent", NavbarComponent)
    .component('SearchComponent', SearchComponent)
    .component('ResultsComponent', ResultsComponent)
    .component('AddComponent', AddComponent)
    .mount('#app')
