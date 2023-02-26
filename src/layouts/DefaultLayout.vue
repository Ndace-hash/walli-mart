<template>
  <div class="py-2 max-w-5xl">
    <NavBar />
    <slot />
  </div>
</template>

<script setup>
import NavBar from '@/components/NavBar.vue'
</script>
