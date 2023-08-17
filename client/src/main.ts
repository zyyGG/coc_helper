import { createApp } from 'vue'
import './assets/global.css'
import App from './App.vue'
import { createPinia } from 'pinia'
// 引入路由
import router from './router'

const app = createApp(App)
const pinia = createPinia()
app.use(router)
app.use(pinia)
app.mount('#app')
