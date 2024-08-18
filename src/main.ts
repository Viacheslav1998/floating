import { createApp } from 'vue'
import './style.css'
import router from './router'
import 'flowbite'
import App from './App.vue'


createApp(App)
  .use(router)  
  .mount('#app')
