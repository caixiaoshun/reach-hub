import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import i18n from './i18n'
import './assets/globals.css' // Tailwind CSS and global styles
import { Toaster } from '@/components/ui/toast' // Import Toaster component
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'
const app = createApp(App)
app.use(ElementPlus)
app.use(router)
app.use(i18n)
// app.use(ElementPlus)
app.component('Toaster', Toaster) // Register Toaster globally

app.mount('#app')
