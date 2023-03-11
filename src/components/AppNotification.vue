<template>
  <div
    class="bg-black text-white w-[400px] max-h-[100px] fixed bottom-4 right-2 z-10 rounded-md shadow-xl flex justify-between px-4 items-center"
  >
    <section class="w-4/5 flex flex-wrap py-2 px-3 capitalize items-center h-full">
      <p class="text-sm">
        You added <span class="font-bold text-base">{{ product?.title }}</span> to
        <span class="font-semibold text-base">{{ toWhere }}.</span>
      </p>
    </section>
    <button class="text-xl font-semibold m-0 cursor-pointer" @click="closeNotification">
      <Font-awesome-icon icon="fa-solid fa-times" />
    </button>
  </div>
</template>

<script setup lang="ts">
import NotifState from '../store/useNotification'
import type { Product } from '../types/utils'
defineProps<{
  toWhere: string
  product: Product | null
}>()

const closeNotification = () => {
  NotifState.visible = false
  NotifState.addTo = ''
  NotifState.product = null
}
</script>
