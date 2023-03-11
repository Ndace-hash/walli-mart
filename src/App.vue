<script setup lang="ts">
import { RouterView } from 'vue-router'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import AppNotification from './components/AppNotification.vue'
import NotifState from './store/useNotification'
</script>

<template>
  <DefaultLayout>
    <AppNotification
      :product="NotifState.product"
      :to-where="NotifState.addTo"
      v-if="NotifState.visible"
    />
    <RouterView />
  </DefaultLayout>
</template>

<style>
body {
  scroll-behavior: smooth;
}
</style>
