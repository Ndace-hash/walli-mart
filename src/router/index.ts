import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import WishlistView from '../views/WishlistView.vue'
import CartView from '../views/CartView.vue'
import ProductDetails from '../views/product/ProductDetails.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/wishlist',
      name: 'wishlist',
      component: WishlistView
    },
    {
      path: '/cart',
      name: 'cart',
      component: CartView
    },
    {
      path: '/product/:id',
      name: 'productDetails',
      component: ProductDetails
    }
  ]
})

export default router
