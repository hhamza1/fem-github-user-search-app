import { createApp } from 'vue'
import App from './App.vue'
import store from './store'

import './assets/sass/_main.scss'

const app = createApp(App)
app.use(store)
app.mount('#app')
