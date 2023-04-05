import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import api from './services/api'
import './assets/index.css'

createApp(App).use(store).use(api).use(router).mount('#app')
