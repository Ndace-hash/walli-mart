<template>
  <div class="flex gap-6">
    <div class="w-[400px]">
      <img :src="product.image" :alt="product.title" />
    </div>
    <div>
      <h2 class="text-lg font-bold capitalize my-3">{{ product.title }}</h2>
      <h4 class="font-medium mb-4">${{ product.price }}</h4>
      <p class="capitalize text-sm mb-6">
        <Font-awesome-icon icon="fa-solid fa-star" /> {{ product.rating.rate }} from
        {{ product.rating.count }} buyers
      </p>
      <p class="text-base mb-5 max-w-3xl">{{ product.description }}</p>
      <div class="flex gap-4">
        <button
          class="flex gap-2 items-center text-sm font-semibold border-2 py-1 px-2"
          @click="addToCart(product)"
        >
          <Font-awesome-icon icon="fa-solid fa-plus" />
          <span>add to cart</span>
        </button>
        <button
          class="flex gap-2 items-center text-sm font-semibold border-2 py-1 px-2"
          @click="addToWishlist(product)"
        >
          <Font-awesome-icon icon="fa-regular fa-heart" />
          <span>add to wishlist</span>
        </button>
      </div>

      <!-- <span>{{ product.category }}</span> -->
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import store from '@/store'
export default {
  data() {
    return {
      product: null,
      error: null,
      loading: false
    }
  },
  beforeMount() {
    this.getProduct()
  },
  methods: {
    async getProduct() {
      try {
        const { data } = await axios({
          url: `https://fakestoreapi.com/products/${this.$route.params.id}`
        })
        this.product = await data
        console.log(data)
      } catch (error) {
        throw new Error(error)
      }
    },
    addToCart(item) {
      store.cart.push(item)
      localStorage.setItem('cart', JSON.stringify(store.cart))
    },
    addToWishlist(item) {
      store.wishlist.push(item)
      localStorage.setItem('wishlist', JSON.stringify(store.wishlist))
    }
  }
}
</script>
