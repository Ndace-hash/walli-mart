<template>
  <div class="py-2 max-w-5xl relative">
    <NavBar />
    <div class="mb-12 min-h-full">
      <slot />
    </div>
    <AppFooter class="absolute bottom-0" />
  </div>
</template>

<script setup>
import NavBar from '@/components/NavBar.vue'
import AppFooter from '@/components/AppFooter.vue'
</script>
