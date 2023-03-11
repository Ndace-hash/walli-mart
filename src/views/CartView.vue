<template>
  <div>
    <div class="flex gap-6 items-center border-b-2 w-full mb-4">
      <h1 class="text-2xl px-5 py-4 capitalize font-semibold flex gap-2 items-center">
        <Font-awesome-icon icon="fa-solid fa-shopping-cart" />
        <span>My cart</span>
      </h1>
      <span
        class="flex items-center justify-center text-lg text-white bg-black w-6 h-6 rounded-full font-bold"
        >{{ store.cart.length }}</span
      >
    </div>

    <div class="flex flex-col gap-5 min-h-screen">
      <CartItem v-for="(item, index) in store.cart" :key="index" :Item="item" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onBeforeMount } from 'vue'
import store from '@/store'
import CartItem from '@/components/CartItem.vue'

onBeforeMount(() => {
  let cartString = localStorage.getItem('cart')
  if (typeof cartString == 'string') {
    store.cart = JSON.parse(cartString)
  } else {
    localStorage.setItem('cart', JSON.stringify(store.cart))

    throw new Error('Error: item does not exist')
  }
})
</script>
