<template>
  <div class="flex gap-4 border-2 mx-4 w-max pr-48 rounded-md relative">
    <div class="w-60 rounded-md overflow-hidden">
      <img :src="Item.image" :alt="Item.title" />
    </div>
    <div class="py-2">
      <h3 class="font-extrabold capitalize text-lg w-40">{{ Item.title }}</h3>
      <p class="font-medium text-base my-4">${{ Item.price }}</p>
      <div class="flex items-center justify-start gap-3 mt-4">
        <button class="py-1 px-3 border-2" @click="viewProduct(Item.id)">View</button>
        <button class="py-1 px-3 border-2">Remove</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { viewProduct } from '@/composables/useRouter'
import store from '@/store'
export default {
  setup() {
    return { viewProduct }
  },
  props: ['Item'],
  methods: {
    removeFromWishlist(id: number) {
      store.wishlist = store.wishlist.filter((item) => item.id !== id)
      localStorage.setItem('wishlist', JSON.stringify(store.wishlist))
    }
  }
}
</script>
