import { createApp } from 'vue'
import App from './App.vue'
import './assets/style.css'
import router from './router'

// Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faPlay, faStop, faClock, faHome, faFolder } from '@fortawesome/free-solid-svg-icons'

// Vuex Store
import { key, store } from './shared/stores'

library.add(faPlay, faStop, faClock, faHome, faFolder)

const app = createApp(App)

app.use(store, key)
app.use(router)

app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
