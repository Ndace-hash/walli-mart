<template>
  <div class="logo flex items-center gap-1">
    <Font-awesome-icon
      icon="fa-solid fa-shopping-bag"
      :class="[size, '-rotate-[20deg]']"
    />
    <h2 class="uppercase font-bold">{{ title }}</h2>
  </div>
</template>

<script setup lang="ts">
defineProps(["title", "size"]);
</script>
