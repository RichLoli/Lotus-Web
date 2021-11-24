import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import installElementPlus from './plugins/element'
import installElementPlusIcon from './plugins/element-plus-icons'

import '@/assets/common/css/normalize.css'
import '@/assets/style/index.css'

import Cookies from 'js-cookie'

const app = createApp(App)
installElementPlus(app)
installElementPlusIcon(app)
app.config.globalProperties.$cookies = Cookies;
app.use(router).mount('#app')
