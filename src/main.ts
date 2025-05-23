import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/globals.css' // Tailwind CSS and global styles
import { Toaster } from '@/components/ui/toast' // Import Toaster component
// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'
const app = createApp(App)

app.use(router)
// app.use(ElementPlus)
app.component('Toaster', Toaster) // Register Toaster globally

app.mount('#app')
