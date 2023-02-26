<script setup lang="ts">
import AppHero from '../components/AppHero.vue'
import NavBar from '../components/NavBar.vue'
import ProductsDisplay from '../components/ProductsDisplay.vue'
</script>

<template>
  <div class="flex flex-col items-center py-2 max-w-5xl">
    <NavBar />
    <AppHero />
    <ProductsDisplay />
  </div>
</template>
