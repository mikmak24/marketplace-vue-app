import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/tailwind.css'
import { createVueWait } from 'vue-wait'

const VueWait = createVueWait()

createApp(App)
.use(store)
.use(router)
.use(VueWait)
// .use(DataTable)
.mount('#app')
