<template>
  <header class="flex justify-between w-full px-4 border-b-2 py-2">
    <AppHeading title="walli mart" size="text-3xl" />
    <nav class="flex justify-center gap-4">
      <RouterLink to="/wishlist" class="flex items-center border-2 py-1 px-3 gap-1">
        <span class="capitalize font-semibold text-sm">your wishlist</span>
        <Font-awesome-icon icon="fa-solid fa-heart" />
      </RouterLink>
      <RouterLink to="/cart" class="flex items-center border-2 py-1 px-3 gap-1">
        <span class="capitalize font-semibold text-sm">your cart</span>
        <Font-awesome-icon icon="fa-solid fa-shopping-cart" />
      </RouterLink>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import AppHeading from './AppHeading.vue'
</script>
