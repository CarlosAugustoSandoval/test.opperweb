import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import 'tw-elements'
import './plugins/VeeValidate.js'
import installComponents from './plugins/VeeValidate.js'

import router from './router'
import store from './store'

const app = createApp(App)
installComponents(app)
app.use(store).use(router).mount('#app')
