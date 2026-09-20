import { createApp } from 'vue'
import router from '@/config/router'
import 'bootstrap-icons/font/bootstrap-icons.css'
import '@/assets/style.css'
import App from './App.vue'
import Button from '@/components/Button.vue'

const app = createApp(App)
app.use(router)
app.component('Button', Button)
app.mount('#app')

