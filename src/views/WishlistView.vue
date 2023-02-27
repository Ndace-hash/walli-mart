<template>
  <div>
    <div class="flex gap-6 items-center">
      <h1 class="text-2xl capitalize font-semibold flex gap-2 items-center">
        <Font-awesome-icon icon="fa-solid fa-shopping-cart" />
        <span>My wishlist</span>
      </h1>
      <span
        class="flex items-center justify-center text-lg text-white bg-black w-6 h-6 rounded-full font-bold"
        >{{ store.wishlist.length }}</span
      >
    </div>

    <div class="flex flex-col gap-5">
      <CartItem v-for="(item, index) in store.cart" :key="index" :Item="item" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onBeforeMount } from 'vue'
import store from '@/store'
import CartItem from '@/components/CartItem.vue'

onBeforeMount(() => {
  let wishlistString = localStorage.getItem('wishlist')
  if (typeof wishlistString == 'string') {
    store.wishlist = JSON.parse(wishlistString)
  } else {
    localStorage.setItem('wishlist', JSON.stringify(store.wishlist))
    throw new Error('Error: item does not exist')
  }
})
</script>
