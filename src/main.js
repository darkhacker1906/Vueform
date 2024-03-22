
import { registerPlugins } from '@/plugins'

import App from './App.vue'

import { createApp } from 'vue'
import  router  from './routes'
import store from './vuex/store'
const app = createApp(App)
app.use(router);
app.use(store);
registerPlugins(app)

app.mount('#app')
