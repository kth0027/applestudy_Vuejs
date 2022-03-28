import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import mitt from 'mitt'

let emitter = mitt();
let app = createApp(App)
app.config.globalProperties.emitter = emitter;

import store from './store.js'
import './registerServiceWorker'


createApp(App).use(store).mount('#app')
