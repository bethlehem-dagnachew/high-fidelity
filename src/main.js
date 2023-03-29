import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/index.css'
// import VueTailwindDatepicker from 'vue-tailwind-datepicker'
// const app = createApp(App)
// app.use(Datepicker)
createApp(App).use(store).use(router).mount('#app')
