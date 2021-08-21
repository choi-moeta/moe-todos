// register vue composition api globally
import 'vue-global-api'
import { createApp } from 'vue'
import { createHead } from '@vueuse/head'
import { router } from './router'
import App from './App.vue'

// windicss layers
import 'virtual:windi-base.css'
import 'virtual:windi-components.css'
import './styles/main.css'
import 'virtual:windi-utilities.css'

const head = createHead()

const app = createApp(App)
app.use(head)
app.use(router)
app.mount('#app')
