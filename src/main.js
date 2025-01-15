import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vClickOutside from 'click-outside-vue3'
import './assets/styles/global.scss'

createApp(App).use(router).use(vClickOutside).mount('#app')
