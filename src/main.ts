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
  faMinus,
  faTimesCircle,
  faTag
} from '@fortawesome/free-solid-svg-icons'
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons'

library.add(
  faShoppingCart,
  faShoppingBag,
  faHeart,
  faStar,
  faPlus,
  faTag,
  faMinus,
  faTimesCircle,
  farHeart
)

const app = createApp(App)

app.use(router)
app.component('Font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
