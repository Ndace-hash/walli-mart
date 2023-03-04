<template>
  <div class="py-2 max-w-5xl">
    <NavBar />
    <slot />
    <AppFooter />
  </div>
</template>

<script setup>
import NavBar from '@/components/NavBar.vue'
import AppFooter from '@/components/AppFooter.vue'
</script>
