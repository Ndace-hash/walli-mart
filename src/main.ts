import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './style.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faShoppingCart,
  faShoppingBag,
  faHeart,
  faStar,
  faPlus,
  faTag
} from '@fortawesome/free-solid-svg-icons'

library.add(faShoppingCart, faShoppingBag, faHeart, faStar, faPlus, faTag)

const app = createApp(App)

app.use(router)
app.component('Font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
