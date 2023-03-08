<template>
  <div class="w-[300px] border-2 py-2 px-3 min-h-[400px] flex flex-col justify-between relative">
    <button class="absolute right-6 top-2 text-2xl" @click="addToWishlist(product)">
      <Font-awesome-icon icon="fa-regular fa-heart" />
    </button>
    <RouterLink :to="`/product/${product.id}`">
      <div class="w-full h-[250px] flex justify-center items-center">
        <img :src="product.image" :alt="product.title" class="h-full" />
      </div>
    </RouterLink>
    <RouterLink :to="`/product/${product.id}`">
      <h4 class="text-sm capitalize mb-1">{{ product.title }}</h4>
    </RouterLink>
    <h3 class="text-lg font-bold mb-1">${{ product.price }}</h3>
    <div class="flex justify-between items-center">
      <span class="text-xs flex items-center justify-center gap-[2px]">
        <Font-awesome-icon icon="fa-solid fa-star" />
        {{ product.rating.rate }}</span
      >

      <button class="text-sm font-semibold border-2 py-1 px-2" @click="addToCart(product)">
        <Font-awesome-icon icon="fa-solid fa-plus" />
        <span>add to cart</span>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Product } from '@/types/utils'
import store from '@/store'
defineProps(['product'])

const addToCart = (item: Product) => {
  store.cart.push(item)
  localStorage.setItem('cart', JSON.stringify(store.cart))
}
const addToWishlist = (item: Product) => {
  store.wishlist.push(item)
  localStorage.setItem('wishlist', JSON.stringify(store.wishlist))
}
</script>
